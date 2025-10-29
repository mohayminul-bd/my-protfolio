import React from "react";
import {
  FaBullhorn,
  FaTools,
  FaUserAlt,
  FaUserShield,
  FaCheckCircle,
  FaReact,
  FaServer,
  FaDatabase,
  FaLock,
  FaBuilding,
  FaUserEdit,
} from "react-icons/fa";

const Job = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 my-10">
      {/* 📢 Assignment Announcement */}
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6 flex items-center justify-center gap-2">
        <FaBullhorn className="text-yellow-500" />
        Job Track Website
      </h2>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          🚩 <strong>Update:</strong> Implement <strong>Forget Password</strong>{" "}
          functionality (skip email verification).
        </p>
        <p>
          🧩 <strong>Company Details Page</strong> &{" "}
          <strong>My Profile Page</strong> are Private Routes.
        </p>
        <p>🔑 Add Logout button on Navbar and implement its functionality.</p>
      </div>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 💡 Project Overview */}
      <h3 className="text-2xl font-bold text-blue-600 mb-3 flex items-center gap-2">
        <FaBuilding className="text-orange-500" />
        Project Theme: JobTrack
      </h3>
      <p className="text-gray-700">
        <strong>JobTrack</strong> is a user-friendly job portal designed to help
        job seekers explore a wide range of opportunities from multiple
        companies. Users can browse companies, view available jobs, and check
        requirements before applying.
      </p>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 🛠️ Technologies Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaTools className="text-orange-500" />
          Technologies & Packages Used
        </h3>

        <div>
          <h4 className="font-semibold text-lg flex items-center gap-2">
            <FaReact className="text-sky-500" />
            Frontend (React.js)
          </h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>React Router → Routing & Private Route</li>
            <li>Firebase Auth → Authentication (Email + Google Login)</li>
            <li>React Hook Form → Form Handling</li>
            <li>Axios → Data Fetching</li>
            <li>Tailwind + DaisyUI → Styling & Responsiveness</li>
            <li>Framer Motion → Animation Effects</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg flex items-center gap-2">
            <FaServer className="text-green-500" />
            Backend (Node.js + Express.js)
          </h4>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>
              <FaDatabase className="inline text-blue-500 mr-1" />
              MongoDB → JSON-based job/company data storage
            </li>
            <li>CORS properly configured</li>
            <li>Secure API structure</li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 👨‍💻 Key Features */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaUserAlt className="text-purple-600" />
          User Features
        </h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Register/Login with Email or Google</li>
          <li>Password Validation (Uppercase, Lowercase, ≥6 chars)</li>
          <li>Forget Password → Redirect to Gmail</li>
          <li>View Companies and Job Listings</li>
          <li>Open Job Details Modal and Apply to Company Website</li>
          <li>My Profile Page (Private)</li>
          <li>Update Name & Photo from Update Info Page</li>
        </ul>

        <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaUserShield className="text-red-500" />
          Admin / Extra Features
        </h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Dynamic Title for each page</li>
          <li>404 Page (Custom Design)</li>
          <li>Environment Variables for Firebase keys</li>
          <li>Responsive Design for all devices</li>
        </ul>
      </div>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 🔐 Authentication Features */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaLock className="text-green-500" />
          Authentication System
        </h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Firebase Authentication</li>
          <li>Email + Password Login</li>
          <li>Google Social Login</li>
          <li>Forget Password (Functional)</li>
          <li>Logout Button + Redirect</li>
        </ul>
      </div>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 🧾 My Profile Feature */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaUserEdit className="text-orange-400" />
          My Profile & Update Feature
        </h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Shows Name, Email, and Photo</li>
          <li>Update Info Page → Update Name & Photo URL</li>
          <li>Protected with Private Route</li>
        </ul>
      </div>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* ✅ Summary */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-green-600 mb-3 flex justify-center items-center gap-2">
          <FaCheckCircle className="text-green-500" />
          Summary
        </h3>
        <p className="text-gray-700 text-lg">
          This <strong>JobTrack</strong> website helps users find and explore
          job opportunities across multiple companies. It includes{" "}
          <strong>Private Routes</strong>, <strong>Authentication</strong>,{" "}
          <strong>Dynamic Job Modals</strong>, and{" "}
          <strong>Profile Management</strong> with update features for a
          complete professional job-seeking experience.
        </p>
      </div>
    </div>
  );
};

export default Job;
