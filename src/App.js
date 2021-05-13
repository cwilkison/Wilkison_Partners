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
import { render } from "@testing-library/react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Cole Wilkison",
      headerLinks: [
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Bio", path: "/bio" },
      ],
      about: {
        title: "About Us",
      },
      contact: {
        title: "Let's Talk",
      },
      bio: {
        title: "Who We Are",
      },
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <div class="spacer"></div>
            <About title={this.state.about.title} />
          </Route>
          <Route exact path="/bio">
            <div class="spacer"></div>
            <Bio title={this.state.bio.title} />
          </Route>
          <Route exact path="/contact">
            <div class="spacer"></div>
            <Contact title={this.state.contact.title} />
          </Route>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
