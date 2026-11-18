function TaskItem({ task }) {
  return (
    <li className="task-item">
      <span>{task.text}</span>
    </li>
  );
}

export default TaskItem;
