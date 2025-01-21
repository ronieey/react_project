import React from "react";
import { useTasks } from "../context/TaskContext";

const TaskList = () => {
  const { state, dispatch } = useTasks();
  
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const handleToggleStatus = (id) => {
    dispatch({ type: "TOGGLE_STATUS", payload: id });
  };

  return (
    <div>
      {state.tasks.map((task) => (
        <div key={task.id} className="task-item">
          <h3>{task.title}</h3>
          <p>{task.status} | Priority: {task.priority}</p>
          <button onClick={() => handleToggleStatus(task.id)}>
            {task.status === 'Pending' ? "Mark as Completed" : "Mark as Pending"}
          </button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
