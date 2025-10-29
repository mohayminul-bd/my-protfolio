import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Root from "./layout/Root.jsx";
import Home from "./components/home/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import MyProject from "./pages/MyProject.jsx";
import From from "./pages/ProjectDetaild/From.jsx";
import Course from "./pages/ProjectDetaild/Course.jsx";
import Roommate from "./pages/ProjectDetaild/Roommate.jsx";
import Job from "./pages/ProjectDetaild/Job.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/my-project",
        element: <MyProject></MyProject>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
      {
        path: "/form",
        element: <From></From>,
      },
      {
        path: "/course",
        element: <Course></Course>,
      },
      {
        path: "/roommate",
        element: <Roommate></Roommate>,
      },
      {
        path: "/job",
        element: <Job></Job>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
