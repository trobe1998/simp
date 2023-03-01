/** @format */

import React from "react";
import Image from 'next/image'
import card from '../assets/img/card.png'
import style from "../assets/css/little.module.css";
const CardLeft = () => {
    let ar = [1,2,3]
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <span className="d-flex justify-content-between" style={{width:'99%'}}>
        <h4 className="font-weight-bold">Your cards</h4>
        <button className="btn btn-primary">
          Add new <i className="mdi mdi-plus"></i>
        </button>
      </span>

          <div className={`mt-2 mb-5 ${style.card}`}>
              <Image src={card} alt='user card'/>
      </div>
          {ar.map((a,i)=>(
            <div className={`d-flex justify-content-around align-items-center my-1 w-100 ${style.tab}`} key={i}>
                <p>43323</p>
                <p>USD</p>
                <p>***343</p>
                <i className="mdi mdi-arrow-up"></i>
      </div>
    ))}
      
    </div>
  );
};

export default CardLeft;
