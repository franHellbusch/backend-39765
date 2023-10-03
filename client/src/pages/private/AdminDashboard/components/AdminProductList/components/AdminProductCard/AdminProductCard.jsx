import React from "react";
import { useDispatch } from "react-redux";
import { deleteProductById } from "@/services/productService";
import { removeProduct } from "@/store/states/product";
import {
  AdminDeleteProductButton,
  AdminProductImage,
  AdminProductListRow,
  AdminProductSeparator,
} from "./styled-components";
import { FlexContainer, Paragraph } from "@/styled-components";

const AdminProductCard = ({ product, salient }) => {
  const dispatch = useDispatch();

  const deleteProduct = async () => {
    const response = await deleteProductById(product.id);
    dispatch(removeProduct(response.payload.id));
  };

  return (
    <AdminProductListRow $salient={salient}>
      <AdminProductImage>
        <img src={product.presentationImage} alt='product-image' />
      </AdminProductImage>
      <AdminProductSeparator />
      <FlexContainer $direction='column'>
        <Paragraph $weight='600'>Title:</Paragraph>
        <Paragraph $fontsize='13px'>{product.title}</Paragraph>
      </FlexContainer>
      <AdminProductSeparator />
      <FlexContainer $direction='column'>
        <Paragraph $weight='600'>Price:</Paragraph>
        <Paragraph $fontsize='13px'>$ {product.price}</Paragraph>
      </FlexContainer>
      <AdminProductSeparator />
      <FlexContainer $direction='column'>
        <Paragraph $weight='600'>Stock:</Paragraph>
        <Paragraph $fontsize='13px'>{product.stock}</Paragraph>
      </FlexContainer>
      <AdminProductSeparator />
      <FlexContainer $direction='column'>
        <Paragraph $weight='600'>Category:</Paragraph>
        <Paragraph $fontsize='13px'>{product.category}</Paragraph>
      </FlexContainer>
      <AdminProductSeparator />
      <AdminDeleteProductButton onClick={deleteProduct}>Delete</AdminDeleteProductButton>
    </AdminProductListRow>
  );
};

export default AdminProductCard;
