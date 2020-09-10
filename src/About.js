import React from "react";
// import { Link } from "react-router-dom";
import Common from "./Common";
import AboutImg from "./images/about.png";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={AboutImg}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};

export default About;
