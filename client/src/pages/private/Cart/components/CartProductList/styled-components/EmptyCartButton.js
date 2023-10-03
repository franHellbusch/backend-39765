import { Link } from "react-router-dom";
import styled from "styled-components";

export const EmptyCartButton = styled(Link)`
  text-decoration: none;
  text-align: center;
  width: 100%;
  max-width: 350px;
  padding: 15px 10px;
  background: ${(props) => props.theme.colors.primary};
  border: 0;
  font-size: 16px;
  border-radius: 10px;
  margin-top: 1rem;
  color: ${(props) => props.theme.text.light};
  font-weight: 600;
  transition: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.primaryLight};
  }
`;
