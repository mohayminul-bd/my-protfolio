import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

// icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const icons = [
  <FaReact />,
  <FaJs />,
  <FaHtml5 />,
  <FaCss3Alt />,
  <SiMongodb />,
  <FaNodeJs />,
  <SiExpress />,
  <SiTailwindcss />,
];

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-white to-blue-100 py-16 md:py-24">
      {/* ✅ Floating Moving Icons */}
      {icons.map((icon, i) => (
        <div
          key={i}
          className="floating-icon text-blue-700"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 6}s`,
            fontSize: `${30 + Math.random() * 25}px`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {icon}
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative z-20">
        {/* -------- Left Side -------- */}
        <div
          data-aos="fade-right"
          className="flex-1 text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hi, I'm <span className="text-blue-600">Mohayminul Islam</span> 👋
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-600">
            A Passionate{" "}
            <span className="text-blue-500">
              <Typewriter
                words={[
                  "Front End Developer",
                  "React Developer",
                  "MERN Stack Learner",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-gray-500 max-w-md mx-auto md:mx-0">
            I specialize in building modern, user-friendly web applications with
            clean UI and powerful backend integration. Let's create something
            amazing together!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Resume.pdf"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md"
            >
              View Resume/CV
            </a>
            <a
              href="/Resume.pdf"
              download
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all shadow-md"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* -------- Right Side: Image -------- */}
        <div
          data-aos="fade-down"
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-blue-100">
            <img
              src="https://i.ibb.co/XxHNcjJc/20251027-1606-image.png"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              alt="Profile"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
