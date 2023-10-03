import { FlexContainer, Paragraph } from "@/styled-components";
import { ShopingTicketProductContainer, TicketProductImage } from "./styled-components";
import { useTheme } from "styled-components";

const TicketProductCard = ({ product, quantity }) => {
  const theme = useTheme();

  return (
    <ShopingTicketProductContainer>
      <TicketProductImage>
        <img src={product.presentationImage} alt='product-image' />
      </TicketProductImage>
      <FlexContainer>
        <FlexContainer $margin='0 1.5rem' $direction='column'>
          <Paragraph $fontsize='15px' $weight='600' $color={theme.text.darker}>
            {product.title}
          </Paragraph>
          <Paragraph $fontsize='15px' $weight='600' $color={theme.text.darker}>
            Quantity: {quantity}
          </Paragraph>
          <Paragraph $fontsize='20px'>$ {product.price}</Paragraph>
        </FlexContainer>
      </FlexContainer>
    </ShopingTicketProductContainer>
  );
};

export default TicketProductCard;
