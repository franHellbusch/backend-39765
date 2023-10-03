import React, { useState, useEffect } from "react";
import { FlexContainer, Paragraph } from "@/styled-components";
import {
  CartProductCounterContainer,
  CartProductCounterControl,
  CartProductQuantityInput,
} from "./styled-components";
import { useTheme } from "styled-components";

const CartProductCardCounter = ({ stock, onAdd, quantity, loading }) => {
  const theme = useTheme();
  const [editingValue, setEditingValue] = useState(quantity.toString());

  const handleQuantityChange = (e) => {
    setEditingValue(e.target.value);
  };

  const more = () => {
    const newQuantity = quantity + 1;

    if (newQuantity <= stock) {
      setEditingValue(newQuantity.toString());
      onAdd(newQuantity);
    }
  };

  const less = () => {
    const newQuantity = quantity - 1;

    if (newQuantity >= 1) {
      setEditingValue(newQuantity.toString());
      onAdd(newQuantity);
    }
  };

  const handleBlurQuantity = () => {
    editingValue <= stock && editingValue >= 1 && onAdd(editingValue);
  };

  return (
    <FlexContainer $margin='0 3rem 0 0' $direction='column' $align='center'>
      <CartProductCounterContainer $excedent={editingValue > stock || editingValue < 1}>
        <CartProductCounterControl
          onClick={less}
          $disabled={quantity == 1 || loading}
          disabled={quantity == 1 || loading}>
          -
        </CartProductCounterControl>
        <CartProductQuantityInput
          type='number'
          value={editingValue}
          onChange={handleQuantityChange}
          onBlur={handleBlurQuantity}
          disabled={loading}
          min='1'
          max={stock}
        />
        <CartProductCounterControl
          onClick={more}
          $disabled={quantity == stock || loading}
          disabled={quantity == stock || loading}>
          +
        </CartProductCounterControl>
      </CartProductCounterContainer>
      <Paragraph $alignself='center' $fontsize='12px' $color={theme.text.grey}>
        Available: {stock}
      </Paragraph>
    </FlexContainer>
  );
};

export default CartProductCardCounter;
