import React from "react";
import Card from "../component/card";
import Conselorcard from "../component/conselorCard";
import Navbar from "../component/navbar";
import "./landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Landing Page</h1>
        <p>This is the landing page</p>
        <p>Popular Course</p>
        <div className="wrapper">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <Conselorcard />
          <Conselorcard />
        </div>
      </div>
    );
  }
}

export default Landing;
