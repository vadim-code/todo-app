import { configureStore, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export const handleLocalStorageMiddleware: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    next(action);
    localStorage.setItem('todos', JSON.stringify(api.getState().todos.todos));
  };

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(handleLocalStorageMiddleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
