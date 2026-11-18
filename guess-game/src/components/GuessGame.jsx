import { useState } from "react";
import GuessForm from "./GuessForm";
import Message from "./Message";

function GuessGame() {
  // Initializer function runs only once, so the number does not change between renders
  const [secretNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  function handleGuess() {
    const trimmedGuess = guess.trim();
    const number = Number(trimmedGuess);

    // Rejects empty, non-numeric, fractional and out of range input
    if (
      trimmedGuess === "" ||
      !Number.isInteger(number) ||
      number < 1 ||
      number > 100
    ) {
      setMessage("Įveskite sveikąjį skaičių nuo 1 iki 100.");
      setIsError(true);
      return;
    }

    setAttempts(attempts + 1);
    setIsError(false);

    if (number > secretNumber) {
      setMessage("Bandyk mažesnį");
    } else if (number < secretNumber) {
      setMessage("Bandyk didesnį");
    }

    setGuess("");
  }

  return (
    <div>
      <GuessForm value={guess} onChange={setGuess} onGuess={handleGuess} />
      <Message text={message} isError={isError} />
      <p>Bandymų skaičius: {attempts}</p>
    </div>
  );
}

export default GuessGame;
