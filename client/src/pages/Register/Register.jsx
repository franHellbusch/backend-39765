import { register } from "@/services/userService";
import { useDispatch } from "react-redux";
import { saveUser } from "@/store/states/user";
import { PublicRoutes } from "@/models";
import { useNavigate } from "react-router-dom";
import {
  CoverContainer,
  FlexContainer,
  FormContainer,
  HideButton,
  Label,
  OffVisibilityIcon,
  OnVisibilityIcon,
  Paragraph,
  StyledLink,
  SubTitle,
  TextInput,
} from "@/styled-components";
import { RegisterButton } from "./styled-components";
import { useState } from "react";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData(event.target);
      const user = Object.fromEntries(formData);

      user.displayName = `${user.name} ${user.lastName}`;

      const response = await register(user);
      dispatch(saveUser(response.payload));
      navigate(`/${PublicRoutes.HOME}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <CoverContainer>
      <FlexContainer $direction='column' $width='600px' $maxwidth='600px'>
        <SubTitle $marginbottom='30px'>Sign in</SubTitle>
        <FormContainer $width='100%' onSubmit={handleSubmit}>
          <FlexContainer $margin='10px 0' $width='100%' $justify='space-between'>
            <FlexContainer $width='48%' $direction='column'>
              <Label>Name</Label>
              <TextInput
                $width='calc(100% - 22px)'
                $padding='15px 10px'
                type='text'
                name='name'
                required
              />
            </FlexContainer>
            <FlexContainer $width='48%' $direction='column'>
              <Label>LastName</Label>
              <TextInput
                $width='calc(100% - 22px)'
                $padding='15px 10px'
                type='text'
                name='lastName'
                required
              />
            </FlexContainer>
          </FlexContainer>
          <FlexContainer $margin='10px 0' $width='100%' $justify='space-between'>
            <FlexContainer $width='10%' $direction='column'>
              <Label>Age</Label>
              <TextInput $width='100%' $margintop='5px' type='number' name='age' required />
            </FlexContainer>
            <FlexContainer $width='82%' $direction='column'>
              <Label>Email</Label>
              <TextInput
                $width='calc(100% - 22px)'
                $padding='15px 10px'
                $margintop='5px'
                type='email'
                name='email'
                required
              />
            </FlexContainer>
          </FlexContainer>
          <FlexContainer $margin='10px 0' $width='100%' $direction='column'>
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
          <FlexContainer $margin='10px 0' $width='100%' $direction='column'>
            <Label>Picture (Optional)</Label>
            <TextInput
              $width='calc(100% - 22px)'
              $padding='15px 10px'
              $margintop='5px'
              type='text'
              name='picture'
              placeholder='URL'
            />
          </FlexContainer>
          <RegisterButton type='submit'>Submit</RegisterButton>
        </FormContainer>
        <Paragraph $margin='20px 0' $alignself='center'>
          Already have an account? <StyledLink to={`/${PublicRoutes.LOGIN}`}>Log in</StyledLink>
        </Paragraph>
      </FlexContainer>
    </CoverContainer>
  );
};

export default Register;
