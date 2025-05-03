import { Todo } from './todo';

export type TodoState = {
  todos: Todo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  filter: 'all' | 'active' | 'completed';
};

export type RootState = {
  todo: TodoState;
};
