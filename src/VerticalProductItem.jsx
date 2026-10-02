import Recat from "react"

function VerticalProductItem({id,
  productName,
  productImage,
  productPrice,
  description,
  saleTag,
  group,
  qte,
  addProductToCart,
  onMinusFromCart,
  onRemoveFromCart}) {
  return (
    <>
      <div className="cart-prod-item">
        <img src={productImage} width="200" height="200" />
        <div className="cart-prod-item-right">
          <h3> {productName} </h3>
          <p>€{productPrice}</p>
          <div className="cart-prod-item-pls-minus">
            <button className="cart-prod-item-pls-btn cart-btn" onClick={()=> addProductToCart(id)}>
              +
            </button>
            <p className="cart-prod-item-item-count">
            {qte}
            </p>
            <button className="cart-prod-item-minus-btn cart-btn" onClick={()=>onMinusFromCart(id)}>
              -
            </button>
          </div>
          <button className="cart-prod-item-del-btn cart-btn" onClick={()=>onRemoveFromCart(id)}>
            delete
          </button>
        </div>
      </div>
    </>
  );
}

export default VerticalProductItem;