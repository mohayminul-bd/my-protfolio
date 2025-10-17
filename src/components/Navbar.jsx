import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
            : "hover:text-blue-400 transition"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/project"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1"
            : "hover:text-blue-400 transition"
        }
      >
        My project
      </NavLink>
      <NavLink
        to="/about"
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
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyBrand
        </Link>

        {/* Desktop Menu (centered) */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 text-lg">
          {navLinks}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col space-y-4 p-4 text-lg">{navLinks}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
