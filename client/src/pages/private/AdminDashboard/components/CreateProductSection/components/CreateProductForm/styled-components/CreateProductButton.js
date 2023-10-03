import { Link } from "react-router-dom";
import styled from "styled-components";

export const CreateProductButton = styled.button`
  text-align: center;
  align-self: flex-end;
  padding: 13px;
  background: ${(props) => props.$background || props.theme.colors.primary};
  border: 0;
  font-size: 15px;
  border-radius: 10px;
  color: ${(props) => props.theme.text.light};
  font-weight: 600;
  transition: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  cursor: pointer;
  margin: ${(props) => props.$margin || "0"};
  margin-top: 10px;
  opacity: ${(props) => (props.$disabled ? "0.7" : "1")};

  &:hover {
    background: ${(props) => props.$backgroundhover || props.theme.colors.primaryLight};
  }
`;
