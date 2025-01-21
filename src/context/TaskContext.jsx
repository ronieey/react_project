import React, { createContext, useReducer, useContext } from "react";

const TaskContext = createContext();

const initialState = {
  tasks: [],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    case "TOGGLE_STATUS":
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task
        ),
      };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
