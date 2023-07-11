import { useDispatch } from "react-redux";
import { logout } from "../../../services/userService";
import { removeUser } from "../../../store/states/user";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../../../models";
import { ProductList } from "./components/ProductList";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <ProductList />
    </>
  );
};

export default Home;
