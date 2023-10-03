import { FlexContainer, Paragraph, SubTitle } from "@/styled-components";
import { CartResumeButton, CartResumeContainer, CartResumeSpacer } from "./styled-components";
import { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { finishPurchase } from "@/services/cartService";
import { removeAllProductsInCart } from "@/store/states/cart";
import { useCatch } from "@/hooks";
import { ErrorAlertMessage } from "@/components";

const CartResume = ({ total, productsQuantity }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { cart: cartId } = useSelector((store) => store.user);
  const { error, saveError, closeError } = useCatch();
  const { error: message, saveError: saveMessage, closeError: closeMessage } = useCatch();

  const finishCartPurchase = async () => {
    try {
      await finishPurchase(cartId);
      saveMessage("The ticket was created and is ready to be searched in your profile");
      dispatch(removeAllProductsInCart());
    } catch (err) {
      saveError(err);
    }
  };

  return (
    <>
      {error && <ErrorAlertMessage error={error} closeError={closeError} errorLevel='error' />}
      {message && (
        <ErrorAlertMessage error={message} closeError={closeMessage} errorLevel='success' />
      )}
      <CartResumeContainer $empty={total == 0}>
        {total == 0 ? (
          <>
            <FlexContainer $padding='15px 20px' $width='calc(100% - 40px)'>
              <SubTitle $color={theme.text.grey} $fontsize='17px'>
                Purchase Summary
              </SubTitle>
            </FlexContainer>
            <CartResumeSpacer />
            <FlexContainer $padding='15px 20px' $width='calc(100% - 40px)'>
              <Paragraph $color={theme.text.grey} $fontsize='13px'>
                Here you'll see your purchase totals once you add products.
              </Paragraph>
            </FlexContainer>
          </>
        ) : (
          <>
            <FlexContainer $padding='15px 20px' $width='calc(100% - 40px)'>
              <SubTitle $fontsize='17px'>Purchase Summary</SubTitle>
            </FlexContainer>
            <CartResumeSpacer />
            <FlexContainer $direction='column' $padding='15px 20px' $width='calc(100% - 40px)'>
              <FlexContainer $width='100%' $justify='space-between'>
                <Paragraph>Products ({productsQuantity})</Paragraph>
                <Paragraph>$ {total}</Paragraph>
              </FlexContainer>
              <FlexContainer $width='100%' $justify='space-between' $margin='15px 0'>
                <Paragraph $fontsize='16px' $color={theme.text.darker} $weight='600'>
                  Total
                </Paragraph>
                <Paragraph $fontsize='16px' $color={theme.text.darker} $weight='600'>
                  $ {total}
                </Paragraph>
              </FlexContainer>
              <CartResumeButton onClick={finishCartPurchase}>Finish Purchase</CartResumeButton>
            </FlexContainer>
          </>
        )}
      </CartResumeContainer>
    </>
  );
};

export default CartResume;
