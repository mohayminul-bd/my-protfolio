import React, { useState } from "react";

const ProjectDetails = () => {
  const projects = [
    {
      title: "Forum message Website",
      description:
        "This is a MERN Stack Forum where users can post, comment, and vote. It has user and admin dashboards, membership badges, and search by tags. Admins can manage users, reports, and announcements. The site is responsive and secure with JWT authentication. Posts are sortable, shareable, and paginated.",
      imageUrl: "https://i.ibb.co.com/3ykygVhq/one-text-to-many.png",
      techStack: [
        "React",
        "Tailwind",
        "Vite",
        "firebase",
        "Node.js",
        "payment",
        "JWT",
        "Responsive",
        "MongoDB",
      ],
      liveLink: "https://forum-media-ae2b0.web.app/",
      githubLink: "https://github.com/mohayminul-bd/-forum",
      githubLinkServer: "https://github.com/mohayminul-bd/-forum-server",
    },
    {
      title: "Courses management / education",
      description:
        "Build a MERN Course Management System where users can browse, enroll, and manage courses with JWT authentication. Admins manage users, courses, and announcements, and the site is responsive, secure, and interactive.",
      imageUrl:
        "https://i.ibb.co.com/xKL9DcHj/How-Higher-Education-Is-Becoming-Increasingly-Irrelevant.png",
      techStack: [
        "React",
        "Tailwind",
        "Vite",
        "firebase",
        "Node.js",
        "JWT",
        "Responsive",
        "MongoDB",
      ],
      liveLink: "https://education-clientside.web.app/",
      githubLink: "https://github.com/mohayminul-bd/education-clint",
      githubLinkServer: "https://github.com/mohayminul-bd/education-server",
    },
    {
      title: "roommate finder",
      description:
        "This project is a Roommate Finder Website where users can post, browse, and like roommate listings. Logged-in users can add, update, or delete their own posts, and like others’ posts to reveal contact info. It includes Firebase login, MongoDB CRUD, private routes, responsive design, and dark/light theme with animation effects.",
      imageUrl: "https://i.ibb.co/LXNg63Dk/home.jpg",
      techStack: [
        "React",
        "Tailwind",
        "Vite",
        "firebase",
        "Node.js",
        "Responsive",
        "MongoDB",
        "MongoDB",
      ],
      liveLink: "https://roommate-finder-c0863.web.app/",
      githubLink:
        "https://github.com/Programming-Hero-Web-Course4/b11a10-client-side-mohayminul-bd",
      githubLinkServer:
        "https://github.com/Programming-Hero-Web-Course4/b11a10-server-side-mohayminul-bd",
    },
    {
      title: "Job Track web site / just Front End",
      description:
        "This project is a JobTrack Website where users can explore company job listings, view details, and apply through company sites. It includes Firebase login, registration, Google sign-in, and forget password features. Company Details and My Profile are private routes, and users can update their profile info. The site uses JSON data, animations, dynamic titles, and is fully responsive.",
      imageUrl: "https://i.ibb.co/7NBp2ch3/images-8.jpg",
      techStack: ["React", "Tailwind", "Vite", "firebase", "Responsive"],
      liveLink: "https://react-auth-assignment-9-d2198.web.app/",
      githubLink:
        "https://github.com/programming-hero-web-course1/b11a9-react-authentication-mohayminul-bd",
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleDescription = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className=" py-16 " id="projects">
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
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden group w-full max-w-xs"
          >
            {/* Project Image */}
            <div className="overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {project.title}
              </h3>

              {/* Description with See More */}
              <p
                className={`text-gray-600  text-sm  ${
                  expanded[index] ? "" : "line-clamp-2"
                }`}
              >
                {project.description}
              </p>
              <button
                onClick={() => toggleDescription(index)}
                className=" text-xs text-blue-600 font-semibold hover:underline mb-6"
              >
                {expanded[index] ? "See Less" : "See More"}
              </button>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-2 flex-wrap">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 px-3 py-1 rounded-full text-white text-sm font-medium hover:bg-purple-700 transition"
                  >
                    Live
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 px-3 py-1 rounded-full text-white text-xs font-medium hover:bg-gray-900 transition"
                  >
                    GitHub Client
                  </a>
                )}
                {project.githubLinkServer && (
                  <a
                    href={project.githubLinkServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 px-3 py-1 rounded-full text-white text-xs font-medium hover:bg-gray-900 transition"
                  >
                    GitHub Server
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectDetails;
