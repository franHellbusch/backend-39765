import styled from "styled-components";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";

export const CartDeleteAllButton = styled.button`
  width: 150px;
  padding: 8px 5px 8px 0;
  background: ${(props) => props.theme.colors.danger};
  border: 0;
  font-size: 15px;
  border-radius: 5px;
  color: ${(props) => props.theme.text.light};
  font-weight: 600;
  transition: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.dangerLight};
  }
`;

export const CartDeleteAllButtonIcon = styled(DeleteOutlineTwoToneIcon)`
  && {
    font-size: 22px;
    margin-right: 3px;
    color: ${(props) => props.theme.text.light};
  }
`;
