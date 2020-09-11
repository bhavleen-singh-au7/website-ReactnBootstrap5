import React from "react";
import Layout from "../Components/Layout";
import AboutImg from "../images/about.png";

const About = () => {
  return (
    <>
      <Layout
        name="Welcome to About Page"
        imgsrc={AboutImg}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};

export default About;
