import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState("home");

  return (
    <header>
      <img src={assets.logo_banner} alt="" className="logo" />
      <nav>
        <Link
          to="/"
          onClick={() => setSelectedMenu("home")}
          className={selectedMenu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a href="#explore-menu"
          onClick={() => setSelectedMenu("menu")}
          className={selectedMenu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <Link to="/"
          onClick={() => setSelectedMenu("orders")}
          className={selectedMenu === "orders" ? "active" : ""}
        >
          Orders
        </Link>
        <a href="#footer"
          onClick={() => setSelectedMenu("contact-us")}
          className={selectedMenu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
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
