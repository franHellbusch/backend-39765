import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/services/productService";
import { saveProducts } from "@/store/states/product";
import { ProductCard } from "./components";
import { FlexContainer } from "@/styled-components";

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
    <FlexContainer $justify='space-between' $wrap='wrap'>
      {productState.products.map((product) => {
        return <ProductCard key={product.id} product={product} cartId={cartId} />;
      })}
      {productState.prevPage && (
        <button onClick={() => changePage(productState.prevLink)}>Prev</button>
      )}
      {productState.totalPages > 1 && <p>{productState.page}</p>}
      {productState.nextPage && (
        <button onClick={() => changePage(productState.nextLink)}>Next</button>
      )}
    </FlexContainer>
  );
};

export default ProductList;
