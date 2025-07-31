import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "./Navbar.css";

const Navbar = () => {
  const { cart, toggleTheme } = useContext(GlobalContext);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Shop</div>
      <div className="profile" onClick={() => setShowDropdown(!showDropdown)}>
        <img src="https://i.pravatar.cc/40" alt="User" className="avatar" />
        {showDropdown && (
          <div className="dropdown">
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div>Cart Items: {cart.length}</div>
            <div>Settings</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;