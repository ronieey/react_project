import React, { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
import TaskFilters from '../components/TaskFilters';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'Pending' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
}

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTasks([
      { id: 1, title: 'Cementing', description: 'Floor 1 cementing', status: 'Pending', priority: 'Low' },
      { id: 2, title: 'Painting', description: 'Outdoor painting', status: 'Completed', priority: 'High' },
    ]);
  }, []);

  useEffect(() => {
    const filtered = tasks.filter((task) => 
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(filtered);
  }, [searchTerm, tasks]);

  const addTask = (title: string, description: string, priority: 'Low' | 'Medium' | 'High') => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      status: 'Pending',
      priority,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskStatus = (id: number) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filterByStatus = (status: 'Pending' | 'Completed' | 'All') => {
    if (status === 'All') {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.status === status));
    }
  };

  return (
    <div>
      <h2 style={{paddingLeft :'550px'}}>DASHBOARD</h2>
      <TaskForm addTask={addTask} />
      <TaskFilters filterByStatus={filterByStatus} searchTask={setSearchTerm} />
      <div>
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            {...task}
            toggleStatus={toggleTaskStatus}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;