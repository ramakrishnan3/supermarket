import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddressField } from '../../components/AddressField';

describe('AddressField', () => {
  it('should render address field correctly', () => {
    const setAddress = jest.fn();
    render(<AddressField address="123 Main St" setAddress={setAddress} />);
    const addressField = screen.getByLabelText("Customer's Address");
    expect(addressField).toBeInTheDocument();
    expect(addressField.value).toBe('123 Main St');
  });

  it('should update address when input value changes', () => {
    const setAddress = jest.fn();
    render(<AddressField address="" setAddress={setAddress} />);
    const addressField = screen.getByLabelText("Customer's Address");
    act(() => {
      userEvent.type(addressField, '123 Main St');
    });
    expect(setAddress).toHaveBeenCalledTimes(11); // Number of key presses
  });
});
