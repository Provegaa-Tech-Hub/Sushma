
import React,{useState} from "react";
import { House, LayoutGrid, AppWindow, Layers3, FileText, } from "lucide-react";


// Store all sidebar data
const menuItems = [
  {
    id: 1,
    title: "Demo",
    icon: <House size={28} />,
    submenu:[
      "Server Management",
      "Banking",
      "Crypto",
      "Invoicing"
    ],
  },
  {
    id: 2,
    title: "Layout",
    icon: <LayoutGrid size={28} />,
  },
  {
    id: 3,
    title: "App",
    icon: <AppWindow size={28} />,
  },
  {
    id: 4,
    title: "Features",
    icon: <Layers3 size={28} />,
  },
  {
    id: 5,
    title: "Pages",
    icon: <FileText size={28} />,
  },
];
const handleDemoClick = () => {
  alert("Demo clicked!");
};

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="logo-icon">
        <img src="./images/logo-dark.svg" />
      </div>

      {/* Menu Items */}
      <div className="menu-list">

        {menuItems.map((item) => (

          <div className="menu-item" key={item.id}
            onClick={() => {
              if (item.title === "Demo") {
                handleDemoClick();
              }
            }}>

            <div className="menu-icon">
              {item.icon}
            </div>

            <span>{item.title}</span>

          </div>
        ))}

      </div>

      {/* Footer */}
      <div className="sidebar-footer">

        <h2>Geex Modern Dashboard</h2>

        <p>© 2024 All Rights Reserved</p>

        <span>
          Made with ❤️ by ThemeWant
        </span>

      </div>

    </div>
  );
};

export default Sidebar;