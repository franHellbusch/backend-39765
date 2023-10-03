import { FlexContainer, Paragraph } from "@/styled-components";
import { CartProductCardImage, CartProductButton } from "./styled-components";
import { useTheme } from "styled-components";
import { CartProductCardCounter } from "./components";
import { useDispatch } from "react-redux";
import { deleteProductInCart, updateProductQuantityInCart } from "@/services/cartService";
import { saveCart } from "@/store/states/cart";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "@/models";
import { useState } from "react";

const CartProductCard = ({ product, quantity, cartId }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const deleteProduct = async () => {
    const response = await deleteProductInCart(cartId, product.id);
    dispatch(saveCart(response.payload));
  };

  const updateQuantityInProduct = async (counterQuantity) => {
    try {
      setLoading(true);
      const response = await updateProductQuantityInCart(cartId, product.id, counterQuantity);
      dispatch(saveCart(response.payload));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FlexContainer $padding='15px 20px' $width='calc(100% - 40px)' $justify='space-between'>
      <FlexContainer>
        <CartProductCardImage>
          <img src={product.presentationImage} alt='product-image' />
        </CartProductCardImage>
        <FlexContainer>
          <FlexContainer $margin='0 1.5rem' $direction='column'>
            <Paragraph $fontsize='15px' $weight='600' $color={theme.text.darker}>
              {product.title}
            </Paragraph>
            <FlexContainer $margin='15px 0 0 0'>
              <CartProductButton onClick={deleteProduct}>Delete</CartProductButton>
              <CartProductButton
                onClick={() => navigate(`/${PublicRoutes.PRODUCT_DETAIL}/${product.id}`)}>
                View Detail
              </CartProductButton>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer>
        <CartProductCardCounter
          stock={product.stock}
          quantity={quantity}
          onAdd={updateQuantityInProduct}
          loading={loading}
        />
        <Paragraph $fontsize='20px'>$ {product.price}</Paragraph>
      </FlexContainer>
    </FlexContainer>
  );
};

export default CartProductCard;
