import { Paragraph } from "@/styled-components";
import {
  AlertCloseButton,
  AlertCloseIcon,
  AlertMessage,
  AlertProgressBar,
  ErrorIcon,
  InfoMessageIcon,
  SuccessIcon,
  WarningMessageIcon,
} from "./styled-components";

const ErrorAlertMessage = ({ error, closeError, errorLevel = "error", errorTime = "5s" }) => {
  return (
    <AlertMessage
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      $level={errorLevel}
      $errortime={errorTime}>
      {errorLevel == "error" && <ErrorIcon />}
      {errorLevel == "info" && <InfoMessageIcon />}
      {errorLevel == "success" && <SuccessIcon />}
      {errorLevel == "warning" && <WarningMessageIcon />}
      <Paragraph $fontsize='13px' $margin='0 20px' $alignself='center'>
        {error}
      </Paragraph>
      <AlertProgressBar />
      <AlertCloseButton onClick={closeError}>
        <AlertCloseIcon />
      </AlertCloseButton>
    </AlertMessage>
  );
};

export default ErrorAlertMessage;
