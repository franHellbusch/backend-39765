import styled from "styled-components";

export const ProfileInfoRow = styled.div`
  width: calc(100% - 50px);
  padding: 20px 25px;
  border-radius: 5px;
  background: ${(props) => (props.$salient ? props.theme.colors.extraLight : "none")};
  display: flex;
  align-items: center;

  & > span {
    color: ${(props) => props.theme.text.grey};
    font-size: 14px;
    margin-right: 4rem;
  }
`;
