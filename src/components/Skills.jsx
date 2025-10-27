import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const technicalSkills = [
    { name: "HTML", level: "100%" },
    { name: "CSS / Tailwind", level: "100%" },
    { name: "JavaScript", level: "90%" },
    { name: "React.js", level: "90%" },
    { name: "Node.js / Express.js", level: "70%" },
    { name: "MongoDB", level: "85%" },
    { name: "Firebase", level: "90%" },
  ];

  const softSkills = [
    {
      name: "Problem Solving",
      description: "Ability to analyze problems and find effective solutions.",
    },
    {
      name: "Teamwork",
      description: "Collaborating effectively with others to achieve goals.",
    },
    {
      name: "Time Management",
      description: "Prioritizing tasks and managing time efficiently.",
    },
    {
      name: "Adaptability",
      description: "Quickly adjusting to new situations and technologies.",
    },
    {
      name: "Communication",
      description: "Clear and concise verbal and written communication.",
    },
    {
      name: "Creativity",
      description: "Thinking outside the box to develop innovative solutions.",
    },
  ];

  // Scroll animation using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      // Cleanup safely
      observer.disconnect(); // observer কে completely disconnect করে দাও
    };
  }, []);

  return (
    <section ref={sectionRef} className=" py-20" id="skills">
      <div className="max-w-6xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            💡 My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            A combination of technical skills and soft skills that I bring to
            every project.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1 text-sm sm:text-base">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden relative">
                    <div
                      className={`bg-blue-500 h-3 sm:h-4 rounded-full transition-all duration-1500 ease-out absolute left-0 top-0`}
                      style={{
                        width: inView ? skill.level : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">
              Soft Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  key={index}
                  className="bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-md hover:bg-blue-100 transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
