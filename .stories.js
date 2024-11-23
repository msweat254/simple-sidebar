import React from "react";
import Sidebar from "./Sidebar";
import { FaCog } from "react-icons/fa";

export default {
  title: "Sidebar",
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  sidebarItems: [
    {
      text: "Dashboard",
      icon: <FaCog />,
      onClick: () => alert("Dashboard clicked"),
    },
    {
      text: "Profile",
      icon: <FaCog />,
      onClick: () => alert("Profile clicked"),
    },
  ],
  hasLogout: true,
  onLogout: () => alert("Logged out"),
  backgroundColor: "#333",
  font: "Arial, sans-serif",
};
