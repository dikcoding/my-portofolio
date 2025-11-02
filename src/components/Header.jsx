import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const menuItems = ["Home", "About", "Experience", "Portofolio"];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (item) => {
    setActiveMenu(item);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between p-6 bg-[#0D0C22] sticky top-0 z-50 border-b border-slate-800">
      <div className="text-2xl font-bold text-white">Portofolio</div>

      <div className="hidden md:flex items-center space-x-8">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setActiveMenu(item)}
            className="relative px-2 py-2 text-lg font-medium transition-colors duration-300"
          >
            <span
              className={
                activeMenu === item
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }
            >
              {item}
            </span>
            {activeMenu === item && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 rounded-full" />
            )}
          </a>
        ))}
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <FiX className="w-6 h-6 text-white" />
          ) : (
            <FiMenu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0D0C22] shadow-lg md:hidden flex flex-col items-center py-4 border-t border-slate-800">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => handleLinkClick(item)}
              className="py-3 text-lg text-gray-300 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
