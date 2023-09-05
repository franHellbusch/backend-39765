import React from "react";
import { useDispatch } from "react-redux";
import { postProductInCart } from "@/services/cartService";
import { saveCart } from "@/store/states/cart";
import { Paragraph } from "@/styled-components";
import { ProductCardContainter, ProductCardLink, ProductImage } from "./styled-components";
import { useTheme } from "styled-components";
import { PrivateRoutes } from "@/models";

const ProductCard = ({ product, cartId }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const sendProductToCart = async () => {
    const response = await postProductInCart(cartId, product.id);
    dispatch(saveCart(response.payload));
  };

  return (
    <ProductCardContainter $width='250px' $direction='column' key={`${product.id}`}>
      <ProductImage $width='100%' src={product.imageUrl} alt='product-image' />
      <Paragraph $fontsize='16px' $margin='5px 15px 0 15px'>
        {product.title}
      </Paragraph>
      <Paragraph $fontsize='16px' $weight='600' $margin='0 15px 5px 15px'>
        ${product.price}
      </Paragraph>
      <ProductCardLink
        to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CART}`}
        onClick={sendProductToCart}
      >
        Send to cart
      </ProductCardLink>
    </ProductCardContainter>
  );
};

export default ProductCard;
