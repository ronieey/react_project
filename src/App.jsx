import React, { useEffect } from "react";
import { TaskProvider, useTasks } from "./context/TaskContext";
import TaskDashboard from "./pages/TaskDashboard";
import { fetchTasks } from "./services/api";

const App = () => {
  const { dispatch } = useTasks();

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks();
      tasks.forEach((task) =>
        dispatch({ type: "ADD_TASK", payload: task })
      );
    };
    getTasks();
  }, [dispatch]);

  return (
    <TaskProvider>
      <TaskDashboard />
    </TaskProvider>
  );
};

export default App;
