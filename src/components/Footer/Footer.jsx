import React from "react";

const Footer = () => {
  return (
    <footer 
      className="text-white py-6 border-t border-red-900"
      // Keeping your original background style
      style={{ background: 'linear-gradient(to bottom, #662222, #4a1818)' }} 
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-red-200/80 text-sm">
          © 2025 Naveen Bharti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;