import { FlexContainer, Paragraph, SubTitle } from "@/styled-components";
import {
  CartDeleteAllButton,
  CartDeleteAllButtonIcon,
  CartProductListContainer,
  CartProductListSpacer,
  EmptyCartButton,
  EmptyCartIcon,
} from "./styled-components";
import { useTheme } from "styled-components";
import { PublicRoutes } from "@/models";
import { CartProductCard } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { deleteAllProductsInCart } from "@/services/cartService";
import { removeAllProductsInCart } from "@/store/states/cart";

const CartProductList = ({ products }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { cart: cartId } = useSelector((store) => store.user);

  const deleteAllProducts = async () => {
    await deleteAllProductsInCart(cartId);
    dispatch(removeAllProductsInCart());
  };

  return (
    <CartProductListContainer $empty={products.length == 0}>
      {products.length === 0 ? (
        <>
          <EmptyCartIcon
            src='https://cdn-icons-png.flaticon.com/512/4551/4551647.png'
            alt='bag-icon'
          />
          <Paragraph
            $margin='15px 0 5px 0'
            $fontsize='17px'
            $weight='500'
            $color={theme.text.darker}
            $alignself='center'>
            Start Your Shopping Cart!
          </Paragraph>
          <Paragraph $fontsize='15px' $margin='4px 0' $color={theme.text.grey} $alignself='center'>
            Add Products and Unlock Free Shipping.
          </Paragraph>
          <EmptyCartButton to={`/${PublicRoutes.HOME}`}>Explore Products</EmptyCartButton>
        </>
      ) : (
        <>
          <FlexContainer $padding='15px 20px' $width='calc(100% - 40px)'>
            <SubTitle $fontsize='17px'>Products</SubTitle>
          </FlexContainer>
          {products.map((p, index) => (
            <Fragment key={index}>
              <CartProductListSpacer />
              <CartProductCard
                key={p.product.id}
                product={p.product}
                quantity={p.quantity}
                cartId={cartId}
              />
            </Fragment>
          ))}
          <CartProductListSpacer />
          <FlexContainer $justify='flex-end' $padding='15px 20px' $width='calc(100% - 40px)'>
            <CartDeleteAllButton onClick={deleteAllProducts}>
              <CartDeleteAllButtonIcon />
              Delete All
            </CartDeleteAllButton>
          </FlexContainer>
        </>
      )}
    </CartProductListContainer>
  );
};

export default CartProductList;
