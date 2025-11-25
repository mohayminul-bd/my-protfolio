import React from "react";
import {
  FaUserLock,
  FaListAlt,
  FaClipboardCheck,
  FaLaptopCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

const Roommate = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 my-10">
      <p className="text-gray-700 text-center mb-6 leading-relaxed">
        <strong>Project Name:</strong>{" "}
        <span className="text-blue-600">Roommate Finder Website</span> — A
        platform where users can post, browse, and connect with potential
        roommates based on preferences, location, and budget.
      </p>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 🧭 Routing */}
      <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2 mb-4">
        <FaListAlt className="text-purple-500" />
        Routing & Layout
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
        <li>
          Navbar links: Home, Add Roommate, Browse Listings, My Listings,
          Login/Signup.
        </li>
        <li>Private routes: Add Roommate, My Listings, Update, Details.</li>
        <li>
          Conditional buttons: show login/signup if not logged in; show photo +
          logout if logged in.
        </li>
        <li>Persistent navbar and footer on all pages except 404.</li>
        <li>Footer must include contact info, T&C, and social links.</li>
      </ul>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 🏠 Home Page */}
      <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2 mb-4">
        <FaClipboardCheck className="text-green-500" />
        Home Page Requirements
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
        <li>
          <strong>Banner/Slider:</strong> At least 3 meaningful slides.
        </li>
        <li>
          <strong>Featured Posts:</strong> Show 6 “Available” roommate posts
          using MongoDB <code>limit</code>.
        </li>
        <li>
          <strong>Extra Sections:</strong> Add 2 unique & relevant sections.
        </li>
        <li>Include a “See More” button → goes to Details page.</li>
      </ul>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 🔐 Authentication */}
      <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2 mb-4">
        <FaUserLock className="text-red-500" />
        Authentication
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
        <li>
          Use <strong>Firebase Email/Password</strong> and{" "}
          <strong>Google Login</strong>.
        </li>
        <li>Login Page: Email, Password, Google button, Link to Register.</li>
        <li>Register Page: Name, Email, photoURL, password, link to Login.</li>
        <li>
          Password rules:
          <ul className="list-disc ml-6 mt-1">
            <li>At least 6 characters</li>
            <li>1 uppercase & 1 lowercase letter</li>
          </ul>
        </li>
        <li>
          Show all errors/success via <strong>toast</strong> or{" "}
          <strong>SweetAlert</strong>.
        </li>
      </ul>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 🧾 CRUD Operations */}
      <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2 mb-4">
        <FaLaptopCode className="text-sky-500" />
        CRUD Operations
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
        <li>
          <strong>Add Roommate:</strong> Form with Title, Location, Rent, Room
          Type, Lifestyle, Description, Contact, Availability, User Email
          (readonly), User Name (readonly).
        </li>
        <li>
          <strong>Browse Listings:</strong> Show all posts in a table with “See
          More” → Details page.
        </li>
        <li>
          <strong>My Listings:</strong> Show only user’s posts with Update &
          Delete buttons.
        </li>
        <li>
          <strong>Update:</strong> Private route; form with editable fields
          except user info.
        </li>
        <li>
          <strong>Delete:</strong> Confirm before deletion.
        </li>
      </ul>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 🌟 Challenges */}
      <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2 mb-4">
        <FaStar className="text-yellow-500" />
        Challenges & Optional Features
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
        <li>
          Like button on Details page increases count (“X people interested”).
        </li>
        <li>User can like multiple times but not their own post.</li>
        <li>Contact number only shows after first like.</li>
        <li>Dark/Light theme toggle for Home page.</li>
        <li>
          Use 2+ from:
          <ul className="list-disc ml-6 mt-1">
            <li>Lottie React</li>
            <li>React Simple Typewriter</li>
            <li>React Awesome Reveal</li>
            <li>React Tooltip</li>
          </ul>
        </li>
      </ul>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 🧠 Technologies */}
      <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2 mb-4">
        <FaReact className="text-sky-500" />
        Technologies Used
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
        <li>
          Frontend: React, React Router, TanStack Query, Tailwind, DaisyUI
        </li>
        <li>Backend: Node.js, Express.js, MongoDB</li>
        <li>Auth: Firebase (Email + Google)</li>
        <li>UI Alerts: Toast / SweetAlert</li>
      </ul>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* ✅ Summary */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-green-600 mb-3 flex justify-center items-center gap-2">
          <FaCheckCircle className="text-green-500" />
          Summary
        </h3>
        <p className="text-gray-700 text-lg">
          <strong>Roommate Finder</strong> is a full-stack MERN application
          where users can post, search, and manage roommate listings. It
          includes authentication, CRUD operations, protected routes, likes,
          theme toggle, and smooth user experience with modern libraries.
        </p>
      </div>
    </div>
  );
};

export default Roommate;
