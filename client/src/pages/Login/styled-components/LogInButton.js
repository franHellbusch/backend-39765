import styled from "styled-components";

export const LogInButton = styled.button`
  width: 100%;
  padding: 15px 10px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  transition: 0.3s;
  background: ${(props) =>
    props.$disabled ? props.theme.colors.primaryLight : props.theme.colors.primary};
  opacity: ${(props) => (props.$disabled ? "0.7" : "1")};
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  margin-top: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    background: ${(props) => props.theme.colors.primaryLight};
  }
`;
