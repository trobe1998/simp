/** @format */

import Image, {StaticImageData} from "next/image";
import React from "react";
import style from "../assets/css/landing.module.css";
import img from "../assets/img/sb.jpeg";
import cc from "../assets/img/cc.jpg";
import d from "../assets/img/banking-innovation-thumb.jpg";
import d1 from "../assets/img/m.jpg";
import h from "../assets/img/cur.webp";
interface data {
  imgUrl: StaticImageData;
  text: string;
  reversed: boolean | undefined;
}
const Row = ({imgUrl, text, reversed}: data) => {
  return (
    <div
      className={`row mb-5 ${reversed ? `flex-row-reverse` : null} ${
        style.content_wrapper
      }`}
    >
      <div
        className={`col-12 col-lg-7 d-flex flex-column justify-content-center ${style.col}`}
      >
        <h1>{text.split("|")[0]}</h1>
        <p>{text.split("|")[1]}</p>
      </div>
      <div
        className={`col-12 col-lg-5 d-flex justify-content-center align-items-center p-0 ${style.col}`}
      >
        <Image src={imgUrl} alt="debit card" />
      </div>
    </div>
  );
};
const Content = () => {
  let text =
    " heading comes here sepetrated from the rest of the test | Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptate veritatis dolore, ducimus labore quisquam? Incidunt ad totam itaque omnis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptate veritatis dolore, ducimus labore quisquam? Incidunt ad totam itaque omnis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptate veritatis dolore, ducimus labore quisquam? Incidunt ad totam itaque omnis";
  return (
    <>
      <Row imgUrl={img} text={text} reversed={false} />
      <Row imgUrl={cc} text={text} reversed={true} />
      <Row imgUrl={d} text={text} reversed={false} />
      <Row imgUrl={d1} text={text} reversed={true} />
      <Row imgUrl={h} text={text} reversed={false} />
    </>
  );
};

export default Content;
