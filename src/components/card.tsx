import React from 'react'
import style from "../assets/css/dash.module.css";

import {CardLeft, CardRight} from '../components'
interface showside {
  show: boolean;
}
const Card = ({show}:showside) => {
  return (
    <>
      <div
        className={`row ${style.content} ${!show ? `${style.extend}` : null}`}
              style={{
            margin: '30px 0'
        }}
      >
        <div className={`col-12 col-md-5 ${style.card_left}`}>
        <CardLeft/>
        </div>
        <div className={`col-12 col-md-7 p-5 ${style.card_right}`}>
          <CardRight/>
        </div>
      </div>
    </>
  );
}

export default Card