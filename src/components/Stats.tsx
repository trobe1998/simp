/** @format */
import style from "../assets/css/dash.module.css";

import React from "react";

interface stats {
  data: {
    stat_name: string;
    no: string;
    cod: string;
  };
}

const Stats = ({ data }: stats) => {
  return (
    <div
      className={style.stats_card}
      style={{backgroundColor: `rgb(0, 93, 187)`}}
    >
      <p>{data.stat_name}</p>
      {/* <p>{data.color}</p> */}
      <span>
        <h3>${data.no}</h3>
        <p>{data.cod}</p>
      </span>
    </div>
  );
};

export default Stats;
