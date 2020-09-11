import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer.js"
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
