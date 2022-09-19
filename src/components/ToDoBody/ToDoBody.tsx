import SelectionButton from '../Dropdown/Dropdown';
import AddToDoPanel from '../AddToDoPanel/AddToDoPanel';
import ToDos from '../ToDos/ToDos';
import { CheckDTO, Todo, UpdateDTO } from '../../models';
import { StyledContentWrapper, StyledHeader, StyledTodoPlate } from './styles';

type TodoBodyProps = {
  todos: Todo[];
  isActive: boolean;
  selectedOption: string;
  onCreate: (text: string) => void;
  onDelete: (id: number) => void;
  onCheck: (dto: CheckDTO) => void;
  onUpdate: (dto: UpdateDTO) => void;
  onOptionChange: (option: string) => void;
};

function TodoBody({
  todos,
  isActive,
  selectedOption,
  onCreate,
  onDelete,
  onUpdate,
  onCheck,
  onOptionChange,
}: TodoBodyProps) {
  return (
    <StyledTodoPlate>
      <StyledHeader>What's the Plan for Today?</StyledHeader>
      <StyledContentWrapper>
        <SelectionButton
          isActive={isActive}
          selectedOption={selectedOption}
          onOptionChange={onOptionChange}
        />
        <AddToDoPanel onCreate={onCreate} />
        <ToDos
          todos={todos}
          isActive={isActive}
          selectedOption={selectedOption}
          onCheck={onCheck}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      </StyledContentWrapper>
    </StyledTodoPlate>
  );
}

export default TodoBody;
