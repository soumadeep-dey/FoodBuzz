import { assets } from "../../assets/admin_assets/assets";
import "./Sidebar.css";
import React from "react";

const Sidebar = () => {
  return (
    <aside>
      <div className="sidebar-options">
        <div className="sidebar-option">
          <img src={assets.add_icon} alt="add icon" />
          <p>Add Items</p>
        </div>
        <div className="sidebar-option">
          <img src={assets.order_icon} alt="order icon" />
          <p>List Items</p>
        </div>
        <div className="sidebar-option">
          <img src={assets.order_icon} alt="order icon" />
          <p>Orders</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
