import { Todo } from '@/types/todo';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <Card className="py-0">
      <CardContent className="flex items-center gap-2 p-4">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          id={`todo-${todo.id}`}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`flex-grow cursor-pointer ${todo.completed ? 'text-gray-400 line-through' : ''}`}
        >
          {todo.title}
        </label>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(todo.id)}
          className="h-8 w-8 text-red-500 hover:bg-red-100 hover:text-red-700"
        >
          <Trash2 size={16} />
        </Button>
      </CardContent>
    </Card>
  );
};
