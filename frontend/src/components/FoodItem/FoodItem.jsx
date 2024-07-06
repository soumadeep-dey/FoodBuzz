import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./FoodItem.css";
import React, { useContext } from "react";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <article className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt="add-icon-white"
            className="add"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="remove-icon-red"
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="add-icon-green"
              onClick={() => addToCart(id)}
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
