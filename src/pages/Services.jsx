import React from "react";
import {
  FaCode,
  FaServer,
  FaLaptopCode,
  FaCloudUploadAlt,
  FaPalette,
  FaFigma,
  FaLock,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaPalette className="text-4xl text-purple-600 mb-3" />,
      title: "Landing Page Design",
      desc: "I create beautiful, responsive landing pages with clean UI/UX to increase engagement and conversion.",
    },
    {
      icon: <FaLock className="text-4xl text-purple-600 mb-3" />,
      title: "Firebase Authentication",
      desc: "Implementing secure login, registration, Google sign-in, and password reset systems using Firebase Auth.",
    },
    {
      icon: <FaFigma className="text-4xl text-purple-600 mb-3" />,
      title: "Figma to Code",
      desc: "Turning your Figma designs into fully functional, pixel-perfect React web applications with responsive layouts.",
    },
    {
      icon: <FaCode className="text-4xl text-purple-600 mb-3" />,
      title: "Frontend Development",
      desc: "Building fast, modern, and interactive user interfaces with React, Tailwind CSS, and reusable components.",
    },
    {
      icon: <FaServer className="text-4xl text-purple-600 mb-3" />,
      title: "Backend Development",
      desc: "Creating secure RESTful APIs with Node.js and Express, integrated with MongoDB databases for scalability.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-purple-600 mb-3" />,
      title: "Full Stack Development",
      desc: "Developing complete MERN stack applications with authentication, admin dashboards, and CRUD operations.",
    },
    {
      icon: <FaCloudUploadAlt className="text-4xl text-purple-600 mb-3" />,
      title: "Deployment & Hosting",
      desc: "Deploying your applications to Netlify, Vercel, or Firebase with continuous integration and domain setup.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-br from-purple-50 to-white py-16 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          💼 My <span className="text-purple-600">Services</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          I offer professional web development services — from design to
          deployment — ensuring high performance and great user experience.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition duration-300 border border-gray-100"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
