import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { useCallback } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const deliveryFee = 70;

  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
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

  const getDeliveryFee = () => {
    return getTotalCartAmount() === 0 ? 0 : deliveryFee;
  };

  const getFinalAmount = () => {
    return getTotalCartAmount() + getDeliveryFee();
  };

  // Persist cart across refreshes to simulate real user session behavior

  const clearCart = () => {
    setCartItems({});
    localStorage.removeItem("cartItems");
  };


  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getDeliveryFee,
    getFinalAmount,
    clearCart
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
