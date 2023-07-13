import { PrivateRoutes } from "@/models";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const userState = useSelector((store) => store.user);

  return (
    <>
      <h2>Profile</h2>
      <button onClick={() => navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HOME}`)}>
        Home
      </button>
      <ul>
        <li>{userState.email}</li>
        <li>{userState.role}</li>
        {userState.cart && <li>{userState.cart}</li>}
        {userState.name && <li>{userState.name}</li>}
        {userState.lastName && <li>{userState.lastName}</li>}
      </ul>
    </>
  );
};

export default Profile;
