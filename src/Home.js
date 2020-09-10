import React from "react";
// import { Link } from "react-router-dom";
import Common from "./Common";
import HomeImg from "./images/home.png";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={HomeImg}
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
};

export default Home;
