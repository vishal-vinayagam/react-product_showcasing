import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState([]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <GlobalContext.Provider value={{ theme, toggleTheme, cart, addToCart }}>
      <div className={theme === "dark" ? "dark-mode" : "light-mode"}>{children}</div>
    </GlobalContext.Provider>
  );
};
