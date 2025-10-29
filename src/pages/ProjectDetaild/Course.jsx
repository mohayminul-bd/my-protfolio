import React from "react";
import {
  FaBook,
  FaKey,
  FaRoute,
  FaUser,
  FaExclamationTriangle,
  FaPuzzlePiece,
  FaTools,
  FaServer,
  FaCheckCircle,
} from "react-icons/fa";

const Course = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 my-10">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6 flex items-center justify-center gap-2">
        <FaBook className="text-blue-600" />
        Course Management System — Project Overview
      </h2>

      {/* 📢 Project Overview */}
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaBook /> Overview
        </h3>
        <p>
          The <strong>Course Management System</strong> is a complete MERN Stack
          web application where users can browse courses, enroll in them, and
          manage their enrolled courses. It includes authentication, protected
          routes, and CRUD functionality with secure data flow.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Full-stack MERN project with JWT authentication and secure CRUD
            operations.
          </li>
          <li>Responsive for all devices (Mobile, Tablet, Desktop).</li>
          <li>
            Uses Firebase Authentication, MongoDB, Express.js, and React Query
            for data management.
          </li>
          <li>Dynamic UI with clean user experience and error handling.</li>
        </ul>
      </div>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 🔑 Key Features */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaKey /> Key Features
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>User Registration / Login (Email + Google Login)</li>
          <li>JWT-based Authentication & Secure Private Routes</li>
          <li>Courses CRUD (Add / Edit / Delete) for logged-in users</li>
          <li>Course Details Page with seat count & Enroll button</li>
          <li>Enrollment stored in a separate collection</li>
          <li>My Enrolled Courses page with remove enrollment option</li>
          <li>Manage Courses page for course owners</li>
          <li>Home page shows Latest 6 and Popular Courses dynamically</li>
          <li>Toast messages, spinners, and route protection</li>
        </ul>
      </div>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 🧭 User Flow */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaRoute /> User Flow
        </h3>
        <ol className="list-decimal list-inside space-y-1 text-gray-700">
          <li>Visit the Home page to browse all available courses.</li>
          <li>
            Register or Login using Email or Google. Password must have 8+
            characters, including uppercase, lowercase, number, and special
            character.
          </li>
          <li>
            Explore courses and click “View Details” for full course info.
          </li>
          <li>
            Enroll if logged in. Each user can enroll only once per course.
          </li>
          <li>
            Seats decrease upon enrollment and increase upon removal of
            enrollment.
          </li>
          <li>Access “My Enrolled Courses” from the Navbar anytime.</li>
          <li>
            Add a new course (only for logged-in users) via the “Add Course”
            page.
          </li>
          <li>Edit or Delete your added courses from “Manage Courses”.</li>
          <li>
            All private routes are JWT protected, and credentials are secured
            via <code>.env.local</code>.
          </li>
        </ol>
      </div>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* ⚠️ Rules */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaExclamationTriangle /> Important Rules
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>One user can enroll in a maximum of 3 courses.</li>
          <li>Seats cannot exceed their defined limit.</li>
          <li>
            Unauthorized users are redirected to the Login page if accessing
            private routes.
          </li>
          <li>
            Deployment must be free of 404, 500, or CORS issues to be valid.
          </li>
        </ul>
      </div>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 🧩 Extra Features */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaPuzzlePiece /> Extra / Challenge Features
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>JWT Auth for both Email/Password and Google login</li>
          <li>Live Seat Counter & Real-time Updates</li>
          <li>Optional: Use Shadcn UI / Mantine for UI enhancement</li>
          <li>Optional: Add Framer Motion for page animations</li>
        </ul>
      </div>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 🧰 Developer Checklist */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaTools /> Developer / Tester Checklist
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Client: Minimum 15 meaningful commits</li>
          <li>Server: Minimum 8 meaningful commits</li>
          <li>README includes project purpose, live link, and key features</li>
          <li>No deployment issues (CORS / 404 / 500)</li>
          <li>Firebase domain authorized and credentials hidden</li>
        </ul>
      </div>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 🛠️ Technologies */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaServer /> Technologies & Packages Used
        </h3>

        <div>
          <h4 className="font-semibold text-lg">Frontend (React.js)</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>React Router → Routing & Private Route</li>
            <li>TanStack Query → Data Fetching (GET)</li>
            <li>React Hook Form → Login/Register forms</li>
            <li>Firebase Auth → Authentication (Email + Google)</li>
            <li>Axios → API Requests</li>
            <li>Toast → Notifications</li>
            <li>Tailwind + DaisyUI → UI & Responsive Design</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg">
            Backend (Node.js + Express.js)
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>MongoDB → Database</li>
            <li>JWT → Authentication & Authorization</li>
            <li>Middleware → verifyToken, verifyUser</li>
            <li>Secure API with proper error handling</li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 👉 Summary */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-green-600 mb-3 flex justify-center items-center gap-2">
          <FaCheckCircle /> Summary
        </h3>
        <p className="text-gray-700 text-lg">
          This <strong>Course Management System</strong> is designed to help
          users browse and enroll in courses with a secure, modern, and
          user-friendly experience. It provides an end-to-end MERN stack
          solution combining clean UI, JWT security, and robust backend logic.
        </p>
      </div>
    </div>
  );
};

export default Course;
