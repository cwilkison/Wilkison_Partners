import React from "react";
import Hero from "./Hero";
import Content from "./Content";

function Bio(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>BIO</Content>
    </div>
  );
}

export default Bio;
