import { useState, useRef } from 'react';
import { StyledButton, StyledInput, StyledWrapper } from './styles';

type AddToDoPanelType = {
  onCreate: (text: string) => void;
};

function AddToDoPanel({ onCreate }: AddToDoPanelType) {
  const [todo, setTodo] = useState('');
  const inputRef = useRef<any>(null);

  const isDisabled = todo.length === 0;

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  function onAddTodoClick() {
    if (todo.trim().length > 0 && inputRef !== null) {
      onCreate(todo);
      inputRef.current.value = '';
      setTodo('');
    }

    inputRef.current.value = '';
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    if (e.key === 'Enter') {
      onAddTodoClick();
    }
  }

  return (
    <StyledWrapper>
      <StyledInput
        ref={inputRef}
        type="text"
        placeholder="Add task..."
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />
      <StyledButton disabled={isDisabled} onClick={onAddTodoClick}>
        Add Todo
      </StyledButton>
    </StyledWrapper>
  );
}

export default AddToDoPanel;
