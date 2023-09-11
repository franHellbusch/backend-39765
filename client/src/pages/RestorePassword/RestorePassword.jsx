import { restorePassword } from "@/services/userService";
import {
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

const RestorePassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const restoreToken = searchParams.get("restoreToken");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await restorePassword(password, restoreToken);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <CoverContainer>
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
            <ChangePasswordButton onClick={handleSubmit}>Change</ChangePasswordButton>
          </FlexContainer>
        </FlexContainer>
      </CoverContainer>
    </>
  );
};

export default RestorePassword;
