import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  //  if itemId already exists in prev, it increments its value by 1. If itemId does not exist (prev[itemId] is undefined), it initializes its value to 1.
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCartItems = { ...prev };

      // Check if the item exists in the cart, then decrement it's quantity
      if (updatedCartItems[itemId] && updatedCartItems[itemId] > 0) {
        updatedCartItems[itemId] -= 1;
      }

      // Remove the item from the cart
      if (updatedCartItems[itemId] === 0) {
        delete updatedCartItems[itemId];
      }

      return updatedCartItems;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
