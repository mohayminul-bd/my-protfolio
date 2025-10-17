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
      <Education></Education>
      <Experience></Experience>
      <Skills></Skills>
      <ProjectDetails></ProjectDetails>
      <Footer></Footer>
    </div>
  );
};

export default Home;
