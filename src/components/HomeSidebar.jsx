/** @format */

import React, {useContext, useState, useEffect} from "react";
import style from "../assets/css/homeNav.module.css";
// import {LinksContext} from "../views/Home";

const HomeSidebar = ({show, setShow, set, view}) => {
  // useEffect(() => {

  // }, [show])

  return (
    <div
      className={`${style.sidebar_wrapper} ${
        show ? `${style.show}` : `${style.hide}`
      }`}
    >
      <ul className={style.sidebar_ul}>
        <li
          className={`${style.sidebar_item} ${
            view === 1 ? `${style.active}` : null
          }`}
          onClick={() => {
            set(1);
            // setShow(false);
          }}
        >
          <i className="mdi mdi-view-dashboard"></i>
          <span>overview</span>
          <i className="mdi mdi-chevron-right"></i>
        </li>
        <li
          className={`${style.sidebar_item} ${
            view === 2 ? `${style.active}` : null
          }`}
          onClick={() => {
            set(2);
            // setShow(false);
          }}
        >
          <i className="mdi mdi-archive"></i>
          <span>cards</span>
          <i className="mdi mdi-chevron-right"></i>
        </li>
        <li
          className={`${style.sidebar_item} ${
            view === 3 ? `${style.active}` : null
          }`}
          onClick={() => {
            set(3);
            // setShow(false);
          }}
        >
          <i className="mdi mdi-bio"></i>
          <span>payments</span>
          <i className="mdi mdi-chevron-right"></i>
        </li>

        <li className={style.sidebar_item}>
          <i className=" mdi mdi-barcode"></i>
          <span>generate barcode</span>
          <i className="mdi mdi-chevron-right"></i>
        </li>

        <li className={style.sidebar_item}>
          <i className="mdi mdi-settings-outline"></i>
          <span>settings</span>
          <i className="mdi mdi-chevron-right"></i>
        </li>
      </ul>
    </div>
  );
};

export default HomeSidebar;
