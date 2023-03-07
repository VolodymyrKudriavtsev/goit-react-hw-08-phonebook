import styled from '@emotion/styled';

export const Filtration = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
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
`;
