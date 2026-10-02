import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import CartItem from './CartItem';

export default function App() {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  return (
    <div className="app-shell">
      <header className="shop-header">
        <div className="brand-block">
          <div className="brand-logo">e</div>
          <div>
            <h1>e-plantShopping</h1>
            <span>Fresh greenery for your home</span>
          </div>
        </div>

        <button className="cart-toggle" onClick={() => setShowCart((value) => !value)}>
          Cart <span className="cart-count">{totalQuantity}</span>
        </button>
      </header>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <ProductList onOpenCart={() => setShowCart(true)} />
      )}
    </div>
  );
}
