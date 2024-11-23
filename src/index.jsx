import React from "react";
import SidebarIcon from "./components/SidebarIcon";
import "./styles/index.css";
import { FaPowerOff } from "react-icons/fa";

const Sidebar = ({
  sidebarItems = [],
  hasLogout = true,
  onLogout = () => console.log("Logged out"),
  backgroundColor = "#ffffff",
  font = "Arial, sans-serif",
  isExpanded = false, // New prop
}) => {
  return (
    <div
      className={`sidebar ${isExpanded ? "expanded" : ""}`}
      style={{ backgroundColor, fontFamily: font }}
    >
      <div>
        {sidebarItems.map((item, index) => (
          <SidebarIcon
            key={index}
            onClick={item.onClick}
            icon={item.icon}
            text={item.text}
            isExpanded={isExpanded} // Pass the prop to SidebarIcon
          />
        ))}
      </div>
      {hasLogout && (
        <div className="sidebar-logout">
          <SidebarIcon
            icon={<FaPowerOff />}
            text="Logout"
            onClick={onLogout}
            isExpanded={isExpanded} // Pass the prop to SidebarIcon
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
