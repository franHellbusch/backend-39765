import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/services/productService";
import { saveProducts } from "@/store/states/product";
import { ProductCard } from "./components";

const ProductList = () => {
  const dispatch = useDispatch();
  const productState = useSelector((store) => store.products);
  const { cart: cartId } = useSelector((store) => store.user);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProducts();
      dispatch(saveProducts(response.payload));
    };
    fetchData();
  }, []);

  const changePage = async (url) => {
    const response = await getProducts(url);
    dispatch(saveProducts(response.payload));
  };

  return (
    <>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "5px" }}>Title</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Price</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Description</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Stock</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Category</th>
            <th style={{ border: "1px solid black", padding: "5px" }}></th>
          </tr>
        </thead>
        <tbody>
          {productState.products.map((product) => {
            return <ProductCard key={product.id} product={product} cartId={cartId} />;
          })}
        </tbody>
      </table>
      {productState.prevPage && (
        <button onClick={() => changePage(productState.prevLink)}>Prev</button>
      )}
      {productState.totalPages > 1 && <p>{productState.page}</p>}
      {productState.nextPage && (
        <button onClick={() => changePage(productState.nextLink)}>Next</button>
      )}
    </>
  );
};

export default ProductList;
