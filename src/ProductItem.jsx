import React from 'react';

function ProductItem({
  id,
  productName,
  productImage,
  productPrice,
  description,
  saleTag,
  group,
  addedToCart,
  onAddProductToCart
}) {
  return (
    <>
      <div className='prod-item-container'>
        {saleTag && <div className='prod-item-sale-tag'>sale</div>}
        <h3 className='prod-item-title'>{productName}</h3>
        <img
          src={productImage}
          width='150'
          height='200'
          className='prod-item-img'
        />
        <h4 className='prod-item-price'>{productPrice}$</h4>
        <p className='prod-item-desc'>{description}</p>
        <button className={!addedToCart ? 'prod-item-add-cart-active' : "prod-item-add-cart-disabled"} onClick={() => onAddProductToCart(id)} disabled={addedToCart}>Add to cart</button>
      </div>
    </>
  );
}

export default ProductItem;
