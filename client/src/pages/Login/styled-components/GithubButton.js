import styled from "styled-components";

export const GithubButton = styled.button`
  width: calc(50% - 10px);
  padding: 8px 16px;
  border: 1px solid #242222;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: 0.3s;
  background: #242222;
  font-size: 16px;
  color: ${(props) => props.theme.text.light};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;
