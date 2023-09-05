import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  width: ${(props) => props.$width || "auto"};
  text-decoration: ${(props) => (props.$underline ? "underline" : "none")};
  font-size: ${(props) => props.$fontsize || "14px"};
  color: ${(props) => props.$color || props.theme.text.darker};
  font-weight: ${(props) => props.$weight || "600"};
  align-self: ${(props) => props.$alignself || "center"};
  cursor: pointer;
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
  display: ${(props) => props.$display || "auto"};
  justify-content: ${(props) => props.$justify || "none"};
  align-items: ${(props) => props.$align || "none"};

  &:hover {
    color: ${(props) => props.$hovercolor || props.theme.text.grey};
  }
`;
