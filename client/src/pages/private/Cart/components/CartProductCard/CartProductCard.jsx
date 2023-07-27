import React from "react";
import { useDispatch } from "react-redux";
import { deleteProductInCart } from "@/services/cartService";
import { saveCart } from "@/store/states/cart";

const CartProductCard = ({ product, quantity, cartId }) => {
  const dispatch = useDispatch();

  const deleteProduct = async () => {
    const response = await deleteProductInCart(cartId, product.id);
    dispatch(saveCart(response.payload));
  };

  return (
    <tr key={`${product.id}`}>
      <td style={{ border: "1px solid black", padding: "5px" }}>{product.title}</td>
      <td style={{ border: "1px solid black", padding: "5px" }}>${product.price}</td>
      <td style={{ border: "1px solid black", padding: "5px" }}>{product.description}</td>
      <td style={{ border: "1px solid black", padding: "5px" }}>{product.stock}</td>
      <td style={{ border: "1px solid black", padding: "5px" }}>{product.category}</td>
      <td style={{ border: "1px solid red", padding: "5px" }}>{quantity}</td>
      <td style={{ border: "1px solid black", padding: "5px" }}>
        <button onClick={deleteProduct}>Delete product</button>
      </td>
    </tr>
  );
};

export default CartProductCard;
