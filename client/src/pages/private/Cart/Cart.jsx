import React, { useEffect } from "react";
import { getCartById } from "@/services/cartService";
import { saveCart } from "@/store/states/cart";
import { useDispatch, useSelector } from "react-redux";
import { PublicRoutes } from "@/models";
import { useNavigate } from "react-router-dom";
import { CartProductList, CartResume } from "./components";
import { CoverContainer, FlexContainer } from "@/styled-components";
import { useTheme } from "styled-components";
import { Roles } from "@/models/roles";

const Cart = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartState = useSelector((store) => store.cart);
  const { cart: cartId, role } = useSelector((store) => store.user);

  useEffect(() => {
    if (role == Roles.ADMIN) {
      return navigate(`/${PublicRoutes.HOME}`);
    }
    const fetchData = async () => {
      const response = await getCartById(cartId);
      dispatch(saveCart(response.payload));
    };
    fetchData();
  }, []);

  return (
    <CoverContainer $position='relative' $align='flex-start' $background={theme.colors.extraLight}>
      <FlexContainer $width='100%' $maxwidth='1300px' $justify='space-between' $margin='2rem'>
        <CartProductList products={cartState.products} />
        <CartResume
          total={cartState.total}
          productsQuantity={cartState.products.reduce((a, e) => a + e.quantity, 0)}
        />
      </FlexContainer>
    </CoverContainer>
  );
};

export default Cart;
