import React from "react";
import Layout from "../Components/Layout";
import HomeImg from "../images/home.png";

const Home = () => {
  return (
    <>
      <Layout
        name="Grow your business with"
        imgsrc={HomeImg}
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
};

export default Home;
