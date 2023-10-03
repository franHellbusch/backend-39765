import styled from "styled-components";

export const AdminContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 80vh;
  margin: 2rem;
  background: ${(props) => props.theme.background.white};
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;
