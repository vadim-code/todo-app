import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './index';
import { Todo } from '../models';

export const selectIsActive = (state: RootState) =>
  state.todos.selectedOption === 'Active';

export const selectTodos = (state: RootState) => state.todos.todos;

export const selectSelectedOption = (state: RootState) =>
  state.todos.selectedOption;

export const selectTodosByFilter = createSelector(
  [selectTodos, selectSelectedOption],
  (todos: Todo[], filter: string): Todo[] => {
    const sorted = [...todos].sort((a, b) => b.id - a.id);

    if (filter === 'Active') {
      return sorted.filter((t) => !t.completed);
    }

    if (filter === 'Done') {
      return sorted.filter((t) => t.completed);
    }

    return [];
  }
);
