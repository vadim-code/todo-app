import styled from 'styled-components';

export const StyledTodoPlate = styled.div`
  height: 70vh;
  width: 40vw;
  border-radius: 7px;
  background-color: #001f3f;
  box-shadow: 12px 8px 2px 1px rgb(226, 255, 71, 0.8);
  padding: 0 25px;
`;

export const StyledHeader = styled.h1`
  color: #fff;
  font-size: 25px;
  text-align: center;
  padding-top: 15px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
