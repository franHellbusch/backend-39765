import styled from "styled-components";

export const StockParagraph = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.text.light};
  font-weight: 600;
  background: ${(props) => props.theme.colors.primary};
  padding: 5px 10px;
  border-radius: 25px;
`;
