import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/services/userService";
import { removeUser } from "@/store/states/user";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "@/models";
import { ProductList } from "./components";
import { useEffect } from "react";
import { getCartById } from "@/services/cartService";
import { saveCart } from "@/store/states/cart";
import { Roles } from "@/models/roles";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart: cartId, role } = useSelector((store) => store.user);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCartById(cartId);
      dispatch(saveCart(response.payload));
    };
    fetchData();
  }, []);

  const handleClick = async () => {
    await logout();
    dispatch(removeUser());
    navigate(`/${PublicRoutes.LOGIN}`);
  };

  return (
    <>
      <h2>Home</h2>
      <button onClick={handleClick}>Logout</button>
      <button onClick={() => navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CART}`)}>
        Cart
      </button>
      <button onClick={() => navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.PROFILE}`)}>
        Profile
      </button>
      {role == Roles.ADMIN && (
        <button onClick={() => navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.ADMIN}`)}>
          ADMIN DASHBOARD
        </button>
      )}
      <ProductList />
    </>
  );
};

export default Home;
