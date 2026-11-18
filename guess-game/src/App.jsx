import { useState } from "react";
import GuessGame from "./components/GuessGame";
import BettingGame from "./components/BettingGame";

function App() {
  const [mode, setMode] = useState("guess");

  return (
    <div>
      <nav className="mode-switch">
        <button
          className={mode === "guess" ? "active" : ""}
          onClick={() => setMode("guess")}
        >
          Skaičių spėjimas
        </button>
        <button
          className={mode === "betting" ? "active" : ""}
          onClick={() => setMode("betting")}
        >
          
        </button>
      </nav>

      {mode === "guess" ? (
        <main className="container">
          <h1>Skaičių spėjimo žaidimas</h1>
          <p>Atspėkite skaičių nuo 1 iki 100.</p>
          <GuessGame />
        </main>
      ) : (
        <BettingGame />
      )}
    </div>
  );
}

export default App;
