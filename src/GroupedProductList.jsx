import React from 'react';
import ProductItem from "./ProductItem"

function GroupedProductList({groupName, products, cart, onAddProductToCart}) {
  return (
    <>
    <div className="grp-prd-list-container">
    <hr className="grp-prd-list-line" />
    <h2 className="grp-prd-list-group-name">{groupName}</h2>
    <hr className="grp-prd-list-line" />
    <div className="grp-prd-list-products">
    {
      products.map(
        productItem => {
          return <ProductItem key={productItem.id} className="grp-prd-list-products-item" {...productItem} addedToCart={(cart.filter(item => item[productItem.id] !== undefined).length) > 0} onAddProductToCart={onAddProductToCart} />
        }
      )
    }
    </div>
    </div>
    </>
  );
}

export default GroupedProductList

