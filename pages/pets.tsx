import Image from "next/image";
import React from "react";

const Pets = () => {
  const array = Array.from(Array(5).keys());
  const elemsImg = array.map((it) => (
    <>
      <img
        key={it}
        alt="pet"
        width="280"
        height="420"
        src={`/images/${it + 1}.jpg`}
      />
      <br />
    </>
  ));
  const elemsImage = array.map((it) => (
    <>
      <Image
        key={it}
        alt="pet"
        width="280"
        height="420"
        src={`/images/${it + 1}.jpg`}
      />
      <br />
    </>
  ));
  return (
    <div>
      <p>Image of next.js</p>
      {elemsImage}
      <p>regular img</p>
      {elemsImg}
    </div>
  );
};

export default Pets;
