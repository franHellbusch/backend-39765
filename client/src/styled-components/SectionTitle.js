import styled from "styled-components";

export const SectionTitle = styled.h3`
  font-size: ${(props) => props.$fontsize || "24px"};
  color: ${(props) => props.$color || props.theme.text.grey};
  font-weight: ${(props) => props.$weight || "600"};
  margin: ${(props) => props.$margin || "0"};
  margin-top: ${(props) => props.$margintop || "0"};
  margin-bottom: ${(props) => props.$marginbottom || "0"};
  display: ${(props) => props.$display || "auto"};
  justify-content: ${(props) => props.$justify || "none"};
  align-items: ${(props) => props.$align || "none"};

  & > b {
    font-weight: ${(props) => props.$weight || "600"};
    color: ${(props) => props.theme.colors.primary};
  }

  &::after {
    content: "";
    width: 100%;
    height: 3px;
    margin-top: 5px;
    background: ${(props) => props.theme.colors.primary};
    display: block;
  }
`;
