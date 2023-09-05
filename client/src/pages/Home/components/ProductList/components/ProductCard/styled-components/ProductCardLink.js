import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCardLink = styled(Link)`
  width: calc(100% - 30px);
  text-decoration: "none";
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  cursor: pointer;
  padding: 10px 15px;
  text-decoration: none;
  border-top: 1px solid ${(props) => props.theme.colors.light};

  &:hover {
    color: ${(props) => props.theme.colors.primaryDark};
  }
`;
