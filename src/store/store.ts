import { Todo } from '../types/todo';

export type TodosState = {
  todos: Todo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  filter: 'all' | 'active' | 'completed';
};

export type RootState = {
  todo: TodosState;
};
