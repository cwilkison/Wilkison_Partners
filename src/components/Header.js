import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";
import logo from "../Resources/images/logo.JPG";

import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#98c5e9",
          boxShadow: "none",
          padding: "10px 0",
          borderBottom: "2px solid #00285e",
        }}
      >
        <ToolBar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">
              <img
                src={logo}
                alt="logo"
                link={true}
                linkTo="/"
                width="230px"
                height="70px"
              />
            </div>
          </div>
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/about">
            <Button color="inherit">About</Button>
          </Link>
          <Link to="/bio">
            <Button color="inherit">Bio</Button>
          </Link>
          <Link to="/contact">
            <Button color="inherit">Contact</Button>
          </Link>
        </ToolBar>
      </AppBar>
    );
  }
}

export default Header;
