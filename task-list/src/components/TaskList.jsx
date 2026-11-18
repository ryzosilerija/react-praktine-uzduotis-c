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

  // Creates a new array and changes only the selected task
  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <TaskForm onAdd={addTask} />

      {tasks.length === 0 ? (
        <p>Užduočių dar nėra.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onComplete={completeTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
