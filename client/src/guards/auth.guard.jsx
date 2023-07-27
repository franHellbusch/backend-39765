import { Navigate, Outlet, resolvePath } from "react-router-dom";
import { PublicRoutes } from "@/models/routes";
import { useSelector } from "react-redux";

const AuthGuard = () => {
  const userState = useSelector((store) => store.user);
  return userState.email ? <Outlet /> : <Navigate to={resolvePath(`${PublicRoutes.LOGIN}`)} />;
};

export default AuthGuard;
