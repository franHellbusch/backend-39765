import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../../services/productService";
import { saveProducts } from "../../../../../store/states/product";

const ProductList = () => {
  const dispatch = useDispatch();
  const productState = useSelector((store) => store.products);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProducts();
      dispatch(saveProducts(response.payload));
    };
    fetchData();
  }, []);

  return (
    <>
      <p>
        {productState.products.map((p) => {
          return <h1>{p.title}</h1>;
        })}
      </p>
      <p>{productState.page}</p>
    </>
  );
};

export default ProductList;
