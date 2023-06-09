import React from 'react';
import { AddressFieldContainer } from '../styledComponents/styles';

export const AddressField = ({ address, setAddress }) => {
  return (
    <AddressFieldContainer
      label="Customer's Address"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      multiline
      rows={4}
    />
  );
};
