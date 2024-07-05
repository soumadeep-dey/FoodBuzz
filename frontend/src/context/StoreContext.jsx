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

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
