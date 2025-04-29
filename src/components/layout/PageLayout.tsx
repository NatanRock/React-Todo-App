import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-md px-4">
        <h1 className="mb-8 text-center text-3xl font-bold">Todo App</h1>
        {children}
      </div>
    </div>
  );
};
