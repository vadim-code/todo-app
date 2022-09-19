import { useCallback } from 'react';
import { returnRandomColor } from '../../helpers';
import { CheckDTO, Todo, UpdateDTO } from '../../models';
import EmptyStateBanner from '../EmptyStateBanner/EmptyStateBanner';
import ToDo from '../ToDo/ToDo';
import { colors } from '../ToDo/styles';
import { StyledTasksContainer } from './styles';

type ToDosProps = {
  todos: Todo[];
  selectedOption: string;
  isActive: boolean;
  onDelete: (id: number) => void;
  onCheck: (dto: CheckDTO) => void;
  onUpdate: (dto: UpdateDTO) => void;
};

function ToDos({ todos, isActive, onDelete, onUpdate, onCheck }: ToDosProps) {
  const isTasksEmpty = todos.length === 0;

  const getColor = useCallback(() => {
    return returnRandomColor(colors);
  }, []);

  return (
    <StyledTasksContainer isEmpty={isTasksEmpty}>
      {!isTasksEmpty &&
        todos.map((t) => (
          <ToDo
            key={t.id}
            id={t.id}
            text={t.text}
            checked={t.completed}
            color={getColor()}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onCheck={onCheck}
          />
        ))}
      {isTasksEmpty && (
        <EmptyStateBanner
          text={isActive ? 'Share your plans' : 'Finish some'}
        />
      )}
    </StyledTasksContainer>
  );
}

export default ToDos;
