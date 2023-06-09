import React from 'react';
import { Typography } from '@mui/material';
import { CartItemContainer, CartItemContent, CounterContainer, CounterButton, CounterText } from '../styledComponents/styles';


export const CartItem = ({ item, cartItemAdded, removeItemFromCart, addItemToCart }) => {
  return (
    <CartItemContainer>
      <CartItemContent>
        <Typography variant="body1">{Object.keys(item)[0]}</Typography>
        <CounterContainer>
          <CounterButton
            variant="outlined"
            disabled={cartItemAdded === 0}
            onClick={() => removeItemFromCart(item)}
          >
            -
          </CounterButton>
          <CounterText variant="body1">{cartItemAdded}</CounterText>
          <CounterButton variant="outlined" onClick={() => addItemToCart(item)}>
            +
          </CounterButton>
        </CounterContainer>
      </CartItemContent>
    </CartItemContainer>
  );
};
