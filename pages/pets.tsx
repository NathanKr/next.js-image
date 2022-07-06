import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/pets.module.css";

enum ImageType {
  regularImg = "regular html img",
  nextjsImgag = "next.js Image component",
}

const WIDTH = 280,
  HEIGHT = 420;

const Pets = () => {
  const [imageType, setImageType] = useState<ImageType>(ImageType.nextjsImgag);

  const array = Array.from(Array(5).keys());

  let elems, elemsHead;
  switch (imageType) {
    case ImageType.nextjsImgag:
      elemsHead = (
        <div>
          open the network tab and scroll vertically slowly
          <ul>
            <li className={styles.good}>
              the required width : {WIDTH}px , height : {HEIGHT}px is not
              ignored
            </li>
            <li className={styles.good}>
              only images on the viewport are downloaded
            </li>
          </ul>
        </div>
      );
      elems = array.map((it, i) => (
        <div key={i}>
          <Image
            key={it}
            alt="pet"
            width={WIDTH}
            height={HEIGHT}
            src={`/images/${it + 1}.jpg`}
          />
          <br />
        </div>
      ));
      break;

    case ImageType.regularImg:
      elemsHead = (
        <div>
          open the network tab and see
          <ul>
            <li className={styles.bad}>
              the required width : {WIDTH}px , height : {HEIGHT}px is ignored
            </li>
            <li className={styles.bad}>
              images not in viewport are donwloaded anyway
            </li>
          </ul>
        </div>
      );
      elems = array.map((it) => (
        <>
          <img
            key={it}
            alt="pet"
            width={WIDTH}
            height={HEIGHT}
            src={`/images/${it + 1}.jpg`}
          />
          <br />
        </>
      ));
      break;

    default:
      throw Error(`unexpected ${imageType}`);
  }

  const selectElem = (
    <select
      onChange={(e) => {
        setImageType(e.target.value as ImageType);
      }}
    >
      <option value={ImageType.nextjsImgag}>{ImageType.nextjsImgag}</option>
      <option value={ImageType.regularImg}>{ImageType.regularImg}</option>
    </select>
  );
  return (
    <div>
      {selectElem}
      <h2>{imageType}</h2>
      {elemsHead}
      {elems}
    </div>
  );
};

export default Pets;
