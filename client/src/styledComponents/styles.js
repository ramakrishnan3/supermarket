import { Card, CardContent, TextField, Typography, Button } from '@mui/material';
import styled from 'styled-components';

const AddressFieldContainer = styled(TextField)`
  width: 100%;
`;

const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin-top: 50px;
  width: 400px;
  margin: auto;
`;

const CartItemContainer = styled(Card)`
  width: 100%;
`;

const CartItemContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CounterButton = styled(Button)`
  min-width: 32px;
  height: 32px;
`;

const CounterText = styled(Typography)`
  padding: 0 10px;
`;

const TotalBillContainer = styled(Card)`
  width: 100%;
  margin-top: 20px;
`;

const TotalBillContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TotalBillRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

export {
  AddressFieldContainer,
  CartPageContainer,
  CartItemContainer,
  CartItemContent,
  CounterContainer,
  CounterButton,
  CounterText,
  TotalBillContainer,
  TotalBillContent,
  TotalBillRow,
};
