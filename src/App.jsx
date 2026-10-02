import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  if (showLanding) {
    return (
      <div className="landing-page">
        <div className="landing-card">
          <p className="eyebrow">Welcome to</p>
          <h1>Paradise Nursery</h1>
          <p>
            Discover beautiful plants, calming greenery, and everything you need
            to turn your space into a fresh, vibrant sanctuary.
          </p>
          <button className="get-started-btn" onClick={() => setShowLanding(false)}>
            Get Started
          </button>
          <AboutUs />
        </div>
      </div>
    );
  }

  return (
    <div className="shop-shell">
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
