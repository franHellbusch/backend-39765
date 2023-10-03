import { Navigate, Outlet, resolvePath } from "react-router-dom";
import { PublicRoutes } from "@/models/routes";
import { useSelector } from "react-redux";

const NoAuthGuard = () => {
  const userState = useSelector((store) => store.user);
  return !userState.email ? <Outlet /> : <Navigate to={resolvePath(`/${PublicRoutes.HOME}`)} />;
};

export default NoAuthGuard;
