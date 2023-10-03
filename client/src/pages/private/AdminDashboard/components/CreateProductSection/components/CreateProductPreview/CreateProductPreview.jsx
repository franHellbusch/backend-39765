import React from "react";
import { Paragraph } from "@/styled-components";
import {
  ProductCardContainter,
  ProductCardLink,
  ProductImage,
  ProductImageContainer,
} from "@/pages/Home";

const CreateProductPreview = ({ product }) => {
  return (
    <ProductCardContainter $height='fit-content' $width='300px' $direction='column'>
      <ProductImageContainer>
        <ProductImage
          src={
            product?.presentationImage ||
            "https://icon-library.com/images/no-image-available-icon/no-image-available-icon-7.jpg"
          }
          alt='product-image'
        />
      </ProductImageContainer>
      <Paragraph $fontsize='16px' $margin='10px 15px 0 15px'>
        {product?.title || "Product Title"}
      </Paragraph>
      <Paragraph $fontsize='16px' $weight='600' $margin='0 15px 10px 15px'>
        ${product?.price || "000000"}
      </Paragraph>
      <ProductCardLink>View Detail</ProductCardLink>
    </ProductCardContainter>
  );
};

export default CreateProductPreview;
