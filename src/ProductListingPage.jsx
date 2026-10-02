import React from "react";
import GroupedProductList from "./GroupedProductList"

function ProductListingPage({ productData, cart, onAddProductToCart }) {
  return (
    <>
      {
        ([...new Set(productData.map(
          item => {
            return item.group
          }
        ))]).map(
          group => {
            return <GroupedProductList key={group} groupName={group} products={productData.filter(item => item.group === group)} cart={cart} onAddProductToCart={onAddProductToCart} />
          }
        )
      }
    </>
  );
}

export default ProductListingPage;