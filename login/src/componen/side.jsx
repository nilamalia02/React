import React from "react";
import "./side.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


function Side() {
  return (
    <div className="Header">
      <div className="uptext">
        <h5>SpeakUP</h5>
      </div>
      <div className="side-title">
      <h1 id="title">SPEAK.UP</h1>
      <p id="desc">
        Different people have different problems, and their cause of problem
        differs, whether it’s childhood trauma.
      </p>
      
      <div className="icons">
        <FontAwesomeIcon id="fb" icon={faFacebook}></FontAwesomeIcon>
        <FontAwesomeIcon id="tw" icon={faTwitter}></FontAwesomeIcon>
        <FontAwesomeIcon id="ig" icon={faInstagram}></FontAwesomeIcon>
      </div>
      <p id="ketentuan">Terms of User . Privacy Policy</p>
    </div>
    </div>
  );
}

export default Side;
