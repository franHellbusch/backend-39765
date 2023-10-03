import styled from "styled-components";

export const CartProductCounterContainer = styled.div`
  width: 90px;
  background: none;
  border: 2px solid
    ${(props) => (props.$excedent ? props.theme.colors.dangerLight : props.theme.colors.extraLight)};
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.text.grey};
  margin-bottom: 10px;
`;

export const CartProductCounterControl = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${(props) =>
    props.$disabled ? props.theme.colors.extraLight : props.theme.colors.primary};
`;
