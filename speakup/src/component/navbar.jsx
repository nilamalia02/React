
import React from "react";
import speakup from "../assets/speakup.jpg";
import "./navbar.css";
// import { unstable_batchedUpdates } from "react-dom";
import { useState } from "react";

const Navbar = () => {
  // const [nav, setnav] = useState(false);
  // const changeBackground = () => {
  //   if(window.scrollY >= 50) {
  //     setnav(true);
  //   }
  //   else {
  //     setnav(false);
  //   }
  // }
  // window.addEventListener("scroll", changeBackground);
  return(
    <div className="container-fluid">
      <header className="nav">
        <div className="img">
          <img src={speakup}/>
          </div>

          <ul className="feature">
            <a className="text-button">
            <a href="#">Home</a>
            </a>
            <a className="text-button">
            <a href="#">Services</a>
            </a>
            <a className="text-button">
            <a href="#">Diary</a>
            </a>
            <button className="button">SIGN UP</button>
          </ul>
      </header>
      <body className="content">
        
      </body>
    </div>
  )
};

export default Navbar;
/* <a className="img">
        <img src={speakup}/>
      </a>
      <a className="feature">
      <ul className="menu">
        <h2 href="#">Home</h2>
        <h2 href="#">Services</h2>
        <h2 href="#">Diary</h2>
        </ul>
        </a>
        <a className="button">
        <button className="button">Login</button>
        </a> */
