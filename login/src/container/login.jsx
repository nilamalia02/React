import React from "react";
import "./login.css";
import Side from "../componen/side";
import Field from "../componen/field";

class Login extends React.Component {
  render() {
    return (
        <div className="row ">
          <div className="col-4">
            <Side />
          </div>
          <div className="col">
            <Field />
          </div>
        </div>
    );
  }
}

export default Login;
