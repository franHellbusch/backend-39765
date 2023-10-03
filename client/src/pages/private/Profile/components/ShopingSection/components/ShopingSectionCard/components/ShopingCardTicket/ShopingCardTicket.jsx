import { FlexContainer, Paragraph, SubTitle } from "@/styled-components";
import {
  ShopingCardTicketContainer,
  ShopingPurchaseDetailContainer,
  ShopingTicketSeparator,
} from "./styled-components";
import { Fragment } from "react";
import { TicketProductCard } from "./components";

const ShopingCardTicket = ({ ticket, date }) => {
  return (
    <ShopingCardTicketContainer>
      <FlexContainer $direction='column'>
        {ticket.products.map((p, index) => (
          <Fragment key={p.product.id}>
            <TicketProductCard product={p.product} quantity={p.quantity} />
            {index != ticket.products.length - 1 && <ShopingTicketSeparator />}
          </Fragment>
        ))}
      </FlexContainer>
      <ShopingPurchaseDetailContainer>
        <SubTitle $fontsize='23px'>Purchase Detail</SubTitle>
        <ShopingTicketSeparator />
        <FlexContainer $margin='1rem 0 1rem 0' $width='100%' $justify='space-between'>
          <Paragraph $weight='600' $fontsize='16px'>
            Amount:
          </Paragraph>
          <Paragraph $fontsize='16px'>$ {ticket.amount}</Paragraph>
        </FlexContainer>
        <FlexContainer $margin='0 0 1rem 0' $width='100%' $justify='space-between'>
          <Paragraph $weight='600' $fontsize='16px'>
            Total Products:
          </Paragraph>
          <Paragraph $fontsize='16px'>
            {ticket.products.reduce((a, p) => a + p.quantity, 0)}
          </Paragraph>
        </FlexContainer>
        <FlexContainer $margin='0 0 1rem 0' $width='100%' $justify='space-between'>
          <Paragraph $weight='600' $fontsize='16px'>
            Purchaser:
          </Paragraph>
          <Paragraph $fontsize='16px'>{ticket.purchaser}</Paragraph>
        </FlexContainer>
        <FlexContainer $margin='0 0 1rem 0' $width='100%' $justify='space-between'>
          <Paragraph $weight='600' $fontsize='16px'>
            Purchase Date:
          </Paragraph>
          <Paragraph $fontsize='16px'>{date}</Paragraph>
        </FlexContainer>
      </ShopingPurchaseDetailContainer>
    </ShopingCardTicketContainer>
  );
};

export default ShopingCardTicket;
