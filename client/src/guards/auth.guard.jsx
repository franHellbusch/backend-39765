import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../models/routes";
import { useSelector } from "react-redux";

const AuthGuard = () => {
  const userState = useSelector((store) => store.user);
  return userState.name ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
};

export default AuthGuard;
