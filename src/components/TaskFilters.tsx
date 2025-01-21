import React from 'react';

interface TaskFiltersProps {
  filterByStatus: (status: 'Pending' | 'Completed' | 'All') => void;
  searchTask: (title: string) => void;
}

const TaskFilters: React.FC<TaskFiltersProps> = ({ filterByStatus, searchTask }) => {
  return (
    <div>
      <br>
      </br>
      <h2>Tasks</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <p style={{ marginRight: '10px' }}>Search:</p>
      <input style={{marginRight:'20px'}} type="text" placeholder="Search by title" onChange={(e) => searchTask(e.target.value)} />
      <select onChange={(e) => filterByStatus(e.target.value as 'Pending' | 'Completed' | 'All')}>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      </div>
      
    </div>
  );
};

export default TaskFilters;