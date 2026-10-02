import Recat from "react"
import VerticalProductList from "./VerticalProductList"

function Cart({cart,productData, addProductToCart, onBackToShop, onMinusFromCart, onRemoveFromCart}) {
  return (
    <>
    <div className="cart-container">
      <h2 className="cart-total">
      Total cart amount: {
        cart.map(
          item => {
            let key = Object.keys(item)[0]
            let value = Object.values(item)[0]
            return productData.map(
              prodItem => {
                if (prodItem.id == key) {
                    console.log(typeof(parseFloat(parseFloat(prodItem.productPrice) * parseFloat(value))))
                    return parseFloat(parseFloat(prodItem.productPrice) * parseFloat(value))
                }
              }
            ).filter(
              item => item != undefined
            )
          }
        )
        .reduce((a,b) => Number(a)+Number(b), 0)
      }
      </h2>
      <VerticalProductList cart={cart} productData={productData} addProductToCart={addProductToCart} onMinusFromCart={onMinusFromCart} onRemoveFromCart={onRemoveFromCart}/>
      <button className="cart-continue-shop" onClick={onBackToShop}>
        Continue shoping
      </button>
    </div>
    </>
  );
}

export default Cart 