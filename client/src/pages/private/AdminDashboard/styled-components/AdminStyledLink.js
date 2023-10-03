import styled from "styled-components";

export const AdminStyledLink = styled.button`
  padding: 0 24px 0 20px;
  font-size: 16px;
  font-weight: 600;
  border: 0;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 5px;
  position: relative;
  color: ${(props) => props.theme.text.dark};

  &:hover {
    color: ${(props) => props.theme.text.grey};
  }

  &::before {
    content: "";
    display: ${(props) => (props.$active ? "block" : "none")};
    height: 3px;
    width: 100%;
    background: ${(props) => props.theme.colors.primary};
    position: absolute;
    bottom: -32px;
    left: 0;
  }
`;
