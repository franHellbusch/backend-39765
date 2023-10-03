import { restorePassword } from "@/services/userService";
import {
  CircularSpinner,
  CoverContainer,
  FlexContainer,
  HideButton,
  Label,
  OffVisibilityIcon,
  OnVisibilityIcon,
  Paragraph,
  SubTitle,
  TextInput,
} from "@/styled-components";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ChangePasswordButton, PadlockIcon } from "./styled-components";
import { ShieldIcon } from "./styled-components/ShieldIcon";
import { useCatch } from "@/hooks";
import { ErrorAlertMessage } from "@/components/ErrorAlertMessage";

const RestorePassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const restoreToken = searchParams.get("restoreToken");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { error, saveError, closeError } = useCatch();
  const { error: message, saveError: saveMessage, closeError: closeMessage } = useCatch();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await restorePassword(password, restoreToken);
      saveMessage(response.message);
    } catch (error) {
      saveError(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <CoverContainer $position='relative'>
        {error && <ErrorAlertMessage error={error} closeError={closeError} errorLevel='error' />}
        {message && (
          <ErrorAlertMessage error={message} closeError={closeMessage} errorLevel='success' />
        )}
        <FlexContainer $direction='column' $align='center' $width='600px' $maxwidth='600px'>
          <SubTitle $display='flex' $align='center'>
            <ShieldIcon />
            Change your password
            <PadlockIcon />
          </SubTitle>
          <Paragraph $textalign='center' $fontsize='13px' $margin='10px 0 15px 0'>
            You're one step away from regaining access to your account. Please enter your new
            password below.
          </Paragraph>
          <FlexContainer $width='100%' $direction='column'>
            <FlexContainer $width='100%' $justify='space-between' $align='flex-end'>
              <Label>Password</Label>
              <HideButton type='button' onClick={handleShowPassword}>
                {showPassword ? <OnVisibilityIcon /> : <OffVisibilityIcon />}
                {showPassword ? `Show` : `Hide`}
              </HideButton>
            </FlexContainer>
            <TextInput
              $width='calc(100% - 22px)'
              $padding='15px 10px'
              $margintop='5px'
              type={showPassword ? "text" : "password"}
              name='password'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </FlexContainer>
          <FlexContainer $margin='20px 0 0 0' $width='100%' $justify='center'>
            <ChangePasswordButton onClick={handleSubmit} disabled={error || message ? true : false}>
              {loading ? <CircularSpinner /> : "Change"}
            </ChangePasswordButton>
          </FlexContainer>
        </FlexContainer>
      </CoverContainer>
    </>
  );
};

export default RestorePassword;
