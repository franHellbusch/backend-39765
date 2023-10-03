import { format, parseISO } from "date-fns";
import {
  PurchaseDateIcon,
  PurchaseDateText,
  ShopingCardDropdown,
  ShopingDropdownIcon,
  ShopingSectionCardContainer,
} from "./styled-components";
import { useState } from "react";
import { ShopingCardTicket } from "./components";

const ShopingSectionCard = ({ ticket }) => {
  const parsedDate = parseISO(ticket.purchase_datetime);
  const formattedDate = format(parsedDate, "MMMM dd, yyyy, HH:mm");
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <ShopingSectionCardContainer>
      <ShopingCardDropdown onClick={handleDropdown}>
        <PurchaseDateText $fontsize='13px'>
          <PurchaseDateIcon />
          {formattedDate}
        </PurchaseDateText>
        <ShopingDropdownIcon $dropped={dropdown} />
      </ShopingCardDropdown>
      {dropdown && <ShopingCardTicket ticket={ticket} date={formattedDate} />}
    </ShopingSectionCardContainer>
  );
};

export default ShopingSectionCard;
