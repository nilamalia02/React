
import React from "react";
import speakup from "../assets/speakup.jpg";
import "./navbar.css";
// import { unstable_batchedUpdates } from "react-dom";
import { useState } from "react";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const changeBackground = () => {
    if(window.scrollY >= 50) {
      setnav(true);
    }
    else {
      setnav(false);
    }
  }
  window.addEventListener("scroll", changeBackground);
  return(
    <div className="container-fluid">
      <header className="nav">
      <a className="img">
        <img src={speakup}/>
      </a>
      <ul className="menu">
        <h2 href="#">Home</h2>
        <h2 href="#">Services</h2>
        <h2 href="#">Diary</h2>
        </ul>
        <button className="button">Login</button>
        </header>
    </div>
  )
};

export default Navbar;
