/** @format */

import React from "react";
import Image, { StaticImageData } from "next/image";
type imgType = {
  imgUrl: StaticImageData;
};
const Logo = ({imgUrl}: imgType) => {
  return (
    <div className="position-relative img_wrapper">
      <Image src={imgUrl} alt="company logo" />
    </div>
  );
};

export default Logo;
