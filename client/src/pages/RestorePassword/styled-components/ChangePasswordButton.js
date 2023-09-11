import styled from "styled-components";

export const ChangePasswordButton = styled.button`
  width: 100px;
  padding: 15px 0;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  transition: 0.3s;
  background: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    transform: scale(1.01);
    background: ${(props) => props.theme.colors.primaryLight};
  }
`;
