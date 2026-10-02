import React from "react"
import VerticalProductItem from "./VerticalProductItem"

function VerticalProductList({cart, productData, addProductToCart, onMinusFromCart, onRemoveFromCart}) {
  return(
    <>
    <div className="cart-product-list">
    {cart.map(item => {
      let productId = Object.keys(item)[0]
      let qte = Object.values(item)[0]
      return productData.filter(
        prodItem => prodItem.id == productId
      ).map(
         prodItem => {
          return <VerticalProductItem key={prodItem.id} {...prodItem} qte={qte} addProductToCart={addProductToCart} onMinusFromCart={onMinusFromCart} onRemoveFromCart={onRemoveFromCart}/>
         }
      )
    })}
    </div>
    </>
  );
}

export default VerticalProductList