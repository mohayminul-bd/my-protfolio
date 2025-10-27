import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  return (
    <section className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* -------- Left Side: Text -------- */}
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="flex-1 text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Hi, I'm <span className="text-blue-600">Mohayminul Islam</span> 👋
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-600">
            A Passionate{" "}
            <span className="text-blue-500">Front End Developer</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto md:mx-0">
            I specialize in building modern, user-friendly web applications with
            clean UI and powerful backend integration. Let's create something
            amazing together!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/public/my-resume.pdf"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md inline-block text-center"
            >
              View Resume/CV
            </a>
            <a
              href="/public/my-resume.pdf" // public ফোল্ডারে রাখা PDF এর পাথ
              download="/public/my-resume.pdf" // ডাউনলোড হওয়ার সময় ফাইলের নাম
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all shadow-md inline-block text-center"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* -------- Right Side: Image -------- */}
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-blue-100">
            <img
              src="https://i.ibb.co/XxHNcjJc/20251027-1606-image.png"
              alt="Profile"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
