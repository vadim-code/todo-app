import styled from 'styled-components';

export const StyledWrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  outline: none;
  padding: 3px 0px 3px 3px;
  border: 1px solid #dddddd;
  background-color: #001f3f;
  color: #fff;
  height: 20px;
  width: 90%;

  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 3px 0px 3px 3px;
    width: 120%;
    border: 1px solid rgba(81, 203, 238, 1);
    background-color: #001f3f;
  }
`;

export const StyledButton = styled.button`
  align-items: center;
  background-color: #06f;
  border: 2px solid #06f;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 30px;
  width: 120px;
  margin-left: 5px;
  justify-content: center;
  letter-spacing: -0.8px;
  line-height: 24px;
  outline: 0;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:focus {
    color: #171e29;
  }

  &:hover {
    background-color: #3385ff;
    border-color: #3385ff;
    fill: #06f;
  }

  &:active {
    background-color: #3385ff;
    border-color: #3385ff;
    fill: #06f;
  }
`;
