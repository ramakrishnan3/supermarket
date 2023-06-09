import { render, screen, fireEvent } from '@testing-library/react';
import { CartItem } from '../../components/CartItem';

describe('CartItem', () => {
  const item = { itemName: 1 };
  const cartItemAdded = 3;
  const removeItemFromCart = jest.fn();
  const addItemToCart = jest.fn();

  it('should render cart item correctly', () => {
    render(
      <CartItem
        item={item}
        cartItemAdded={cartItemAdded}
        removeItemFromCart={removeItemFromCart}
        addItemToCart={addItemToCart}
      />
    );
    const itemName = screen.getByText('itemName');
    const counterText = screen.getByText('3');
    expect(itemName).toBeInTheDocument();
    expect(counterText).toBeInTheDocument();
  });

  it('should call removeItemFromCart when "-" button is clicked', () => {
    render(
      <CartItem
        item={item}
        cartItemAdded={cartItemAdded}
        removeItemFromCart={removeItemFromCart}
        addItemToCart={addItemToCart}
      />
    );
    const minusButtons = screen.getAllByText('-');
    const firstMinusButton = minusButtons[0];
  
    fireEvent.click(firstMinusButton);
    expect(removeItemFromCart).toHaveBeenCalledTimes(1);
    expect(removeItemFromCart).toHaveBeenCalledWith(item);
  });

  it('should call addItemToCart when "+" button is clicked', () => {
    render(
      <CartItem
        item={item}
        cartItemAdded={cartItemAdded}
        removeItemFromCart={removeItemFromCart}
        addItemToCart={addItemToCart}
      />
    );
    const plusButtons = screen.getAllByText('+');
    const firstPlusButton = plusButtons[0];
  
    fireEvent.click(firstPlusButton);
    expect(addItemToCart).toHaveBeenCalledTimes(1);
    expect(addItemToCart).toHaveBeenCalledWith(item);
  });

  it('should disable "-" button when cartItemAdded is 0', () => {
    render(
      <CartItem
        item={item}
        cartItemAdded={0}
        removeItemFromCart={removeItemFromCart}
        addItemToCart={addItemToCart}
      />
    );
    const minusButtons = screen.getAllByText('-');
    const firstMinusButton = minusButtons[0];
    expect(firstMinusButton).toBeDisabled();
  });
});
