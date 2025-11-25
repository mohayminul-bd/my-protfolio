import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Mobile menu toggle
  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Close menu on link click + scroll to top
  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const navLinks = (
    <>
      <NavLink
        to="/"
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
            : "hover:text-blue-400 transition"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/my-project"
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
            : "hover:text-blue-400 transition"
        }
      >
        My Project
      </NavLink>
      <NavLink
        to="/about"
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
            : "hover:text-blue-400 transition"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/service"
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
            : "hover:text-blue-400 transition"
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/contact"
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
            : "hover:text-blue-400 transition"
        }
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-bold text-blue-600"
        >
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 text-lg">
          {navLinks}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          ref={menuRef}
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-4 p-4 text-lg text-black">
            {navLinks}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
