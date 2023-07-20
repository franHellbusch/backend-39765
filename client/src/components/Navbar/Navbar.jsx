import React from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "@/models";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "@/store/states/user";
import { Roles } from "@/models/roles";
import { NavBar, NavLink } from "./styles-components";
import { logout } from "@/services/userService";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role } = useSelector((store) => store.user);

  const handleClick = async () => {
    await logout();
    dispatch(removeUser());
    navigate(`/${PublicRoutes.LOGIN}`);
  };

  return (
    <NavBar>
      <NavLink onClick={() => navigate(`/${PublicRoutes.HOME}`)}>Home</NavLink>
      <NavLink onClick={() => navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CART}`)}>
        Cart
      </NavLink>
      <NavLink onClick={() => navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.PROFILE}`)}>
        Profile
      </NavLink>
      {role == Roles.ADMIN && (
        <NavLink onClick={() => navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.ADMIN}`)}>
          AdminDashboard
        </NavLink>
      )}
      <NavLink onClick={handleClick}>Logout</NavLink>
    </NavBar>
  );
};

export default Navbar;
