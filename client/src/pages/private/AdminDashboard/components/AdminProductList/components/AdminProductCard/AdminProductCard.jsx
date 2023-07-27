import React from "react";
import { useDispatch } from "react-redux";
import { deleteProductById } from "@/services/productService";
import { removeProduct } from "@/store/states/product";

const AdminProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const deleteProduct = async () => {
    const response = await deleteProductById(product.id);
    dispatch(removeProduct(response.payload.id));
  };

  return (
    <tr key={`${product.id}`}>
      <td style={{ border: "1px solid black", padding: "5px" }}>{product.title}</td>
      <td style={{ border: "1px solid black", padding: "5px" }}>${product.price}</td>
      <td style={{ border: "1px solid black", padding: "5px" }}>{product.description}</td>
      <td style={{ border: "1px solid black", padding: "5px" }}>{product.stock}</td>
      <td style={{ border: "1px solid black", padding: "5px" }}>{product.category}</td>
      <td style={{ border: "1px solid black", padding: "5px" }}>
        <button onClick={deleteProduct}>deleteProduct</button>
      </td>
    </tr>
  );
};

export default AdminProductCard;
