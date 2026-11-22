import { useState } from "react";
import GuessForm from "./GuessForm";
import Message from "./Message";

function GuessGame() {
  // run tik syki kad secret numeris liktu toks pats
  const [secretNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isWon, setIsWon] = useState(false);

  const handleGuess = () => {
    const number = Number(guess.trim());

    // tikriname ar tai kas ivesta tuscia ar turi numeri
    if (guess.trim() === "" || !Number.isInteger(number) || number < 1 || number > 100) {
      setMessage("Įveskite sveikąjį skaičių nuo 1 iki 100");
      setMessageType("error");
      return;
    }

    setAttempts(attempts + 1);

    if (number > secretNumber) {
      setMessage("Bandyk mažesnį");
      setMessageType("lower");
    } else if (number < secretNumber) {
      setMessage("Bandyk didesnį");
      setMessageType("higher");
    } else {
      setMessage("Teisingai!");
      setMessageType("win");
      setIsWon(true);
    }

    setGuess("");
  };

  return (
    <div className="guess-game">
      <h2 className="attempts">Bandymai: {attempts}</h2>
      <Message text={message} type={messageType} />
      <GuessForm
        value={guess}
        onChange={setGuess}
        onGuess={handleGuess}
        disabled={isWon}
      />
    </div>
  );
}

export default GuessGame;
