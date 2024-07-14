import { NavLink } from "react-router-dom";
import { assets } from "../../assets/admin_assets/assets";
import "./Sidebar.css";
import React from "react";

const Sidebar = () => {
  return (
    <aside>
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={assets.add_icon} alt="add icon" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={assets.order_icon} alt="order icon" />
          <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <img src={assets.order_icon} alt="order icon" />
          <p>Orders</p>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
