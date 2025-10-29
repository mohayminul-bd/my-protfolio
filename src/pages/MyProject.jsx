import React, { useState } from "react";
import { NavLink } from "react-router";

const MyProject = () => {
  const [expanded, setExpanded] = useState({
    forum: false,
    education: false,
    roommate: false,
    jobtrack: false,
  });

  const toggleDescription = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="py-16 px-4 md:px-16" id="projects">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          💻 My <span className="text-purple-600">Projects</span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          A showcase of projects I have worked on. Hover over each card to see
          details.
        </p>
      </div>

      {/* Grid for Projects */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {/* Project 1 - Forum Message Website */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group w-full">
          <div className="overflow-hidden">
            <img
              src="https://i.ibb.co.com/3ykygVhq/one-text-to-many.png"
              alt="Forum Website"
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Forum Message Website
            </h3>
            <p
              className={`text-gray-600 text-sm ${
                expanded.forum ? "" : "line-clamp-2"
              }`}
            >
              This is a MERN Stack Forum where users can post, comment, and
              vote. It has user and admin dashboards, membership badges, and
              search by tags. Admins can manage users, reports, and
              announcements. The site is responsive and secure with JWT
              authentication. Posts are sortable, shareable, and paginated.
            </p>
            <button
              onClick={() => toggleDescription("forum")}
              className="text-xs text-blue-600 font-semibold hover:underline mb-6"
            >
              {expanded.forum ? "See Less" : "See More"}
            </button>

            <div className="flex flex-wrap gap-2 mb-3">
              {[
                "React",
                "Tailwind",
                "Vite",
                "Firebase",
                "Node.js",
                "JWT",
                "MongoDB",
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-2 flex-wrap">
              <a
                href="https://forum-media-ae2b0.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 px-3 py-1 rounded-full text-white text-sm font-medium hover:bg-purple-700 transition"
              >
                Live
              </a>
              <a
                href="https://github.com/mohayminul-bd/-forum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 px-3 py-1 rounded-full text-white text-xs font-medium hover:bg-gray-900 transition"
              >
                GitHub Client
              </a>
              <a
                href="https://github.com/mohayminul-bd/-forum-server"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 px-3 py-1 rounded-full text-white text-xs font-medium hover:bg-gray-900 transition"
              >
                GitHub Server
              </a>
            </div>

            <NavLink to="/form">
              <button className="bg-purple-600 px-3 py-1 rounded-full text-white text-sm font-medium hover:bg-purple-700 transition mt-3">
                View Details
              </button>
            </NavLink>
          </div>
        </div>

        {/* Project 2 - Courses Management */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group w-full">
          <div className="overflow-hidden">
            <img
              src="https://i.ibb.co.com/xKL9DcHj/How-Higher-Education-Is-Becoming-Increasingly-Irrelevant.png"
              alt="Course Management"
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Courses Management / Education
            </h3>
            <p
              className={`text-gray-600 text-sm ${
                expanded.education ? "" : "line-clamp-2"
              }`}
            >
              Build a MERN Course Management System where users can browse,
              enroll, and manage courses with JWT authentication. Admins manage
              users, courses, and announcements, and the site is responsive,
              secure, and interactive.
            </p>
            <button
              onClick={() => toggleDescription("education")}
              className="text-xs text-blue-600 font-semibold hover:underline mb-6"
            >
              {expanded.education ? "See Less" : "See More"}
            </button>

            <div className="flex flex-wrap gap-2 mb-3">
              {[
                "React",
                "Tailwind",
                "Vite",
                "Firebase",
                "Node.js",
                "JWT",
                "MongoDB",
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-2 flex-wrap">
              <a
                href="https://education-clientside.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 px-3 py-1 rounded-full text-white text-sm font-medium hover:bg-purple-700 transition"
              >
                Live
              </a>
              <a
                href="https://github.com/mohayminul-bd/education-clint"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 px-3 py-1 rounded-full text-white text-xs font-medium hover:bg-gray-900 transition"
              >
                GitHub Client
              </a>
              <a
                href="https://github.com/mohayminul-bd/education-server"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 px-3 py-1 rounded-full text-white text-xs font-medium hover:bg-gray-900 transition"
              >
                GitHub Server
              </a>
            </div>

            <NavLink to="/course">
              <button className="bg-purple-600 px-3 py-1 rounded-full text-white text-sm font-medium hover:bg-purple-700 transition mt-3">
                View Details
              </button>
            </NavLink>
          </div>
        </div>

        {/* Project 3 - Roommate Finder */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group w-full">
          <div className="overflow-hidden">
            <img
              src="https://i.ibb.co/LXNg63Dk/home.jpg"
              alt="Roommate Finder"
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Roommate Finder
            </h3>
            <p
              className={`text-gray-600 text-sm ${
                expanded.roommate ? "" : "line-clamp-2"
              }`}
            >
              This project is a Roommate Finder Website where users can post,
              browse, and like roommate listings. Logged-in users can add,
              update, or delete their own posts, and like others’ posts to
              reveal contact info. It includes Firebase login, MongoDB CRUD,
              private routes, responsive design, and dark/light theme with
              animation effects.
            </p>
            <button
              onClick={() => toggleDescription("roommate")}
              className="text-xs text-blue-600 font-semibold hover:underline mb-6"
            >
              {expanded.roommate ? "See Less" : "See More"}
            </button>

            <div className="flex flex-wrap gap-2 mb-3">
              {[
                "React",
                "Tailwind",
                "Vite",
                "Firebase",
                "Node.js",
                "MongoDB",
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-2 flex-wrap">
              <a
                href="https://roommate-finder-c0863.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 px-3 py-1 rounded-full text-white text-sm font-medium hover:bg-purple-700 transition"
              >
                Live
              </a>
              <a
                href="https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-mohayminul-bd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 px-3 py-1 rounded-full text-white text-xs font-medium hover:bg-gray-900 transition"
              >
                GitHub Client
              </a>
              <a
                href="https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-mohayminul-bd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 px-3 py-1 rounded-full text-white text-xs font-medium hover:bg-gray-900 transition"
              >
                GitHub Server
              </a>
            </div>

            <NavLink to="/roommate">
              <button className="bg-purple-600 px-3 py-1 rounded-full text-white text-sm font-medium hover:bg-purple-700 transition mt-3">
                View Details
              </button>
            </NavLink>
          </div>
        </div>

        {/* Project 4 - Job Track */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden group w-full">
          <div className="overflow-hidden">
            <img
              src="https://i.ibb.co/7NBp2ch3/images-8.jpg"
              alt="Job Track"
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Job Track Website / Front End
            </h3>
            <p
              className={`text-gray-600 text-sm ${
                expanded.jobtrack ? "" : "line-clamp-2"
              }`}
            >
              This project is a JobTrack Website where users can explore company
              job listings, view details, and apply through company sites. It
              includes Firebase login, registration, Google sign-in, and forget
              password features. Company Details and My Profile are private
              routes, and users can update their profile info.
            </p>
            <button
              onClick={() => toggleDescription("jobtrack")}
              className="text-xs text-blue-600 font-semibold hover:underline mb-6"
            >
              {expanded.jobtrack ? "See Less" : "See More"}
            </button>

            <div className="flex flex-wrap gap-2 mb-3">
              {["React", "Tailwind", "Vite", "Firebase", "Responsive"].map(
                (tech, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex gap-2 flex-wrap">
              <a
                href="https://react-auth-assignment-9-d2198.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 px-3 py-1 rounded-full text-white text-sm font-medium hover:bg-purple-700 transition"
              >
                Live
              </a>
              <a
                href="https://github.com/programming-hero-web-course1/b11a9-react-authentication-mohayminul-bd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 px-3 py-1 rounded-full text-white text-xs font-medium hover:bg-gray-900 transition"
              >
                GitHub Client
              </a>
            </div>

            <NavLink to="/job">
              <button className="bg-purple-600 px-3 py-1 rounded-full text-white text-sm font-medium hover:bg-purple-700 transition mt-3">
                View Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProject;
