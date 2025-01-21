export const getTasks = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data.map(task => ({
      id: task.id,
      title: task.title,
      description: '',  // Placeholder as JSONPlaceholder doesn't have descriptions
      status: task.completed ? 'Completed' : 'Pending',
      priority: 'Medium',  // Set a default priority
    }));
  };
  