import React from "react";
import Carrousel from "./carrousel";

const Featured = () => {
  const corrouselItems = [
    {
      img: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1gAh3S.img?h=350&w=624&m=6&q=60&u=t&o=t&l=f&f=jpg&x=1218&y=555",
      lineOne: "Tennis",
      lineTwo: "Quality Houses",
      lineTitle: "Build",
      linkTo: "/",
    },
    {
      img: "https://www.atptour.com/-/media/images/news/2021/05/10/17/34/sinner-rome-monday.jpg",
      lineOne: "Tennis2",
      lineTwo: "Quality Houses2",
      lineTitle: "Build",
      linkTo: "/",
    },
  ];

  return (
    <div classname="featured_container">
      <Carrousel items={corrouselItems} />
    </div>
  );
};

export default Featured;
