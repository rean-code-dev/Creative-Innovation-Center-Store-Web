import React from "react";
import { Menu, Dropdown, Input, Badge } from "antd";
import { SearchOutlined, ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import LogoImage from "../../components/assets/images/logo_page.png";

// Define custom colors for the design
const web_colors = {
  primary: "#ef4444", // Updated to the requested red color for links
  hover: "#b91c1c", // A darker red for hover effects
  text_red: "#ef4444", // Red for the logo text (already matches)
  background: "#F5F7FA", // Light background for a modern feel
};

const menuItems = [
  { name: "Development", subMenu: true },
  { name: "Electronic", subMenu: true },
  { name: "Mechanical", subMenu: true },
  { name: "Robotic", subMenu: false },
  { name: "Tool", subMenu: false },
  { name: "Electronic Kits", subMenu: false },
];

// Dropdown menu for categories with no underline
const getDropdownMenu = () => (
  <Menu style={{ borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
    {Array(5)
      .fill("Test Category")
      .map((item, idx) => (
        <Menu.Item
          key={idx}
          style={{
            padding: "8px 16px",
            fontSize: "14px",
            color: web_colors.primary,
            transition: "all 0.3s ease",
          }}
          onClick={(e) => e.preventDefault()} // Prevents default link behavior
        >
          <a
            href="#"
            style={{
              textDecoration: "none", // Remove underline
              color: web_colors.primary,
            }}
            onMouseEnter={(e) => (e.target.style.color = web_colors.hover)}
            onMouseLeave={(e) => (e.target.style.color = web_colors.primary)}
          >
            {item}
          </a>
        </Menu.Item>
      ))}
  </Menu>
);

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center bg-white px-10 h-20 shadow-lg"
      style={{ backgroundColor: web_colors.background, borderBottom: "1px solid #E0E0E0" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src={LogoImage} alt="Logo" className="h-12" />
        <span
          className="text-xl font-bold"
          style={{ color: web_colors.text_red, fontSize: "24px", letterSpacing: "1px" }}
        >
          Creative Innovation Center
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        {menuItems.map((menu, index) =>
          menu.subMenu ? (
            <Dropdown
              overlay={getDropdownMenu()}
              key={index}
              trigger={["click"]}
              overlayStyle={{ minWidth: "150px" }}
            >
              <a
                className="cursor-pointer font-medium"
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
          ) : (
            <a
              key={index}
              className="cursor-pointer font-medium"
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
          )
        )}
      </div>

      {/* Search Bar & Icons */}
      <div className="flex items-center space-x-4">
        <Input
          placeholder="Search product here..."
          prefix={<SearchOutlined />}
          className="w-64 rounded-full"
          style={{
            borderColor: web_colors.primary,
            transition: "border-color 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.borderColor = web_colors.hover)}
          onBlur={(e) => (e.target.style.borderColor = web_colors.primary)}
        />
        <Badge count={0} showZero>
          <HeartOutlined
            className="text-xl cursor-pointer"
            style={{ color: web_colors.primary }}
            onMouseEnter={(e) => (e.target.style.color = web_colors.hover)}
            onMouseLeave={(e) => (e.target.style.color = web_colors.primary)}
          />
        </Badge>
        <Badge count={0} showZero>
          <ShoppingCartOutlined
            className="text-xl cursor-pointer"
            style={{ color: web_colors.primary }}
            onMouseEnter={(e) => (e.target.style.color = web_colors.hover)}
            onMouseLeave={(e) => (e.target.style.color = web_colors.primary)}
          />
        </Badge>
      </div>
    </nav>
  );
};

export default Navbar;