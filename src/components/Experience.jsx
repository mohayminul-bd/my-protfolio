import React from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Aspiring Web Developer",
      company: "Self-Learning / Portfolio Projects",
      year: "2025 - Present",
      details:
        "Currently starting my journey as a web developer. Although I haven't done formal internships yet, I am confident and eager to work on real-world projects, continuously learning and improving my skills.",
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-purple-100 via-blue-50 to-purple-200 py-20"
      id="experience"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            <Briefcase className="inline-block mr-2 text-blue-600" size={36} />
            My <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Starting my journey as a web developer, ready to contribute and
            learn.
          </p>
        </div>

        {/* Experience Card */}
        <div className="grid gap-8 md:grid-cols-1">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-purple-200 shadow-md rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-1">
                {exp.role}
              </h3>
              <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-3">{exp.year}</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {exp.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
