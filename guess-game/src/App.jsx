import GuessGame from "./components/GuessGame";

function App() {
  return (
    <main className="container">
      <h1>Skaičių spėjimo žaidimas</h1>
      <p>Atspėkite skaičių nuo 1 iki 100.</p>
      <GuessGame />
    </main>
  );
}

export default App;
