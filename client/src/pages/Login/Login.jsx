import { githubAuth, googleAuth, login } from "@/services/userService";
import { useDispatch } from "react-redux";
import { saveUser } from "@/store/states/user";
import { PublicRoutes } from "@/models";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Anchor,
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

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const user = Object.fromEntries(formData);

    const response = await login(user);
    dispatch(saveUser(response.payload));
    navigate(`/${PublicRoutes.HOME}`);
  };

  const handleGoogleAuth = async () => {
    const response = await googleAuth();
    dispatch(saveUser(response.payload));
    navigate(`/${PublicRoutes.HOME}`);
  };

  const handleGithubAuth = async () => {
    const response = await githubAuth();
    dispatch(saveUser(response.payload));
    navigate(`/${PublicRoutes.HOME}`);
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <FlexContainer $width='100%' $height='calc(100vh - 72px)' $align='center' $justify='center'>
      <FlexContainer $direction='column' $width='600px' $maxwidth='600px'>
        <SubTitle $marginbottom='30px'>Login in</SubTitle>
        <FlexContainer $width='100%' $justify='space-between' $margin='15px 0'>
          <GoogleButton onClick={handleGoogleAuth}>
            <SocialMediaImage
              src='https://www.svgrepo.com/show/475656/google-color.svg'
              alt='google-logo'
            />
            Login with Google
          </GoogleButton>
          <GithubButton onClick={handleGithubAuth}>
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
          <LogInButton type='submit'>Log In</LogInButton>
        </FormContainer>
        <Anchor $alignself='center' $margin='20px 0'>
          Forget your password
        </Anchor>
        <Paragraph $alignself='center'>
          Dont you have an acount? <StyledLink to={`/${PublicRoutes.REGISTER}`}>Sign up</StyledLink>
        </Paragraph>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Login;
