
import React, { useState } from "react";
import { House, LayoutGrid, AppWindow, Layers3, FileText, } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Sidemenu() {
  return (
    <Link to="/signin">
      Sign In
    </Link>
  );
}

function LoginButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/signin")}>
      Sign In
    </button>
  );
}


// Store all sidebar data
const menuItems = [
  {
    id: 1,
    title: "Demo",
    icon: <House size={28} />,
    submenu: [
      { name: "Server Management", path: "/server-management" },
      { name: "Banking", path: "/banking" },
      { name: "Crypto", path: "/crypto" },
      { name: "Invoicing", path: "/invoicing" },
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
    submenu: [
      {
        name: "Signin",
        path: "/signin",
      },
      {
        name: "Signup",
        path: "/signup",
      },

    ]
  },
];


const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);



  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div className="sidebar">
      <div className="logo-icon">
        <img src="./images/logo-dark.svg" alt="logo" />
      </div>

      <div className="menu-list">
        {menuItems.map((item) => (
          <div key={item.id}>
            <div
              className="menu-item"
              onClick={() => item.submenu && toggleMenu(item.id)}
            >
              <div className="menu-icon">
                {item.icon}
              </div>

              <span>{item.title}</span>
            </div>

            {/* Show submenu on click */}
            {openMenu === item.id && item.submenu && (
              <div className="submenu">
                {item.submenu.map((subItem, index) => (
                  <Link
                    className="submenu-item"
                    key={index} to={subItem.path}
                    style={{
                      textDecoration: "none",
                      color: "#666",
                      display: "block",
                      padding: "8px 0",
                    }}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <h2>Geex Modern Dashboard</h2>
        <p>© 2024 All Rights Reserved</p>
        <span>Made with ❤️ by ThemeWant</span>
      </div>
    </div>
  );
};

export default Sidebar;