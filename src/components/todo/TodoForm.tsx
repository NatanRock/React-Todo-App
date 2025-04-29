import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface TodoFormProps {
  onAddTodo: (title: string) => void;
}

export const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [title, setTitle] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTodo(title.trim());
      setTitle('');
    }
  };

  return (
    <Card className="mb-4">
      <CardContent className="pt-4">
        <form onSubmit={handleSubmit} className="mb-4 flex items-center gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add new task..."
            className="flex-grow rounded-md border p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <Button type="submit" disabled={!title.trim()} className="h-[42px] w-32 rounded-md">
            Add
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
