function GuessForm({ value, onChange, onGuess, disabled }) {
  // Submitting the form works with the button and with Enter
  const handleSubmit = (event) => {
    event.preventDefault();
    onGuess();
  };

  return (
    <form className="guess-form" onSubmit={handleSubmit}>
      <div className="guess-box">
        ĮVESKITE SKAIČIŲ
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          disabled={disabled}
        />
      </div>
      <button type="submit" className="guess-button" disabled={disabled}>
        Spėti
      </button>
    </form>
  );
}

export default GuessForm;
