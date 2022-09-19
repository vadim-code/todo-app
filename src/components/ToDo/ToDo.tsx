import { useEffect, useState, useRef, memo, ReactElement } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { RiCheckDoubleLine } from 'react-icons/ri';
import { CheckDTO, UpdateDTO } from '../../models';
import {
  StyledButton,
  StyledButtons,
  StyledCheckbox,
  StyledInput,
  StyledToDoContainer,
  StyledTodoText,
  StyledToDoWrapper,
} from './styles';

type ToDoProps = {
  id: number;
  text: string;
  checked: boolean;
  color: string;
  onDelete: (id: number) => void;
  onCheck: (dto: CheckDTO) => void;
  onUpdate: (dto: UpdateDTO) => void;
};

function ToDo({
  id,
  text,
  checked,
  color,
  onDelete,
  onUpdate,
  onCheck,
}: ToDoProps) {
  const [newText, setNewText] = useState(text);
  const [isEditing, setIsEditing] = useState(false);
  const [isChecked, setIsChecked] = useState(checked);
  const inputRef = useRef<HTMLInputElement>(null);

  const textContent = isEditing ? 'inputVisible' : 'inputInvisible';
  const buttonState = isEditing ? 'edit' : 'submit';

  useEffect(() => {
    if (inputRef !== null) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewText(e.target.value);
  }

  function handleSubmit() {
    onUpdate({ newText, id });
    setIsEditing(false);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    if (e.key === 'Enter') {
      handleSubmit();
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
    }
  }

  function onCheckboxClick() {
    setIsChecked((prev) => !prev);
    onCheck({ isChecked: !isChecked, id });
  }

  const todoTextObj: { [key: string]: ReactElement } = {
    inputVisible: (
      <StyledInput
        ref={inputRef}
        onKeyDown={onKeyDown}
        type="text"
        value={newText}
        onChange={onInputChange}
      />
    ),
    inputInvisible: (
      <StyledToDoWrapper onClick={onCheckboxClick}>
        <span>
          <StyledCheckbox
            type="checkbox"
            checked={isChecked}
            onChange={onCheckboxClick}
          />
          <span></span>
        </span>
        <StyledTodoText isDone={isChecked}>{text}</StyledTodoText>
      </StyledToDoWrapper>
    ),
  };

  const buttonsObj: { [key: string]: ReactElement } = {
    edit: (
      <StyledButton onClick={handleSubmit}>
        <RiCheckDoubleLine />
      </StyledButton>
    ),
    submit: (
      <StyledButton onClick={() => setIsEditing(true)}>
        <MdEdit />
      </StyledButton>
    ),
  };

  return (
    <StyledToDoContainer color={color}>
      {todoTextObj[textContent]}
      <StyledButtons>
        {buttonsObj[buttonState]}
        <StyledButton onClick={() => onDelete(id)}>
          <AiFillDelete />
        </StyledButton>
      </StyledButtons>
    </StyledToDoContainer>
  );
}

export default memo(ToDo, (prev, next) => {
  return prev.color !== next.color;
});
