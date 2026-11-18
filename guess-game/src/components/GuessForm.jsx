function GuessForm({ value, onChange, onGuess, disabled }) {
  // Form submit works both with the button and with the Enter key
  function handleSubmit(event) {
    event.preventDefault();
    onGuess();
  }

  return (
    <form className="guess-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        placeholder="Jūsų spėjimas"
      />
      <button type="submit" disabled={disabled}>
        Spėti
      </button>
    </form>
  );
}

export default GuessForm;
