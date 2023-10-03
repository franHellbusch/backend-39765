import styled from "styled-components";

export const ProfileInfoText = styled.p`
  display: flex;
  flex: 1;
  font-size: 14px;
  overflow: auto;
  color: ${(props) =>
    props.$pending
      ? props.theme.alert.danger
      : props.$bold
      ? props.theme.text.dark
      : props.theme.text.grey};
  font-weight: ${(props) => (props.$bold ? "600" : "500")};

  &::-webkit-scrollbar {
    height: 6px;
    background-color: #f0f0f0;
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 2px;
  }
`;
