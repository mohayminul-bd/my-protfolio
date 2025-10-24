import React from "react";
import Banner from "../Banner";
import Education from "../Education";
import Experience from "../Experience";
import Skills from "../Skills";
import ProjectDetails from "../ProjectDetails";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="bg-gradient-to-b from-purple-50 via-blue-50 to-purple-100 md:px-20">
        <Education></Education>
        <Experience></Experience>
        <Skills></Skills>
        <ProjectDetails></ProjectDetails>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
