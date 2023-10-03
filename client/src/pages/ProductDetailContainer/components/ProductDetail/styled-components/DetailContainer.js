import styled from "styled-components";

export const DetailContainer = styled.div`
  width: 85%;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  margin-top: 2rem;
  padding: ${(props) => props.$padding || "0"};
`;
