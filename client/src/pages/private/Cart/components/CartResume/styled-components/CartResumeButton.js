import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartResumeButton = styled.button`
  text-decoration: none;
  text-align: center;
  width: 100%;
  padding: 15px 0;
  background: ${(props) => props.theme.colors.primary};
  border: 0;
  font-size: 15px;
  border-radius: 10px;
  color: ${(props) => props.theme.text.light};
  font-weight: 600;
  transition: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.primaryLight};
  }
`;
