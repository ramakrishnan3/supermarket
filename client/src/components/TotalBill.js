import React from 'react';
import { Typography } from '@mui/material';
import { TotalBillContainer, TotalBillContent, TotalBillRow } from '../styledComponents/styles';

export const TotalBill = ({ grossPrice, totalPrice }) => {
  return (
    <TotalBillContainer>
      <TotalBillContent>
        <Typography variant="h6">Bill</Typography>
        <TotalBillRow>
          <Typography variant="body1">Gross Price:</Typography>
          <Typography variant="body1">${grossPrice}</Typography>
        </TotalBillRow>
        <TotalBillRow>
          <Typography variant="body1">Discount:</Typography>
          <Typography variant="body1">${grossPrice - totalPrice}</Typography>
        </TotalBillRow>
        <TotalBillRow>
          <Typography variant="body1">Net Price:</Typography>
          <Typography variant="body1">${totalPrice}</Typography>
        </TotalBillRow>
      </TotalBillContent>
    </TotalBillContainer>
  );
};
