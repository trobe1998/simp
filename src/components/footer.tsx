import React from 'react'
import Logo from './Logo';
import logo from '../assets/img/lexo-Bank-new-logo-white.png'

const Footer = () => {
  return (
    <div
      className="d-flex flex-column flex-lg-row justify-content-around align-items-center mt-5 py-5"
      style={{height: '170px', backgroundColor: "rgba(4, 4, 112, 0.688)", color:'#fff'}}
    >
          <span style={{width:'200px',height:'100px', position:'relative'}}>
              <Logo imgUrl={logo}/>
      </span>
      <span>Premium Banking Experience</span>
      <span>All Rights Reserved @ 2023</span>
    </div>
  );
}

export default Footer