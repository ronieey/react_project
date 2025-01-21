import React from 'react';


interface Task {
  id: number;
  title: string;
  description: string;
  status: 'Pending' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
}


interface TaskCardProps extends Task {
  toggleStatus: (id: number) => void;
  deleteTask: (id: number) => void;
}


const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  description,
  status,
  priority,
  toggleStatus,
  deleteTask,
}) => {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>Description: {description}</p>
      <p>Status: {status}</p>
      <p>Priority: {priority}</p>
      <button onClick={() => toggleStatus(id)}>
        {status === 'Pending' ? 'Mark as Completed' : 'Mark as Pending'}
      </button>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
};

export default TaskCard;