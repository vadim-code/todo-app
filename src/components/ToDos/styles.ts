import styled from 'styled-components';

export const StyledTasksContainer = styled.main<{ isEmpty: boolean }>`
  width: 100%;
  box-sizing: border-box;
  height: 180px;
  overflow-y: ${(props) => (props.isEmpty ? 'hidden' : 'scroll')};
`;
