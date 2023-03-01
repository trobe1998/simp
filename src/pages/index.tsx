/** @format */

import Head from "next/head";
import style from '../assets/css/landing.module.css'
import {Content, Footer, Logo, Navbar} from "../components";
import logo from "../assets/img/lexo-Bank-Logo-gold.png";
import logo1 from "../assets/img/lexo-Bank-logo-lighrt-blue.png";
import logo2 from "../assets/img/lexo-Bank-new-logo-Black.png";
import logo3 from "../assets/img/lexo-Bank-new-logo-Blue.png";
import logo4 from "../assets/img/lexo-Bank-logo-muti.png";
// import logo from "../assets/img/mePic.jpg";
import clientPromise from "../lib/mongodb";
import {InferGetServerSidePropsType} from "next";

import {Hero} from "../components";
export async function getServerSideProps(context: any) {
  try {
    await clientPromise;
    return {
      props: {isConnected: true},
    };
  } catch (e) {
    console.error(e);
    return {
      props: {isConnected: false},
    };
  }
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(isConnected ? "mongodb connected" : "couldn't connect to db");
  return (
    <div className={`landing_wrapper p-0 m-0 ${style.landing}`}>
      <Navbar/>
      <Hero />
      <Content />
      <Footer/>
      
    </div>
  );
}
