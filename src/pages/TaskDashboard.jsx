import React, { useState } from "react";
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";

const TaskDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  return (
    <div className="task-dashboard">
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <TaskList searchTerm={searchTerm} statusFilter={statusFilter} />
      <AddTaskForm />
    </div>
  );
};

export default TaskDashboard;
