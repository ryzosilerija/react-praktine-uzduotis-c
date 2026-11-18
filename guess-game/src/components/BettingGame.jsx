import { useState } from "react";
import PriceDisplay from "./PriceDisplay";
import "./BettingGame.css";

const START_PRICE = 20;
const ROUND_SECONDS = 30;
const CHART_HEIGHT = 500;
const PX_PER_EURO = 5;
const STEP_PX = 15;

function getRandomChange() {
  const amount = Math.floor(Math.random() * 5) + 1;
  return Math.random() < 0.5 ? amount : -amount;
}

// Converts a price to a vertical position, kept inside the chart
function getY(price) {
  const y = CHART_HEIGHT / 2 - (price - START_PRICE) * PX_PER_EURO;
  return Math.min(Math.max(y, 0), CHART_HEIGHT - 10);
}

function BettingGame() {
  const [time, setTime] = useState(ROUND_SECONDS);
  const [isActive, setIsActive] = useState(false);
  const [history, setHistory] = useState([START_PRICE]);
  const [wallet, setWallet] = useState(2000);
  const [betInput, setBetInput] = useState("");
  const [message, setMessage] = useState("");

  function startRound(choice) {
    const bet = Number(betInput);

    if (betInput.trim() === "" || !Number.isFinite(bet) || bet <= 0) {
      setMessage("Įveskite teigiamą statymo sumą.");
      return;
    }
    if (bet > wallet) {
      setMessage("Piniginėje nepakanka pinigų.");
      return;
    }

    setWallet((prev) => prev - bet);
    setIsActive(true);
    setTime(ROUND_SECONDS);
    setHistory([START_PRICE]);
    setMessage("");

    // Round data lives in this closure, so the bet can't be changed mid-round
    let timeLeft = ROUND_SECONDS;
    let price = START_PRICE;
    const prices = [START_PRICE];

    // One interval drives both the timer and the price
    const intervalId = setInterval(() => {
      price += getRandomChange();
      prices.push(price);
      timeLeft -= 1;

      setHistory([...prices]);
      setTime(timeLeft);

      if (timeLeft === 0) {
        clearInterval(intervalId);
        finishRound(choice, bet, price);
      }
    }, 1000);
  }

  function finishRound(choice, bet, finalPrice) {
    let result = "same";
    if (finalPrice > START_PRICE) result = "higher";
    if (finalPrice < START_PRICE) result = "lower";

    const resultText = result === "higher" ? "pakilo" : "nukrito";

    if (result === "same") {
      setWallet((prev) => prev + bet);
      setMessage("Vertė nepasikeitė – statymas grąžintas.");
    } else if (result === choice) {
      setWallet((prev) => prev + bet * 2);
      setMessage(`Teisingai! Vertė ${resultText}. Laimėjote ${bet * 2} €.`);
    } else {
      setMessage(`Neteisingai! Vertė ${resultText}. Pralošėte ${bet} €.`);
    }

    setIsActive(false);
  }

  const currentPrice = history[history.length - 1];

  return (
    <div className="game">
      <div className="top-bar">
        <h2 className="timer">Laikas: {time} s</h2>
        <div className="wallet">Piniginė: {wallet} €</div>
      </div>

      {isActive && <PriceDisplay price={currentPrice} startPrice={START_PRICE} />}

      <div className="chart" style={{ height: `${CHART_HEIGHT}px` }}>
        {/* Columns are derived from price history, not stored in state */}
        {history.slice(1).map((price, index) => {
          const isUp = price >= history[index];
          return (
            <div
              key={index}
              className="column"
              style={{
                left: `${20 + index * STEP_PX}px`,
                top: `${getY(price)}px`,
                backgroundColor: isUp ? "green" : "red",
              }}
            />
          );
        })}
      </div>

      <div className="controls">
        <button
          className="lower"
          onClick={() => startRound("lower")}
          disabled={isActive}
        >
          ŽEMIAU
        </button>

        <div className="bet">
          <label htmlFor="bet-input">STATYMAS</label>
          <input
            id="bet-input"
            type="text"
            value={betInput}
            onChange={(event) => setBetInput(event.target.value)}
            disabled={isActive}
            placeholder="0"
          />
        </div>

        <button
          className="higher"
          onClick={() => startRound("higher")}
          disabled={isActive}
        >
          AUKŠČIAU
        </button>
      </div>

      {message && <p className="betting-message">{message}</p>}
    </div>
  );
}

export default BettingGame;
