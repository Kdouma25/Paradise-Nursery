import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

export const plantsArray = [
  {
    name: 'Snake Plant',
    image:
      'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=800&q=80',
    description: 'A hardy indoor plant that tolerates low light and infrequent watering.',
    cost: '$19.99',
  },
  {
    name: 'Golden Pothos',
    image:
      'https://aroidwiki.com/wp-content/uploads/2021/11/golden-pothos-care-image1-1-scaled.jpg',
    description: 'A trailing houseplant that grows well in a range of indoor lighting conditions.',
    cost: '$14.50',
  },
  {
    name: 'Peace Lily',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvuBmWOCnQlykseUBB0xjKnj7HVyuhy9tdOtbj5ujaQK8yCUaONpUjF2H2g9SNFwc-koWHM4odI-8OFxjmcqInw5EOMMbHoE7GM9iAA&s=10',
    description: 'A popular indoor plant with glossy leaves and elegant white flowers.',
    cost: '$22.00',
  },
  {
    name: 'Spider Plant',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69cSHhScL4qti6I2Tdfe3SdAIXYSwo6paO9Fffrydu4pfErpQycD8HNXBIvtDwYeb9c0XTVt82DLMKd4-lAS9fd7uWpa2IevwuWDYOgg&s=10',
    description: 'An easy-care houseplant with long arching leaves and small plantlets.',
    cost: '$17.25',
  },
  {
    name: 'Aloe Vera',
    image:
      'https://www.healthyhouseplants.com/wp-content/uploads/2024/08/Aloe_Vera-1200x1200.jpg',
    description: 'A sun-loving succulent with thick, water-storing leaves.',
    cost: '$18.75',
  },
  {
    name: 'Rubber Plant',
    image: 'https://abeautifulmess.com/wp-content/uploads/2023/06/rubbertree-1.jpg',
    description: 'A decorative indoor plant with large, glossy green leaves.',
    cost: '$26.99',
  },
];

function ProductList({ onOpenCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  return (
    <div className="product-page">
      <section className="hero-banner">
        <div>
          <p className="eyebrow">Plant collection</p>
          <h2>Fresh greenery for every corner of home</h2>
        </div>
        <button className="cart-button" onClick={onOpenCart}>
          View cart ({totalQuantity})
        </button>
      </section>

      <div className="product-grid">
        {plantsArray.map((plant, index) => (
          <div className="product-card" key={`${plant.name}-${index}`}>
            <img className="product-image" src={plant.image} alt={plant.name} />
            <div className="product-body">
              <h3 className="product-title">{plant.name}</h3>
              <p className="product-description">{plant.description}</p>
              <div className="product-footer">
                <span className="product-cost">{plant.cost}</span>
                <button
                  className="product-button"
                  onClick={() => handleAddToCart(plant)}
                  disabled={Boolean(addedToCart[plant.name])}
                >
                  {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
