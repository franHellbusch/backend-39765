import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/services/productService";
import { saveProducts } from "@/store/states/product";
import { ProductCard } from "./components";
import { FlexContainer, Paragraph, SectionTitle } from "@/styled-components";
import { useTheme } from "styled-components";
import { PageControlButton, PageControlLeftIcon, PageControlNextIcon } from "./styled-components";

const ProductList = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const productState = useSelector((store) => store.products);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();
        dispatch(saveProducts(response.payload));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const changePage = async (url) => {
    try {
      const response = await getProducts(url);
      dispatch(saveProducts(response.payload));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FlexContainer $width='calc(100% - 20%)' $direction='column' $margin='6rem 10%'>
      <FlexContainer $width='100%' $justify='space-between' $align='center' $margin='0 0 2rem 0'>
        <SectionTitle>
          Grab the best deal on <b>Smartphones</b>
        </SectionTitle>
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

      <FlexContainer $width='100%' $wrap='wrap'>
        {productState.products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </FlexContainer>
    </FlexContainer>
  );
};

export default ProductList;
