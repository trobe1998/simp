import React from 'react'
import Image from 'next/image'
import style from "../assets/css/little.module.css";
import img5 from '../assets/img/mePic.jpg'
import img1 from '../assets/img/face2.jpg'
import img2 from '../assets/img/face7.jpg'
import img3 from '../assets/img/face20.jpg'
import img4 from "../assets/img/face23.jpg";


const CardRight = () => {
    let ar = [
      {
        img: img1,
        name: "jully vivine",
      },
      {
        img: img2,
        name: "martin crus",
      },

      {
        img: img3,
        name: "charlot doe",
      },
      {
        img: img5,
        name: "john fin",
      },
      {
        img: img4,
        name: "charlot quine",
      },
      {
        img: img1,
        name: "charlot quine",
      },
    ];
    let arr = [
      {
        icon: "mdi-send",
        name: "to tom vivine",
        act: "sending",
        amount: "23",
      },
      {
        icon: "mdi-send",
        name: "to martin crus",
        act: "sending",
        amount: "23",
      },
      ,
      {
        icon: "mdi-archive",
        name: "from charlot doe",
        act: "received",
        amount: "23",
      },
  ];
  
  return (
    <div>
      <h3>Quick Transaction</h3>
      <div className="row my-3">
        {ar.map((a, i) => (
          <div className="col-2 mb-5 p-0" key={i}>
            <div
              className={`d-flex flex-column justify-content-center align-items-center  ${style.user}`}
            >
              <div className="d-flex justify-content-center position-relative overflow-hidden">
                <Image src={a.img} alt="picture" />
              </div>
              {/* <span>{a.name}</span> */}
            </div>
          </div>
        ))}
        {/* recent transactions  */}
        <div className="col-12 capitalize">
          <h4>recent activities</h4>
        </div>
        {arr.map((a, i) => (
          <div className="col-12 my-1 py-2" key={i}>
            <div
              className={`d-flex flex-row justify-content-between align-items-center ${style.trn_recent}`}
            >
              <span className="flex-2">
                <i className={`mdi ${a?.icon}`}></i>
              </span>
              <div className="d-flex flex-column flex-1 pl-4">
                <span>{a?.name}</span>
                <span>{a?.act}</span>
              </div>
              <span className="flex-2 font-weight-bold">${a?.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardRight