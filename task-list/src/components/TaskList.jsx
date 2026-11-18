import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(1);

  function addTask(text) {
    const newTask = { id: nextId, text: text, completed: false };
    setTasks([...tasks, newTask]);
    setNextId(nextId + 1);
  }

  return (
    <div>
      <TaskForm onAdd={addTask} />

      {tasks.length === 0 ? (
        <p>Užduočių dar nėra.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
