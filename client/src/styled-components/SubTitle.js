import styled from "styled-components";

export const SubTitle = styled.h2`
  font-size: ${(props) => props.$fontSize || "30px"};
  color: ${(props) => props.$color || props.theme.text.dark};
  font-weight: ${(props) => props.$weight || "500"};
  margin: ${(props) => props.$margin || "0"};
  margin-top: ${(props) => props.$margintop || "0"};
  margin-bottom: ${(props) => props.$marginbottom || "0"};
`;
