import styled from "styled-components";

export const GoogleButton = styled.button`
  width: calc(50% - 10px);
  padding: 8px 16px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: 0.3s;
  background: #fff;
  font-size: 16px;
  color: ${(props) => props.theme.text.dark};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.dark};
    transform: scale(1.01);
  }
`;
