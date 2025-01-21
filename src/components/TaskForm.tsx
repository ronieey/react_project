import React, { useState } from 'react';

interface TaskFormProps {
  addTask: (title: string, description: string, priority: 'Low' | 'Medium' | 'High') => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Low');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title, description, priority);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <p style={{ marginRight: '10px' }}>Task Name:</p>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      </div>
      <br></br>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <p style={{ marginRight: '10px' }}>Description:</p>
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      </div>
      
      <br></br>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ marginRight: '40px' }}>Priority:</p>
        <select
          className="dropdown"
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'Low' | 'Medium' | 'High')}
          style={{ padding: '5px', }}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <br></br>
      <button type="submit">Add</button>
      
    </form>
  );
};

export default TaskForm;