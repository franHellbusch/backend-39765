import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/services/productService";
import { saveProducts } from "@/store/states/product";
import { AdminProductListContainer } from "./styled-components";
import { useTheme } from "styled-components";
import { FlexContainer, Paragraph } from "@/styled-components";
import { PageControlButton, PageControlLeftIcon, PageControlNextIcon } from "@/pages/Home";
import { AdminProductCard } from "./components";

const AdminProductList = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const productState = useSelector((store) => store.products);

  const productLimit = 5;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProducts(false, productLimit);
      dispatch(saveProducts(response.payload));
    };
    fetchData();
  }, []);

  const changePage = async (url) => {
    const response = await getProducts(url);
    dispatch(saveProducts(response.payload));
  };

  return (
    <AdminProductListContainer>
      <FlexContainer $margin='0 0 1rem 0' $width='100%' $justify='flex-end'>
        <FlexContainer>
          <Paragraph
            $alignself='center'
            $style='italic'
            $fontsize='15px'
            $weight='600'
            $color={theme.colors.grey}>
            1-{productState.products.length} of {productState.totalPages}
          </Paragraph>
          <Paragraph
            $alignself='center'
            $margin='0 1rem'
            $style='italic'
            $fontsize='15px'
            $weight='600'
            $color={theme.text.grey}>
            Page: {productState.page}
          </Paragraph>
          <PageControlButton
            onClick={() => changePage(productState.prevLink)}
            $marginright='10px'
            disabled={!productState.hasPrevPage}>
            <PageControlLeftIcon $disabled={!productState.hasPrevPage} />
          </PageControlButton>
          <PageControlButton
            onClick={() => changePage(productState.nextLink)}
            disabled={!productState.hasNextPage}>
            <PageControlNextIcon $disabled={!productState.hasNextPage} />
          </PageControlButton>
        </FlexContainer>
      </FlexContainer>
      {productState.products.map((product, index) => (
        <AdminProductCard key={product.id} product={product} salient={(index + 1) % 2 != 0} />
      ))}
    </AdminProductListContainer>
  );
};

export default AdminProductList;
