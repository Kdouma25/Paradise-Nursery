import React from "react"


function MainApp({onGetStarted}) {
  return (
    <>
    <div className="onbording-back-drop"></div>
    <div className="onbording-main-container">
    < div className="onbording-flex-box-welcome"> 
    <h1> Welcome To Paradise Nursery </h1>
    <hr className="onbording-hr"/>
    <h6>Where Green Meets Serenity</h6>
    <button className="onbording-btn-start" onClick={onGetStarted}>
    Get Started
    </button>
    </div>
    <div className="onbording-flex-box-text">
    Welcome to Paradise Nursery, where green meets serenity!
At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.
Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your home or office.
ner, healthier world. Visit Paradise Nursery today
and experience the beauty of nature right at your doorstep.
    </div>
    </div>
    </>
  );
}
export default MainApp
