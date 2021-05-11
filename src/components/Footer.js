import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">
          Tim Wilkison Partners
        </div>
        <div className="footer_copyright">
          A Wilkison Production - 2021. All rights reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
