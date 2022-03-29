import React from "react";
import "./card.css";
const Card = () => {
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="rounded-center"
            alt="image"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">How To Be Productive Every Day</h5>
            <p className="card-text">
              Guide you to organize your schedule to be more organized
            </p>
            <a href="#" className="btn btn-primary">
              Learn Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
