import React from "react";

const Footer = () => {
  return(
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-4 ">
              <h4>SpeakUp</h4>
              <h5>Counseling App</h5>
              <p>We will help you to overcome mental health problems and help you to reach your goals to make your life more meaningful</p>
            </div>
            <div className="col-2">
            <h4>Company</h4>
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
            <div className="col-2">
              <h4>Policies</h4>
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
              <h4>Contacts</h4>
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
