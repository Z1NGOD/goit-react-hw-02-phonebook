import styled from "@emotion/styled";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;
const MainText = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
margin-bottom: 20px;
  ::placeholder {
    color: #999;
  }
`;

export { MainText, Input, Form};