import React, { useEffect } from "react";
import { deleteAllProductsInCart, getCartById } from "@/services/cartService";
import { removeAllProductsInCart, saveCart } from "@/store/states/cart";
import { useDispatch, useSelector } from "react-redux";
import { PrivateRoutes } from "@/models";
import { useNavigate } from "react-router-dom";
import { CartProductCard } from "./components";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartState = useSelector((store) => store.cart);
  const { cart: cartId } = useSelector((store) => store.user);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCartById(cartId);
      dispatch(saveCart(response.payload));
    };
    fetchData();
  }, []);

  const deleteAllProducts = async () => {
    await deleteAllProductsInCart(cartId);
    dispatch(removeAllProductsInCart());
  };

  return (
    <>
      <h2>Cart</h2>
      <button onClick={() => navigate(`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HOME}`)}>
        Home
      </button>
      <p>{cartState.id}</p>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "5px" }}>Title</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Price</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Description</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Stock</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Category</th>
            <th style={{ border: "1px solid red", padding: "5px" }}>quantity</th>
            <th style={{ border: "1px solid black", padding: "5px" }}></th>
          </tr>
        </thead>
        <tbody>
          {cartState.products.map(({ product, quantity }) => {
            return (
              <CartProductCard
                key={product.id}
                product={product}
                quantity={quantity}
                cartId={cartId}
              />
            );
          })}
        </tbody>
      </table>
      <button onClick={deleteAllProducts}>Delete all products</button>
    </>
  );
};

export default Cart;
