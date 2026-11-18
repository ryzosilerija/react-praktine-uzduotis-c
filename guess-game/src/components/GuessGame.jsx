import { useState } from "react";
import GuessForm from "./GuessForm";

function GuessGame() {
  // Initializer function runs only once, so the number does not change between renders
  const [secretNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");

  function handleGuess() {
    setGuess("");
  }

  return (
    <div>
      <GuessForm value={guess} onChange={setGuess} onGuess={handleGuess} />
    </div>
  );
}

export default GuessGame;
