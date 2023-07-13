import { Navigate, Outlet, resolvePath } from "react-router-dom";
import { PrivateRoutes } from "@/models/routes";
import { useSelector } from "react-redux";
import { Roles } from "@/models/roles";

const RoleGuard = () => {
  const userState = useSelector((store) => store.user);
  return userState.role == Roles.ADMIN ? (
    <Outlet />
  ) : (
    <Navigate to={resolvePath(`${PrivateRoutes.PRIVATE}`)} />
  );
};

export default RoleGuard;
