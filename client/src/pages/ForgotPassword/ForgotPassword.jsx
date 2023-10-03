import { restoreRequest } from "@/services/userService";
import {
  CircularSpinner,
  CoverContainer,
  FlexContainer,
  Label,
  Paragraph,
  StyledLink,
  SubTitle,
  TextInput,
} from "@/styled-components";
import { useState } from "react";
import { ArrowIcon, MailIcon, SendEmailButton } from "./styled-components";
import { PublicRoutes } from "@/models";
import { ErrorAlertMessage } from "@/components/ErrorAlertMessage";
import { useCatch } from "@/hooks";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { error, saveError, closeError } = useCatch();
  const { error: message, saveError: saveMessage, closeError: closeMessage } = useCatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await restoreRequest(email);
      saveMessage(response.message);
    } catch (error) {
      saveError(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <CoverContainer $position='relative'>
      {error && <ErrorAlertMessage error={error} closeError={closeError} errorLevel='error' />}
      {message && (
        <ErrorAlertMessage error={message} closeError={closeMessage} errorLevel='success' />
      )}
      <FlexContainer $direction='column' $width='600px' $maxwidth='600px'>
        <SubTitle $display='flex' $align='center'>
          Send a verification email
          <MailIcon />
        </SubTitle>
        <Paragraph $fontsize='13px' $margin='0 0 15px 0'>
          We will send an email to verify that it's yours. Please wait for a few minutes, and if the
          message doesn't arrive, please send it again.
        </Paragraph>
        <Label>Email address</Label>
        <TextInput
          $margintop='5px'
          $width='calc(100% - 22px)'
          $padding='15px 10px'
          type='text'
          name='email'
          value={email}
          onChange={handleEmailChange}
        />
        <FlexContainer $margin='20px 0 0 0' $width='100%' $justify='space-between'>
          <StyledLink to={`/${PublicRoutes.LOGIN}`} $display='flex' $align='center'>
            <ArrowIcon />
            Go back login
          </StyledLink>
          <SendEmailButton onClick={handleSubmit} disabled={error || message ? true : false}>
            {loading ? <CircularSpinner /> : "Enviar"}
          </SendEmailButton>
        </FlexContainer>
      </FlexContainer>
    </CoverContainer>
  );
};

export default ForgotPassword;
