import styled from '@emotion/styled';

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 2px solid #87cefa;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 5px;
  font-weight: bold;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  p {
    margin: 0;
  }

  button {
    padding: 5px 10px;
    border: 2px solid #cd5c5c;
    border-radius: 6px;
    font-weight: bold;
    color: #cd5c5c;
    background-color: transparent;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 5px;
    cursor: pointer;

    &:hover {
      color: white;
      background-color: #cd5c5c;
    }
    &:active {
      box-shadow: none;
    }
  }
`;
