import React from "react";
import "./field.css";

function Field() {
  return (
    <div>
      <div className="header">
        <h1>Welcome To SpeakUp</h1>
        <p>Sign in by entering the informations below</p>
      </div>
      
      <div className="form">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email 
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Remember Me
            </label>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          

          <div className="footer">
            <p id="sign-up">Don't have an account? <a id="sign-link" href="">Sign Up</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Field;
