import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a23] border-t border-purple-900/50 text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Andika Fadilla Siagian. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
