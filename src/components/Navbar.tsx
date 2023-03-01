/** @format */

import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router'
import style from "../assets/css/navbar.module.css";
import logo from "../assets/img/lexo-Bank-new-logo-white.png";
import {Logo} from "../components";
import Link from "next/link";

const Navbar = () => {
  const [pageHeight, setPageHeight] = useState(0);
  const [bg, setBg] = useState(0.688);
  const [toggle, setToggle] = useState(false);
  const router = useRouter()
  let currentDir = router.pathname
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setPageHeight(window.scrollY);
  };

  useEffect(() => {
    if (pageHeight === 0) {
      setBg(0);
    } else {
      setBg(0.9877);
    }
  }, [pageHeight, bg]);

  const menuToggle = () => {
    toggle ? setToggle(false) : setToggle(true)
    console.log(toggle)
  };

  return (
    <div className={`position-relative`}>
      <div
        className={style.navbar}
        style={{backgroundColor: `rgba(4, 4, 112, ${bg})`}}
      >
        <span
          className="position-relative"
          style={{
            width: "10vw",
            height: "10vh",
            marginTop: "-10px",
            marginLeft: "6rem",
          }}
        >
          <Logo imgUrl={logo} />
        </span>
        <ul>
          <li>personal</li>
          <li>business</li>
          <li>lending</li>
          <li>insure/invest</li>
        </ul>
        {currentDir !== "/login" ? (
          <Link href={"/login"}>
            <span
              className={style.login}
              onClick={() => console.log("clicked1")}
            >
              login
            </span>
          </Link>
        ) : (
          <Link href={"/"}>
            <span className={style.login}>Home</span>
          </Link>
        )}
      </div>

      <div
        className={`${style.navbar_sm} ${
          toggle ? `${style.show}` : `${style.hide}`
        }`}
      >
        <span>
          <Logo imgUrl={logo} />
        </span>
        <ul>
          <li>personal</li>
          <li>business</li>
          <li>lending</li>
          <li>insure/invest</li>
        </ul>

        {currentDir !== "/login" ? (
          <Link href={"/login"}>
            <span
              className={style.login}
              onClick={() => console.log("clicked1")}
            >
              login
            </span>
          </Link>
        ) : (
          <Link href={"/"}>
            <button className={style.login}>Home</button>
          </Link>
        )}
      </div>

      <span
        className={style.menu}
        onClick={() => {
          menuToggle();
        }}
      >
        {toggle ? (
          <i className="mdi mdi-close"></i>
        ) : (
          <i className="mdi mdi-menu"></i>
        )}
      </span>
    </div>
  );
};

export default Navbar;
