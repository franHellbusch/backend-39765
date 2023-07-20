import { Navigate, Route } from "react-router-dom";
import { PrivateRoutes } from "@/models";
import { RoutesNotFound } from "@/utils";
import RoleGuard from "@/guards/role.guard";
import { lazy } from "react";

const Cart = lazy(() => import("./Cart/Cart"));
const Profile = lazy(() => import("./Profile/Profile"));
const AdminDashboard = lazy(() => import("./AdminDashboard/AdminDashboard"));

const Private = () => {
  return (
    <RoutesNotFound>
      <Route path={`/`} element={<Navigate to={PrivateRoutes.CART} />} />
      <Route path={PrivateRoutes.CART} element={<Cart />} />
      <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
      <Route element={<RoleGuard />}>
        <Route path={PrivateRoutes.ADMIN} element={<AdminDashboard />} />
      </Route>
    </RoutesNotFound>
  );
};

export default Private;
