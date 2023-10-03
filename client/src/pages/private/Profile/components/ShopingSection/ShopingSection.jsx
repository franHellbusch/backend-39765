import { Paragraph } from "@/styled-components";
import {
  EmptyShopingButton,
  EmptyShopingIcon,
  ShopingSectionContainer,
  ShopingSeparator,
} from "./styled-components";
import { useTheme } from "styled-components";
import { PublicRoutes } from "@/models";
import { useDispatch, useSelector } from "react-redux";
import { getTicketsByEmail } from "@/services/ticketService";
import { saveTickets } from "@/store/states/ticket";
import { Fragment, useEffect } from "react";
import { ShopingSectionCard } from "./components";

const ShopingSection = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const ticketState = useSelector((store) => store.ticket);
  const { email } = useSelector((store) => store.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTicketsByEmail(email);
        dispatch(saveTickets(response.payload));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <ShopingSectionContainer $empty={ticketState.length == 0}>
      {ticketState.length == 0 ? (
        <>
          <EmptyShopingIcon
            src='https://cdn-icons-png.flaticon.com/128/743/743131.png'
            alt='bag-icon'
          />
          <Paragraph
            $margin='15px 0 5px 0'
            $fontsize='17px'
            $weight='500'
            $color={theme.text.darker}
            $alignself='center'>
            View Your Purchase Tickets!
          </Paragraph>
          <Paragraph $margin='4px 0' $color={theme.text.grey} $alignself='center'>
            You don't have any purchase tickets yet. Make a purchase to start viewing your tickets.
          </Paragraph>
          <EmptyShopingButton to={`/${PublicRoutes.HOME}`}>Explore Products</EmptyShopingButton>
        </>
      ) : (
        ticketState.map((ticket, index) => (
          <Fragment key={ticket.code}>
            <ShopingSectionCard ticket={ticket} />
            {index != ticketState.length - 1 && <ShopingSeparator />}
          </Fragment>
        ))
      )}
    </ShopingSectionContainer>
  );
};

export default ShopingSection;
