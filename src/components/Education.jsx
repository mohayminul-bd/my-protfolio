import React from "react";
import { GraduationCap, Code, BookOpen } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      icon: <GraduationCap size={36} className="text-blue-600" />,
      degree: "Bachelor of Honours (B.B.A) in Bangladesh National University",
      institution: "Bangladesh National University",
      year: "2023 - 2025 present",
      details:
        "Studied Business Administration (BBA) at Bangladesh National University. Participated in various projects related to business and management.",
    },
    {
      icon: <BookOpen size={36} className="text-blue-600" />,
      degree: "Higher Secondary Certificate (HSC) ",
      institution: "Nishindara Fakiruddin School & Collage Bogura",
      year: "2022 - 2023",
      details:
        "Successfully passed Higher Secondary Certificate (HSC) examination. Built a strong foundation in education through good performance.",
    },
    {
      icon: <BookOpen size={36} className="text-blue-600" />,
      degree: "Secondary School Certificate (SSC) ",
      institution: "Punot Heigh School , Punot, Kalai, Joypurhat",
      year: "2019 - 2021",
      details:
        "Successfully passed Secondary School Certificate (SSC) examination. Served as an important stepping stone for my higher education journey.",
    },
    {
      icon: <Code size={36} className="text-blue-600" />,
      degree: "Complete Web Development Level 1",
      institution: "Programming Hero, Bangladesh",
      year: "2024 - learning others Technology & Language",
      details:
        "Successfully completed the full-stack web development course under Programming Hero. Learned HTML, CSS, JavaScript, React, Node.js, MongoDB, Firebase, and Stripe payment integration. Built several real-life projects using MERN stack.",
    },
  ];

  return (
    <section
      className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-20"
      id="education"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            🎓 My <span className="text-blue-600">Educational Journey</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            “My educational information is summarized briefly. Successfully
            passed Secondary School Certificate (SSC) and Higher Secondary
            Certificate (HSC). Earned BBA from Bangladesh National University
            and completed Complete Web Development Level 1 course from
            Programming Hero.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-4 border-blue-400 pl-8 space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative bg-white/70 backdrop-blur-md border border-blue-100 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-5 top-7 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></span>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-xl">{edu.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mb-3">{edu.year}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-16">
          <p className="italic text-gray-600">
            “Education is not the learning of facts, but the training of the
            mind to think.”
          </p>
          <p className="font-semibold text-blue-700 mt-1">– Albert Einstein</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
