import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "@/models";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "@/store/states/user";
import { Roles } from "@/models/roles";
import {
  NavBar,
  LinkSeparationBar,
  CartIcon,
  LogoutIcon,
  UserIcon,
  HomeIcon,
  AdminIcon,
} from "./styles-components";
import { logout } from "@/services/userService";
import { FlexContainer, StyledLink, Title } from "@/styled-components";
import { useTheme } from "styled-components";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role, email } = useSelector((store) => store.user);
  const theme = useTheme();
  const { pathname: location } = useLocation();

  const handleClick = async () => {
    await logout();
    dispatch(removeUser());
    navigate(`/${PublicRoutes.LOGIN}`);
  };

  return (
    <NavBar>
      <Title $fontsize='30px' $color={theme.colors.primary}>
        SuperMarket
      </Title>
      <FlexContainer $align='center'>
        <StyledLink
          $display='flex'
          $align='center'
          $weight='500'
          $underline={false}
          $color={theme.text.grey}
          to={`/${PublicRoutes.HOME}`}>
          <HomeIcon />
          Home
        </StyledLink>
        {location != `/${PublicRoutes.LOGIN}` && location != `/${PublicRoutes.REGISTER}` && (
          <>
            <LinkSeparationBar />
            {role == Roles.ADMIN && (
              <>
                <StyledLink
                  $display='flex'
                  $align='center'
                  $weight='500'
                  $underline={false}
                  $color={theme.text.grey}
                  to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.ADMIN}`}>
                  <AdminIcon />
                  Admin
                </StyledLink>
                <LinkSeparationBar />
              </>
            )}
            {email && role != Roles.ADMIN && (
              <>
                <StyledLink
                  $display='flex'
                  $align='center'
                  $weight='500'
                  $underline={false}
                  $color={theme.text.grey}
                  to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.PROFILE}`}>
                  <UserIcon />
                  Profile
                </StyledLink>
                <LinkSeparationBar />
                <StyledLink
                  $display='flex'
                  $align='center'
                  $weight='500'
                  $underline={false}
                  $color={theme.text.grey}
                  to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CART}`}>
                  <CartIcon />
                  Cart
                </StyledLink>
                <LinkSeparationBar />
              </>
            )}
            {email ? (
              <>
                <StyledLink
                  $display='flex'
                  $align='center'
                  $weight='500'
                  $underline={false}
                  $color={theme.text.grey}
                  onClick={handleClick}>
                  <LogoutIcon />
                  Logout
                </StyledLink>
              </>
            ) : (
              <>
                <StyledLink
                  $display='flex'
                  $align='center'
                  $weight='500'
                  $underline={false}
                  $color={theme.text.grey}
                  to={`/${PublicRoutes.LOGIN}`}>
                  <UserIcon />
                  Sign In/Sign Up
                </StyledLink>
              </>
            )}
          </>
        )}
      </FlexContainer>
    </NavBar>
  );
};

export default Navbar;
