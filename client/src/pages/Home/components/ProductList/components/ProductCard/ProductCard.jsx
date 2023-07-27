import React from "react";
import { useDispatch } from "react-redux";
import { postProductInCart } from "@/services/cartService";
import { saveCart } from "@/store/states/cart";

const ProductCard = ({ product, cartId }) => {
  const dispatch = useDispatch();

  const sendProductToCart = async () => {
    const response = await postProductInCart(cartId, product.id);
    dispatch(saveCart(response.payload));
  };

  return (
    <tr key={`${product.id}`}>
      <td style={{ border: "1px solid black", padding: "5px" }}>{product.title}</td>
      <td style={{ border: "1px solid black", padding: "5px" }}>${product.price}</td>
      <td style={{ border: "1px solid black", padding: "5px" }}>{product.description}</td>
      <td style={{ border: "1px solid black", padding: "5px" }}>{product.stock}</td>
      <td style={{ border: "1px solid black", padding: "5px" }}>{product.category}</td>
      <td style={{ border: "1px solid black", padding: "5px" }}>
        <button onClick={sendProductToCart}>Send to cart</button>
      </td>
    </tr>
  );
};

export default ProductCard;
