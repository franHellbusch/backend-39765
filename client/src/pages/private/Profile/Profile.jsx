import { PublicRoutes } from "@/models";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const userState = useSelector((store) => store.user);

  return (
    <>
      <h2>Profile</h2>
      <ul>
        <li>Email: {userState.email}</li>
        <li>Role: {userState.role}</li>
        {userState.displayName && <li>DisplayName: {userState.displayName}</li>}
        {userState.name && <li>Name: {userState.name}</li>}
        {userState.lastName && <li>LastName: {userState.lastName}</li>}
        {userState.age && <li>Age: {userState.age}</li>}
        {userState.cart && <li>Cart: {userState.cart}</li>}
        {userState.picture && (
          <li>
            Picture: <img src={userState.picture} alt='user_img' />
          </li>
        )}
      </ul>
    </>
  );
};

export default Profile;
