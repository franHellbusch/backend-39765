import styled from "styled-components";

export const CreateProductTextarea = styled.textarea`
  width: calc(100% - 22px);
  height: 200px;
  padding: 12px;
  margin-top: 5px;
  font-size: 15px;
  color: ${(props) => props.theme.text.dark};
  background: ${(props) => props.theme.background.white};
  padding: 15px 10px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  outline: 0;
  border-radius: 10px;
  resize: none;
  font-family: "Poppins", sans-serif;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
