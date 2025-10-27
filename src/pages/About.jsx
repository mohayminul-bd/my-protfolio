import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaLock,
  FaFire,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b  from-white to-purple-50 min-h-screen py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/GQR0khMk/Gemini-Generated-Image-97sd2v97sd2v97sd.png"
            alt="Profile"
            className="rounded-2xl shadow-lg w-72 h-72 object-cover border-4 border-purple-200 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            👋 About <span className="text-purple-600">Me</span>
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-purple-700">
              Mohayminul Islam
            </span>
            , a MERN Stack Developer passionate about building clean, fast, and
            dynamic web apps. I love turning ideas into powerful, user-friendly
            solutions.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I have expertise in React, Node.js, Express, MongoDB, and Firebase
            with secure JWT authentication and responsive design principles.
          </p>

          {/* Skills with icons */}
          <div className="flex flex-wrap gap-4 text-purple-700 text-2xl">
            <FaReact title="React" />
            <FaNodeJs title="Node.js" />
            <FaDatabase title="MongoDB" />
            <FaCss3Alt title="Tailwind CSS" />
            <FaFire title="Firebase" />
            <FaLock title="JWT Authentication" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
