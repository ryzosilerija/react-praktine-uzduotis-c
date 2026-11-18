import { useState } from "react";

function TaskForm({ onAdd }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  // Form submit works both with the button and with the Enter key
  function handleSubmit(event) {
    event.preventDefault();
    const trimmedText = text.trim();

    if (trimmedText === "") {
      setError("Užduoties tekstas negali būti tuščias.");
      return;
    }

    onAdd(trimmedText);
    setText("");
    setError("");
  }

  return (
    <div>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Įveskite užduotį"
        />
        <button type="submit">Pridėti užduotį</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default TaskForm;
