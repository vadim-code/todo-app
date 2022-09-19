import styled from 'styled-components';

export const colors = [
  '#0074D9',
  '#39CCCC',
  '#85144b',
  '#FF4136',
  '#FF851B',
  '#01FF70',
  '#FFDC00',
];

export const StyledToDoContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.color};
  height: 20px;
  padding: 5px;
  display: flex;
  margin: 5px 0;
  border-radius: 5px;
  justify-content: space-between;
`;

export const StyledTodoText = styled.p<{ isDone: boolean }>`
  font-weight: 400;
  font-size: 15px;
  color: #fff;
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  /* -webkit-line-clamp: 1;
  -webkit-box-orient: vertical; */
  width: 90%;
  margin: 0;
  white-space: nowrap;
  box-sizing: border-box;
`;

export const StyledButtons = styled.div`
  width: 13%;
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.div`
  border-radius: 50% 50%;
  height: 25px;
  width: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    transition: 0.5s;
  }
`;

export const StyledInput = styled.input`
  font-family: inherit;
  width: 88%;
  border: 0;
  outline: 0;
  color: #fff;
  background: transparent;
  transition: border-color 0.2s;
`;

export const StyledCheckbox = styled.input`
  display: none;

  &:checked {
    background: #d9534f -19px top no-repeat;
  }

  &:checked + span {
    background: #d9534f -19px top no-repeat;
  }

  &:focus {
    outline: none;
  }

  + span {
    display: inline-block;
    position: relative;
    top: -1px;
    width: 12px;
    height: 12px;
    margin: -1px 0px 0 0;
    vertical-align: middle;
    background: white left top no-repeat;
    border-radius: 50%;
    border: 1px solid #ccc;
    cursor: pointer;
    margin-right: 5px;
  }
`;

export const StyledToDoWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 86%;
`;
