import React from "react";

function Header({productCount, onOpenCart}) {
  return (
    <>
      <div className="header-container">
        <div className="header-title-logo header-box-item">
          <img src="src/assets/logo.jpg" width="50" height="50" id="img-logo" />
          <div className="header-title-headline">
            <h2>Paradise Nursery</h2>
            <h6>Where Green Meets Serenity</h6>
          </div>
        </div>

        <div className="header-plants header-box-item">
          <p><b> Plants </b></p>
        </div>

        <div className="header-bag header-box-item" onClick={()=>onOpenCart()}>
          <img src="src/assets/cart.png" width="60" />
          <p className="header-bag-count"> {productCount} </p>
        </div>

      </div>
    </>
  );
}

export default Header;