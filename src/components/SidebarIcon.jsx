import React, { useState } from "react";

const SidebarIcon = ({ onClick, icon, text }) => {
  return (
    <div className="sidebar-icon" onClick={onClick}>
      <div className="icon-link">
        {icon}
        <span className="sidebar-tooltip">{text}</span>
      </div>
    </div>
  );
};

export default SidebarIcon;
