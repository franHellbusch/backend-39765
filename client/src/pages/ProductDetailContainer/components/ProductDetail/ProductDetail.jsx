import { FlexContainer, Paragraph, StyledLink, SubTitle, Title } from "@/styled-components";
import {
  AddProductButton,
  BackHomeDetailButton,
  CartDetailButton,
  CartDetailIcon,
  DetailContainer,
  StockParagraph,
} from "./styled-components";
import { PrivateRoutes, PublicRoutes } from "@/models";
import { ProductDetailCarrousel } from "./components";
import { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { postProductInCart } from "@/services/cartService";
import { saveCart } from "@/store/states/cart";
import { useCatch } from "@/hooks";
import { ErrorAlertMessage } from "@/components";
import { ErrorMessages } from "@/models/errorMessages";

const ProductDetail = ({ product }) => {
  const theme = useTheme();
  const { cart: cartId } = useSelector((store) => store.user);
  const { error, saveError, closeError } = useCatch();
  const { error: message, saveError: saveMessage, closeError: closeMessage } = useCatch();

  const dispatch = useDispatch();

  const sendProductToCart = async () => {
    try {
      const response = await postProductInCart(cartId, product.id);
      dispatch(saveCart(response.payload));
      saveMessage("Product was sent successfully");
    } catch (err) {
      saveError(ErrorMessages.carts.NOT_LOGGED_IN_TO_BUY);
    }
  };

  return (
    <DetailContainer>
      {error && <ErrorAlertMessage error={error} closeError={closeError} errorLevel='error' />}
      {message && (
        <ErrorAlertMessage error={message} closeError={closeMessage} errorLevel='success' />
      )}
      <StyledLink
        $display='flex'
        $align='center'
        to={`/${PublicRoutes.HOME}`}
        $margin='20px'
        $alignself='start'>
        <BackHomeDetailButton /> Back
      </StyledLink>
      <FlexContainer $height='70vh' $maxheight='600px'>
        <ProductDetailCarrousel images={product.imageUrls} />
        <FlexContainer
          $width='50%'
          $height='100%'
          $justify='space-between'
          $padding='0 3%'
          $direction='column'>
          <FlexContainer $width='100%' $direction='column'>
            <Title>{product.title}</Title>
            <FlexContainer $width='100%' $justify='space-between' $align='center'>
              <SubTitle>${product.price}</SubTitle>
              <StockParagraph>Available: {product.stock}</StockParagraph>
            </FlexContainer>
            <SubTitle $margintop='1rem' $marginbottom='5px' $fontsize='22px'>
              Description
            </SubTitle>
            <Paragraph $color={theme.text.grey} $fontsize='13px'>
              {product.description}
            </Paragraph>
          </FlexContainer>
          <FlexContainer $justify='space-between' $margin='0 0 2% 0' $width='100%'>
            <AddProductButton
              $disabled={error || message ? true : false}
              disabled={error || message ? true : false}
              onClick={sendProductToCart}>
              Add product to cart
            </AddProductButton>
            <CartDetailButton to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CART}`}>
              <CartDetailIcon />
            </CartDetailButton>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </DetailContainer>
  );
};

export default ProductDetail;
