import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 30px;

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  input {
    display: block;
    padding: 5px 10px;
    margin-top: 5px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;

    :focus {
      outline: 1px solid #87cefa;
    }
  }

  button {
    padding: 5px 10px;
    border: 3px solid #87cefa;
    border-radius: 6px;
    font-size: 18px;
    font-weight: bold;
    color: #87cefa;
    background-color: transparent;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 5px;
    cursor: pointer;

    &:hover {
      color: white;
      background-color: #87cefa;
    }
    &:active {
      box-shadow: none;
    }
  }
`;
