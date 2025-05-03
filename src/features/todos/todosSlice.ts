import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '@/types/todo';
import { TodosState } from '@/store/store';
import { loadTodos, saveTodos } from '@/utils/storage';

const initialState: TodosState = {
  todos: loadTodos(),
  status: 'idle',
  error: null,
  filter: 'all',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Добавление новой задачи
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        title: action.payload,
        completed: false,
        createdAt: new Date(),
      };
      state.todos.push(newTodo);
      saveTodos(state.todos);
    },

    // Переключение статуса задачи
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodos(state.todos);
      }
    },

    // Удаление задачи
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveTodos(state.todos);
    },

    // Изменение фильтра
    setFilter: (state, action: PayloadAction<'all' | 'active' | 'completed'>) => {
      state.filter = action.payload;
    },

    // Очистка завершенных задач
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
      saveTodos(state.todos);
    },

    // Редактирование задачи
    editTodo: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const { id, title } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
        saveTodos(state.todos);
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter, clearCompleted, editTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
