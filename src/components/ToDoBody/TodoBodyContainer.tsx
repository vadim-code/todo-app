import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  addTodo,
  deleteTodo,
  editTodo,
  checkTodo,
  setSelectedOption,
} from '../../store/todoSlice';
import TodoBody from './ToDoBody';
import {
  selectIsActive,
  selectSelectedOption,
  selectTodosByFilter,
} from '../../store/selectors';
import { CheckDTO, UpdateDTO } from '../../models';

function TodoBodyContainer() {
  const dispatch = useAppDispatch();

  const todos = useAppSelector(selectTodosByFilter);
  const isActive = useAppSelector(selectIsActive);
  const selectedOption = useAppSelector(selectSelectedOption);

  function onCreate(text: string) {
    dispatch(addTodo(text));
  }

  function onDelete(id: number) {
    dispatch(deleteTodo(id));
  }

  function onUpdate(dto: UpdateDTO) {
    dispatch(editTodo(dto));
  }

  function onCheck(dto: CheckDTO) {
    dispatch(checkTodo(dto));
  }

  function onOptionChange(option: string) {
    dispatch(setSelectedOption(option));
  }

  return (
    <TodoBody
      todos={todos}
      isActive={isActive}
      selectedOption={selectedOption}
      onCreate={onCreate}
      onDelete={onDelete}
      onUpdate={onUpdate}
      onCheck={onCheck}
      onOptionChange={onOptionChange}
    />
  );
}

export default TodoBodyContainer;
