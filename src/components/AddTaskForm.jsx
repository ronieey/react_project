import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const AddTaskForm = () => {
  const { dispatch } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: "Pending",
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
    setTask({ title: "", description: "", priority: "Low" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
      />
      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
