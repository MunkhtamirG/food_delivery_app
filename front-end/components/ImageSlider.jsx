import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "react-material-ui-carousel";

export default function ImageSlider() {
  const items = ["/banner1.svg", "/banner2.svg", "/banner3.sv"];
  return (
    <Carousel style={{ width: "100vw" }}>
      {items.map((item, i) => (
        <img key={i} src={item} />
      ))}
    </Carousel>
  );
}
