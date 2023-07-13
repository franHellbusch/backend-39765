import { Navigate, Route } from "react-router-dom";
import { Home } from "./Home";
import { PrivateRoutes } from "@/models";
import { RoutesNotFound } from "@/utils";
import { Cart } from "./Cart";
import RoleGuard from "@/guards/role.guard";
import { AdminDashboard } from "./AdminDashboard";
import { Profile } from "./Profile";

const Private = () => {
  return (
    <RoutesNotFound>
      <Route path={`/`} element={<Navigate to={PrivateRoutes.HOME} />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
      <Route path={PrivateRoutes.CART} element={<Cart />} />
      <Route path={PrivateRoutes.PROFILE} element={<Profile />} />
      <Route element={<RoleGuard />}>
        <Route path={PrivateRoutes.ADMIN} element={<AdminDashboard />} />
      </Route>
    </RoutesNotFound>
  );
};

export default Private;
