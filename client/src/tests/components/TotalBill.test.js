import { render, screen } from '@testing-library/react';
import { TotalBill } from '../../components/TotalBill';

describe('TotalBill', () => {
  const grossPrice = 10;
  const totalPrice = 8;

  it('should render total bill correctly', () => {
    render(<TotalBill grossPrice={grossPrice} totalPrice={totalPrice} />);
    const grossPriceElement = screen.getByText('$10');
    const discountElement = screen.getByText('$2');
    const netPriceElement = screen.getByText('$8');
    expect(grossPriceElement).toBeInTheDocument();
    expect(discountElement).toBeInTheDocument();
    expect(netPriceElement).toBeInTheDocument();
  });
});
