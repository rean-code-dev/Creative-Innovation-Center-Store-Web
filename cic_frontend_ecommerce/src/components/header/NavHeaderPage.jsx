import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa"; // Ensure you have react-icons installed
import { Dropdown, Menu } from "antd"; // Import Dropdown and Menu from Ant Design
import { DownOutlined } from "@ant-design/icons"; // Import a down arrow icon

// Define web colors (customize these as needed)
const web_colors = {
  primary: "#ffffff", // White for text
  hover: "#f0f0f0",   // Light gray for hover
};

const menuItems = [
  { name: "My Account", subMenu: true },
 
];


const getDropdownMenu = () => (
  <Menu
    style={{
      minWidth: "150px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    }}
  >
    <Menu.Item key="1">
      <a
        href="#"
        className="text-gray-700 hover:text-red-500 block transition-colors duration-300"
        style={{ textDecoration: "none" }}
      >
        Login
      </a>
    </Menu.Item>
    <Menu.Item key="2">
      <a
        href="#"
        className="text-gray-700 hover:text-red-500 block transition-colors duration-300"
        style={{ textDecoration: "none" }}
      >
        Register
      </a>
    </Menu.Item>
  </Menu>
);

const Header = () => {
  return (
    <header
      className="w-full px-20 h-16 flex items-center justify-between bg-red-500 text-white shadow-md relative"
      style={{ backgroundColor: "#ef4444" }} // Custom red shade
    >
      {/* Left Section - Contact Info */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 group transition-all duration-300 hover:scale-105 hover:opacity-90">
          <FaPhone className="text-white w-4 h-4 align-middle" /> {/* Consistent icon size and alignment */}
          <a
            href="tel:010640074"
            className="text-sm font-medium cursor-pointer hover:text-gray-200 transition-colors duration-300 text-white no-underline"
          >
            010 640 074 / 010 640 074
          </a>
        </div>
       
        <div className="flex items-center space-x-2 group transition-all duration-300 hover:scale-105 hover:opacity-90">
          <FaEnvelope className="text-white w-4 h-4 align-middle" /> {/* Consistent icon size and alignment */}
          <a
            href="mailto:creativeofstore@gmail.com"
            className="text-sm font-medium cursor-pointer hover:text-gray-200 transition-colors duration-300 text-white no-underline"
          >
            creativeofstore@gmail.com
          </a>
        </div>
      </div>

      {/* Right Section - My Account Dropdown */}
      <div className="flex items-center space-x-6 ">
        {menuItems.map((menu, index) =>
          menu.subMenu ? (
            <Dropdown
              overlay={getDropdownMenu()}
              key={index}
              trigger={["hover"]} // Changed to hover trigger
              overlayStyle={{ minWidth: "150px" }}
            >
              <a
                className="cursor-pointer font-medium flex items-center"
                style={{
                  color: web_colors.primary,
                  transition: "color 0.3s ease",
                  textDecoration: "none", // Remove underline
                }}
                onMouseEnter={(e) => (e.target.style.color = web_colors.hover)}
                onMouseLeave={(e) => (e.target.style.color = web_colors.primary)}
              >
                {menu.name}  
              </a>
            </Dropdown>
          ) : null
        )}
      </div>
    </header>
  );
};

export default Header;