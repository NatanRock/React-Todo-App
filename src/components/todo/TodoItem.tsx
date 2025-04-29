import { Todo } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle }: TodoItemProps) => {
  return (
    <Card className="py-0">
      <CardContent className="p-4 flex items-center gap-2">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          id={`todo-${todo.id}`}
          className="w-5 h-5"
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`flex-grow ${todo.completed ? 'line-through text-gray-400' : ''}`}
        >
          {todo.title}
        </label>
      </CardContent>
    </Card>
  );
};
