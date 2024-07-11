import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [selectedMenu, setSelectedMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <header>
      <Link to="/">
        <img src={assets.logo_banner} alt="" className="logo" />
      </Link>
      <nav>
        <Link
          to="/"
          onClick={() => setSelectedMenu("home")}
          className={selectedMenu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setSelectedMenu("menu")}
          className={selectedMenu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setSelectedMenu("mobile-app")}
          className={selectedMenu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setSelectedMenu("contact-us")}
          className={selectedMenu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </nav>
      <div className="nav-right">
        <img src={assets.search_icon} alt="search-icon" className="icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket-icon" className="icon" />
          </Link>
          <div className={getTotalCartAmount()===0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </header>
  );
};

export default Navbar;
