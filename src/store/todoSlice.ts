import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, UpdateDTO, CheckDTO } from '../models';

type InitialType = {
  todos: Todo[];
  selectedOption: string;
};

const initialState: InitialType = {
  todos: JSON.parse(localStorage.getItem('todos')!) || [],
  selectedOption: 'Active',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: new Date().valueOf(),
        text: action.payload,
        completed: false,
      });

      // localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((t) => t.id !== action.payload);

      // localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    editTodo(state, action: PayloadAction<UpdateDTO>) {
      state.todos = state.todos.map((t) => {
        if (t.id === action.payload.id) {
          return { ...t, text: action.payload.newText };
        }

        return t;
      });

      // localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    checkTodo(state, action: PayloadAction<CheckDTO>) {
      state.todos = state.todos.map((t) => {
        if (t.id === action.payload.id) {
          return { ...t, completed: action.payload.isChecked };
        }

        return t;
      });

      // localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    setSelectedOption(state, action) {
      state.selectedOption = action.payload;
    },
  },
});

export const { checkTodo, addTodo, deleteTodo, editTodo, setSelectedOption } =
  todoSlice.actions;

export default todoSlice.reducer;
