import React from 'react';
import { Button } from '@mui/material';
import { CartItem } from './CartItem';
import { TotalBill } from './TotalBill';
import { AddressField } from './AddressField';
import { Typography } from '@mui/material';
import { CartPageContainer } from '../styledComponents/styles';

export const CartPage = ({
  items,
  cart,
  grossPrice,
  totalPrice,
  address,
  receiptRef,
  addItemToCart,
  removeItemFromCart,
  handlePrint,
  setAddress,
}) => {
  return (
    <CartPageContainer ref={receiptRef}>
      <Typography variant="h4">Cart</Typography>
      {items.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          cartItemAdded={
            cart.find((cartItem) => Object.keys(cartItem)[0] === Object.keys(item)[0])?.[
              Object.keys(item)[0]
            ] || 0
          }
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
        />
      ))}
      {cart.length > 0 && (
        <TotalBill
          grossPrice={grossPrice}
          totalPrice={totalPrice}
        />
      )}
      <AddressField
        address={address}
        setAddress={setAddress}
      />
      {cart.length > 0 && (
        <div>
          <Button
            variant="contained"
            onClick={() => {
              address && address.length > 0 ? handlePrint() : alert('Please enter address');
            }}
          >
            Print Receipt
          </Button>
        </div>
      )}
    </CartPageContainer>
  );
};
