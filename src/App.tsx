import { useState } from 'react';
import { Todo } from '@/types';
import './App.css';

import { TodoList } from '@/components/todo/TodoList';
import { TodoForm } from '@/components/todo/TodoForm';
import { PageLayout } from '@/components/layout/PageLayout';

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
    <PageLayout>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggleTodo={handleToggleTodo} />
    </PageLayout>
  );
}

export default App;
