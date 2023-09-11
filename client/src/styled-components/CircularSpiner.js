import styled from "styled-components";

export const CircularSpinner = styled.div`
  border: 2px solid ${(props) => props.theme.colors.light};
  border-top: 2px solid ${(props) => props.theme.colors.primaryLight};
  border-radius: 50%;
  width: ${(props) => props.$width || "14px"};
  height: ${(props) => props.$height || "14px"};
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
