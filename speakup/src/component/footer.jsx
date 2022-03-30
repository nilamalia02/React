import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faYoutube, faFacebookSquare} from '@fortawesome/free-brands-svg-icons';

import "./footer.css";

const Footer = () => {
  return(
      <div name="footer" id="footer" className="container-fluid">
        <footer className="py-5">
          <div className="row">
            <div className="col-4 offset-1">
              <h4 id="footer-app-title">SpeakUp</h4>
              <p id="footer-app-subtitle">Counseling App</p>
              <p id="footer-app-desc">We will help you to overcome mental health problems and help you to reach your goals to make your life more meaningful</p>
              <FontAwesomeIcon icon={faInstagram} id="ig"/>
              <FontAwesomeIcon icon={faYoutube} className="offset-1" id="yt"/>
              <FontAwesomeIcon icon={faFacebookSquare} className="offset-1" id="fb"/>
            </div>
            <div className="col-1 offset-2">
            <h4 id="company">Company</h4>
              <ul>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">Feature</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">Diary</a>
              </li>
              </ul>
            </div>
            <div className="col-1">
              <h4 id="policy">Policies</h4>
              <ul>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">Terms</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">Privacy</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">API</a>
              </li>
              </ul>
            </div>
            <div className="col-3">
              <h4 id="contacts">Contacts</h4>
              <ul>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">+62 812 3568 6798</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">speakup@gmail.com</a>
              </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
  )
};

export default Footer;
