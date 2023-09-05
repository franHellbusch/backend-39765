import styled from "styled-components";

export const Anchor = styled.a`
  text-decoration: underline;
  font-size: ${(props) => props.$fontSize || "14px"};
  color: ${(props) => props.$color || props.theme.text.darker};
  font-weight: ${(props) => props.$weight || "600"};
  align-self: ${(props) => props.$alignself || "start"};
  cursor: pointer;
  margin: ${(props) => props.$margin || "0"};

  &:hover {
    color: ${(props) => props.$hovercolor || props.theme.text.grey};
  }
`;
