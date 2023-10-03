import { login } from "@/services/userService";
import { useDispatch } from "react-redux";
import { saveUser } from "@/store/states/user";
import { PublicRoutes } from "@/models";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FlexContainer,
  FormContainer,
  Label,
  Paragraph,
  StyledLink,
  SubTitle,
  TextInput,
  OffVisibilityIcon,
  OnVisibilityIcon,
  HideButton,
  CoverContainer,
} from "@/styled-components";
import {
  GithubButton,
  GoogleButton,
  GithubIcon,
  SocialMediaImage,
  LogInButton,
  OrBar,
  OrText,
} from "./styled-components";
import { useCatch } from "@/hooks";
import { ErrorAlertMessage } from "@/components/ErrorAlertMessage";
import { config } from "@/config/config";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { error, saveError, closeError } = useCatch();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData(event.target);
      const user = Object.fromEntries(formData);

      const response = await login(user);
      dispatch(saveUser(response.payload));
      navigate(`/${PublicRoutes.HOME}`);
    } catch (err) {
      saveError(err.message);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      window.open(`${config.apiUrl}/auth/google`, "_self");
    } catch (err) {
      saveError(err.message);
    }
  };

  const handleGithubAuth = async () => {
    try {
      window.open(`${config.apiUrl}/auth/github`, "_self");
    } catch (err) {
      saveError(err.message);
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <CoverContainer $position='relative'>
      {error && <ErrorAlertMessage error={error} closeError={closeError} errorLevel='error' />}
      <FlexContainer $direction='column' $width='600px' $maxwidth='600px'>
        <SubTitle $marginbottom='30px'>Login in</SubTitle>
        <FlexContainer $width='100%' $justify='space-between' $margin='15px 0'>
          <GoogleButton disabled={error ? true : false} onClick={handleGoogleAuth}>
            <SocialMediaImage
              src='https://www.svgrepo.com/show/475656/google-color.svg'
              alt='google-logo'
            />
            Login with Google
          </GoogleButton>
          <GithubButton disabled={error ? true : false} onClick={handleGithubAuth}>
            <GithubIcon />
            Login with Github
          </GithubButton>
        </FlexContainer>

        <FlexContainer $margin='10px 0' $width='100%' $justify='space-between' $align='center'>
          <OrBar></OrBar>
          <OrText>or</OrText>
          <OrBar></OrBar>
        </FlexContainer>

        <FormContainer $width='100%' onSubmit={handleSubmit}>
          <FlexContainer $margin='10px 0' $direction='column'>
            <Label>Email address</Label>
            <TextInput
              $width='calc(100% - 22px)'
              $padding='15px 10px'
              $margintop='5px'
              name='email'
              type='text'
            />
          </FlexContainer>
          <FlexContainer $margin='10px 0' $direction='column'>
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
              required
            />
          </FlexContainer>
          <LogInButton
            $disabled={error ? true : false}
            type='submit'
            disabled={error ? true : false}
          >
            Log In
          </LogInButton>
        </FormContainer>
        <StyledLink
          to={`/${PublicRoutes.FORGOT_PASSWORD}`}
          $underline={true}
          $alignself='center'
          $margin='20px 0'
        >
          Forget your password
        </StyledLink>
        <Paragraph $alignself='center'>
          Dont you have an acount? <StyledLink to={`/${PublicRoutes.REGISTER}`}>Sign up</StyledLink>
        </Paragraph>
      </FlexContainer>
    </CoverContainer>
  );
};

export default Login;
