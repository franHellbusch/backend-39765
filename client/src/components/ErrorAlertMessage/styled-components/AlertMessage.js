import { motion } from "framer-motion";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export const AlertCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  && {
    font-size: 15px;
  }
`;

export const AlertCloseButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme.text.dark};

  &:hover {
    color: ${(props) => props.theme.text.grey};
  }
`;

export const AlertProgressBar = styled.span`
  width: 0%;
  height: 2px;
  bottom: 0;
  left: -20px;
  position: absolute;
  animation: barAnimation linear;

  @keyframes barAnimation {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
`;

export const AlertMessage = styled(motion.div)`
  z-index: 1;
  width: calc(100% - 30px);
  max-width: 600px;
  min-height: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 10px;
  background: ${(props) => props.$color || props.theme.background.light};
  overflow: hidden;

  & > ${AlertProgressBar} {
    background: ${(props) => {
      if (props.$level == "error") return props.theme.alert.danger;
      if (props.$level == "warning") return props.theme.alert.warning;
      if (props.$level == "info") return props.theme.alert.info;
      if (props.$level == "success") return props.theme.alert.success;
      return props.theme.alert.info;
    }};
    animation-duration: ${(props) => props.$errortime || "3s"};
  }
`;
