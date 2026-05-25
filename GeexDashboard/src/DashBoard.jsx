import React, { useState } from "react";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div className="sidebar">
      <div className="menu-list">
        {menuItems.map((item) => (
          <div key={item.id}>
            <div
              className="menu-item"
              onClick={() => handleMenuClick(item.id)}
            >
              <div className="menu-icon">
                {item.icon}
              </div>

              <span>{item.title}</span>
            </div>

            {/* Submenu */}
            {openMenu === item.id && item.submenu && (
              <div className="submenu">
                {item.submenu.map((subItem, index) => (
                  <div
                    className="submenu-item"
                    key={index}
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;