import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for shrinking effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      // Changed bg to #FFF2EF (Light)
      // Added border-gray-200 for subtle definition on light bg
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-8 lg:px-10 shadow-sm border-b border-gray-200 
      bg-[#FFF2EF] ${isScrolled ? "py-3 shadow-md" : "py-5"}`}
    >
      <div className="flex justify-between items-center w-full">
        
        {/* --- LEFT CORNER: NAME ONLY --- */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap">
            {/* Switched back to a slightly darker gradient so it is visible on the light background */}
            <span className="bg-gradient-to-r from-[#9E2A5A] via-[#B54278] to-[#D65FEC] bg-clip-text text-transparent">
              &lt;Naveen Bharti;
            </span>
          </div>
        </div>

        {/* --- RIGHT SIDE: DESKTOP MENU --- */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          {menuItems.map((item) => (
            <li
              key={item.id}
              // Changed text colors to Dark Gray & Deep Pink (from previous theme) for contrast
              className={`cursor-pointer font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? "text-[#9E2A5A] font-bold" 
                  : "text-gray-600 hover:text-[#9E2A5A]"
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* --- MOBILE MENU TRIGGER --- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            // Changed button to dark text/border for visibility
            className="text-sm font-bold tracking-widest text-[#9E2A5A] border border-[#9E2A5A]/30 px-2 py-1 rounded hover:bg-[#9E2A5A] hover:text-white transition-colors"
          >
            {isOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full px-6 md:hidden">
          {/* Updated mobile menu bg to #FFF2EF */}
          <div className="bg-[#FFF2EF] rounded-lg shadow-xl border border-gray-200">
            <ul className="flex flex-col items-center space-y-6 py-8 text-gray-700">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer text-lg font-medium hover:text-[#9E2A5A] transition-colors ${
                    activeSection === item.id ? "text-[#9E2A5A] font-bold underline decoration-2 underline-offset-4" : "text-gray-600"
                  }`}
                >
                  <button onClick={() => handleMenuItemClick(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;