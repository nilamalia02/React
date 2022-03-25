import React from "react";

const Post = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        {/* image card */}
        <img src={props.photo} alt="gambar" className="card-img" />
        <p className="card-text">{props.benefit}</p>
        <p className="card-text">Rp. {props.price}</p>
      </div>
      <a href="#" className="btn btn-primary">
        Go To Course
      </a>
      <a
        href="#"
        className="btn btn-danger"
        onClick={() => props.hapusCourse(props.idCourses)}
      >
        Delete
      </a>
    </div>
  );
};

export default Post;
