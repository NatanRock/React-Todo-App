import { Todo } from '@/types/todo';

const STORAGE_KEY = 'todos';

type StoredTodo = Omit<Todo, 'createdAt'> & { createdAt: string };

export const saveTodos = (todos: Todo[]): void => {
  const serializedTodos: StoredTodo[] = todos.map((todo) => ({
    ...todo,
    createdAt: todo.createdAt.toISOString(),
  }));

  localStorage.setItem(STORAGE_KEY, JSON.stringify(serializedTodos));
};

export const loadTodos = (): Todo[] => {
  const todosJson = localStorage.getItem(STORAGE_KEY);
  if (!todosJson) return [];

  try {
    const parsed: StoredTodo[] = JSON.parse(todosJson);

    return parsed.map((todo) => ({
      ...todo,
      createdAt: new Date(todo.createdAt),
    }));
  } catch (e) {
    console.error('Failed to parse todos from localStorage', e);
    return [];
  }
};
