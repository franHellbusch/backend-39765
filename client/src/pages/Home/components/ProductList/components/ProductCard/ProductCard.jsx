import React from "react";
import { FlexContainer, Paragraph } from "@/styled-components";
import {
  ProductCardContainter,
  ProductCardLink,
  ProductImage,
  ProductImageContainer,
} from "./styled-components";
import { PublicRoutes } from "@/models";

const ProductCard = ({ product }) => {
  return (
    <FlexContainer $width='calc(20% - 10px)' $padding='1rem 5px'>
      <ProductCardContainter $direction='column' key={`${product.id}`}>
        <ProductImageContainer>
          <ProductImage src={product.presentationImage} alt='product-image' />
        </ProductImageContainer>
        <Paragraph $fontsize='15px' $margin='10px 15px 0 15px'>
          {product.title}
        </Paragraph>
        <Paragraph $fontsize='16px' $weight='600' $margin='0 15px 10px 15px'>
          ${product.price}
        </Paragraph>
        <ProductCardLink to={`/${PublicRoutes.PRODUCT_DETAIL}/${product.id}`}>
          View Detail
        </ProductCardLink>
      </ProductCardContainter>
    </FlexContainer>
  );
};

export default ProductCard;
