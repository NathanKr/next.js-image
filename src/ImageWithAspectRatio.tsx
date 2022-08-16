import React, { FC } from "react";
import Image from "next/image";
import styles from "../styles/ImageWithAspectRatio.module.css";

interface IProps {
  aspectRratio: number; // e.g. for 3:2 number is 1.5
  imgSrc: string;
  altValue: string;
}

const ImageWithAspectRatio: FC<IProps> = ({
  aspectRratio,
  imgSrc,
  altValue,
}) => {
  const ratioPercentage = (1/aspectRratio) * 100;
  return (
    <div className={styles.container}>
      <div
        className={styles.img_wrapper}
        style={{
          paddingTop: `${ratioPercentage}%`,
        }}
      >
        <Image layout="fill" objectFit="cover" src={imgSrc} alt={altValue} />
      </div>
    </div>
  );
};

export default ImageWithAspectRatio;
