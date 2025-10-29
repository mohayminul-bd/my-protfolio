import React from "react";
import {
  FaBullhorn,
  FaTools,
  FaUserShield,
  FaUserAlt,
  FaCheckCircle,
  FaReact,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

const Form = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 my-10">
      {/* 📢 Announcement Section */}
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6 flex items-center justify-center gap-2">
        <FaBullhorn className="text-yellow-500" />
        Announcement
      </h2>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          <strong>1.</strong> You will never be asked for your real email
          account password during registration.
        </p>
        <p>
          <strong>2.</strong> You can set any password of your choice while
          registering — just like you do when creating accounts on Facebook or
          YouTube.
        </p>
        <p>
          <strong>3.</strong> Alternatively, you can directly log in using{" "}
          <span className="font-semibold">Google (Sign in with Google)</span> —
          this is usually the easiest and safest method.
        </p>
        <p>
          <strong>4.</strong> If you face issues logging in via Messenger or
          Facebook, copy the login URL and open it directly in your browser or
          Google search.
        </p>
      </div>

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
            <li>TanStack Query → Data Fetching (GET)</li>
            <li>React Hook Form → Login/Register form</li>
            <li>Firebase Auth → Authentication (email + social login)</li>
            <li>Axios → API requests</li>
            <li>Stripe → Membership Payment</li>
            <li>Recharts → Pie Chart (Admin Stats)</li>
            <li>React Share → Post sharing</li>
            <li>Tailwind + DaisyUI → UI & Responsive Design</li>
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
              MongoDB → Database
            </li>
            <li>JWT → Authentication & Authorization</li>
            <li>
              Aggregation Pipeline → Vote count, comments count, popularity sort
            </li>
            <li>Middleware → verifyToken, verifyAdmin</li>
            <li>CORS properly handled</li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-t-2 border-blue-300" />

      {/* 👨‍💻 Features Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaUserAlt className="text-purple-600" />
          User Features (Summary)
        </h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Register/Login (badge = Bronze)</li>
          <li>Search & browse posts, comment, vote, share</li>
          <li>Add Post (up to 5 posts free, then Membership → Gold badge)</li>
          <li>Dashboard: My Profile, Add Post, My Posts</li>
        </ul>

        <h3 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaUserShield className="text-red-500" />
          Admin Features (Summary)
        </h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Admin Profile (stats + pie chart + add tags)</li>
          <li>Manage Users (make admin, check membership)</li>
          <li>Make Announcement (show on homepage + notification)</li>
          <li>Reported Comments management</li>
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
          This is a <strong>Forum Website</strong> where <strong>Users</strong>{" "}
          can create posts, comment, vote, and purchase membership.{" "}
          <strong>Admins</strong> can manage users, add tags, make
          announcements, and handle reported activities.
        </p>
      </div>
    </div>
  );
};

export default Form;
