import { Navigate, Route } from "react-router-dom";
import { Home } from "./Home";
import { PrivateRoutes } from "../../models";
import { RoutesNotFound } from "../../utils";
import { Cart } from "./Cart";

const Private = () => {
  return (
    <RoutesNotFound>
      <Route path={`/`} element={<Navigate to={PrivateRoutes.HOME} />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
      <Route path={PrivateRoutes.CART} element={<Cart />} />
    </RoutesNotFound>
  );
};

export default Private;
