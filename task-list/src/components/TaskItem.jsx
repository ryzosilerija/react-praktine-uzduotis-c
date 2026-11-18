function TaskItem({ task, onComplete, onDelete }) {
  return (
    <li className={task.completed ? "task-item completed" : "task-item"}>
      <span>{task.text}</span>
      {task.completed && <span className="done-label">Atlikta</span>}
      <button onClick={() => onComplete(task.id)} disabled={task.completed}>
        Pažymėti kaip atliktą
      </button>
      <button onClick={() => onDelete(task.id)}>Ištrinti</button>
    </li>
  );
}

export default TaskItem;
