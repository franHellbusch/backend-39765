import styled from "styled-components";

export const ProfileCardImage = styled.div`
  width: 55%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 3px solid ${(props) => props.theme.colors.extraLight};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & > img {
    height: 100%;
  }
`;
