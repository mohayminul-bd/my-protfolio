import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* ---------- Left Section ---------- */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Mohayminul Islam</h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            MERN Stack Developer passionate about creating modern, user-friendly
            web applications with clean UI, smooth performance, and secure
            backend integration.
          </p>
        </div>

        {/* ---------- Middle Section ---------- */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/my-project" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* ---------- Right Section ---------- */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Connect With Me</h3>
          <div className="flex space-x-4 text-lg mb-4">
            <a
              href="https://www.facebook.com/mdmohaymanulislam.sowrov"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-purple-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-purple-600 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/mohayminul-bd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-purple-600 transition"
            >
              <FaGithub />
            </a>
          </div>

          <p className="flex items-center gap-2 text-gray-200 text-sm">
            <FaEnvelope /> mohayminulislam514@gmail.com
          </p>
          <p className="flex items-center gap-2 text-gray-200 text-sm mt-1">
            <FaPhoneAlt /> 01325440591
          </p>
        </div>
      </div>

      {/* ---------- Bottom Text ---------- */}
      <div className="text-center text-gray-300 text-sm mt-10 border-t border-purple-600 pt-6">
        © {new Date().getFullYear()} Mohayminul Islam. All rights reserved..
      </div>
    </footer>
  );
};

export default Footer;
