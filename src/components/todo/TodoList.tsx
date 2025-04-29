import { Todo } from '@/types';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
}

export const TodoList = ({ todos, onToggleTodo }: TodoListProps) => {
  if (todos.length === 0) {
    return <div className="text-center text-gray-500">No todos available</div>;
  }
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggleTodo} />
      ))}
    </div>
  );
};
