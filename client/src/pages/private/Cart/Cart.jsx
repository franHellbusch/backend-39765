import React, { useEffect } from "react";
import { getCartById } from "../../../services/cartService";
import { saveCart } from "../../../store/states/cart";
import { useDispatch, useSelector } from "react-redux";
import { PrivateRoutes } from "../../../models";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartState = useSelector((store) => store.cart);
  const { cart } = useSelector((store) => store.user);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCartById(cart);
      dispatch(saveCart(response.payload));
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Cart</h2>
      <button onClick={() => navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HOME}`)}>
        Home
      </button>
      <p>
        {cartState.products.map((p) => {
          return (
            <>
              <h1>{p.product.title}</h1>
              <h2>{p.quantity}</h2>
            </>
          );
        })}
      </p>
      <p>{cartState.id}</p>
    </>
  );
};

export default Cart;
