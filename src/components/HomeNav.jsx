/** @format */

import React, {useState} from "react";
import Link from "next/link";
import Image from 'next/image'
import style from "../assets/css/homeNav.module.css";
import mePic from "../assets/img/mePic.jpg";
import logo from '../assets/img/lexo-Bank-new-Logo-Blue.png'
import {Logo} from "./index";

const HomeNav = ({show, toggle}) => {
  let [pop, setPop] = useState(false);
  return (
    <div className={style.navbar_wrapper}>
      <div className={style.left}>
        <span className={` ${style.logo}`}>
          <Logo imgUrl={logo}/>
        </span>
        <span style={{}} onClick={() => toggle()}>
          <i className="mdi mdi-menu"></i>
        </span>
      </div>

      <ul className={style.right}>
        <div className="d-flex justify-content-around align-items-center">
          <li className="position-relative">
            <i className="mdi mdi-bell-outline"></i>
          </li>
          <li
            className={style.profile}
            onClick={() => {
              pop ? setPop(false) : setPop(true)
            }}
          >
            {/* <img src={mePic} alt="user profile" /> */}
            <Image src={mePic} alt='user profile picture'/>
          </li>
        </div>

        <span onClick={() => toggle()}>
          <i className="mdi mdi-menu"></i>
        </span>
      </ul>

      <div
        className={`${pop ? `${style.showDrop}` : `${style.hideDrop}`} ${
          style.drop
        }`}
      >
        <Link href={"/login"}>
          <i className="mdi mdi-settings-outline"></i> setting
        </Link>
              
        <Link href={"/login"} onClick={()=>localStorage.removeItem('user')}>
          <i className="mdi mdi-power"></i>logout
        </Link>
      </div>
    </div>
  );
};

export default HomeNav;
