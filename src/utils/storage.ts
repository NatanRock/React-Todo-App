import { Todo } from '@/types';

const STORAGE_KEY = 'todos';

export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(
      todos.map((todo) => ({
        ...todo,
        createdAt: todo.createdAt.toISOString(),
      }))
    )
  );
};

export const loadTodos = (): Todo[] => {
  const todosJson = localStorage.getItem(STORAGE_KEY);
  if (!todosJson) return [];

  try {
    return JSON.parse(todosJson).map((todo: any) => ({
      ...todo,
      createdAt: new Date(todo.createdAt),
    }));
  } catch (e) {
    console.error('Failed to parse todos from localStorage', e);
    return [];
  }
};
