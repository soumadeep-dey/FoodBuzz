import { assets } from "../../assets/frontend_assets/assets";
import "./FoodItem.css";

import React, { useState } from "react";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <article className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {!itemCount ? (
          <assets.add_icon
            className="add"
            onClick={() => setItemCount((prev) => prev + 1)}
          />
        ) : (
          <div className="food-item-counter">
            <assets.add_icon onClick={() => setItemCount((prev) => prev + 1)} />
            <p>{itemCount}</p>
            <assets.remove_icon
              onClick={() => setItemCount((prev) => prev - 1)}
            />
          </div>
        )}
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
