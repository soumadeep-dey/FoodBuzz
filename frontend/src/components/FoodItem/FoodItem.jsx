import { assets } from "../../assets/frontend_assets/assets";
import "./FoodItem.css";

import React from "react";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <article className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt={name} />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₹{price}</p>
      </div>
    </article>
  );
};

export default FoodItem;
