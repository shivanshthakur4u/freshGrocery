import React from "react";
import img1 from "../../Assets/Images/grocery.png";
import img2 from "../../Assets/Images/apple.png";
import img3 from "../../Assets/Images/capsicum.png";
import img4 from "../../Assets/Images/home.png";
import './HomeCategories.css'
const HomeCategories = () => {
  return (
    <div className="homecategories">
      <div className="container">
        <img src={img2} alt="img1" />
        <div className="content">
          <h1>Vegetables at your doorsteps</h1>
          <p>Shop Vegetables now</p>
        </div>
      </div>

      <div className="container">
        <img src={img1} alt="img1" />
        <div className="content">
          <div className="content">
            <h1>Vegetables at your doorsteps</h1>
            <p>Shop Vegetables now</p>
          </div>
        </div>
      </div>

      <div className="container">
        <img src={img3} alt="img1" />
        <div className="content">
          <div className="content">
            <h1>Vegetables at your doorsteps</h1>
            <p>Shop Vegetables now</p>
          </div>
        </div>
      </div>

      <div className="container">
        <img src={img4} alt="img1" />
        <div className="content">
          <div className="content">
            <h1>Vegetables at your doorsteps</h1>
            <p>Shop Vegetables now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
