import React from "react";
import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./Resources/css/app.css";

import Home from "./components/Home";
import About from "./components/About";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <div class="spacer"></div>
          <About />
        </Route>
        <Route exact path="/bio">
          <Bio />
        </Route>
        <Route exact path="/contact">
          <div class="spacer"></div>
          <Contact />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
