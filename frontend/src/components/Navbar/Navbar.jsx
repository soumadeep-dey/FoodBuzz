import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("home");

  return (
    <header>
      <img src={assets.logo_banner} alt="" className="logo" />
      <nav>
        <li
          onClick={() => setSelectedMenu("home")}
          className={selectedMenu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setSelectedMenu("menu")}
          className={selectedMenu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setSelectedMenu("mobile-app")}
          className={selectedMenu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </li>
        <li
          onClick={() => setSelectedMenu("contact-us")}
          className={selectedMenu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </li>
      </nav>
      <div className="nav-right">
        <img src={assets.search_icon} alt="search-icon" className="icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket-icon" className="icon" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </header>
  );
};

export default Navbar;
