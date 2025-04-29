import { useState } from 'react';
import './App.css';

import { TodoList } from '@/components/todo/TodoList';
import { TodoForm } from '@/components/todo/TodoForm';
import { Todo } from '@/types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      title: 'Изучить React',
      completed: true,
      createdAt: new Date(),
    },
    {
      id: '2',
      title: 'Изучить TypeScript',
      completed: false,
      createdAt: new Date(),
    },
    {
      id: '3',
      title: 'Изучить Tailwind CSS',
      completed: false,
      createdAt: new Date(),
    },
  ]);

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      		completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 w-1/3">
      <h1 className="text-2xl font-bold text-center mb-6">Todo App</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggleTodo={handleToggleTodo} />
    </div>
  );
}

export default App;
