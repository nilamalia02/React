import React from "react";
import Post from "../componen/post";
import "./BlogsPos.css";

class BlogsPos extends React.Component {
  state = {
    kelompok: [],
    tambahData: {
      id: "",
      photo: "",
      title: "",
      price: "",
      benefit: "",
    },
  };

  ambilDataServerApi = () => {
    fetch("http://localhost:3001/courses")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          kelompok: response,
        });
      });
  };

  componentDidMount() {
    this.ambilDataServerApi();
  }

  handleHapusData = (data) => {
    fetch(`http://localhost:3001/courses/${data}`, {
      method: "DELETE",
    }).then((response) => {
      this.ambilDataServerApi();
    });
  };

  handleTambahData = (evet) => {
    let formInsert = { ...this.state.tambahData };
    let timestamp = new Date().getTime();
    formInsert[id] = timestamp;
    formInsert[evet.target.name] = evet.target.value;
    this.setState({
      tambahData: formInsert,
    });
  };

  handleTombolSimpan = (evet) => {
    evet.preventDefault();
    fetch("http://localhost:3001/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.tambahData),
    }).then((response) => {
      this.ambilDataServerApi();
    });
  };

  render() {
    return (
      <div className="post-artikel">
        <h2>Courses</h2>
        {this.state.kelompok.map((kelompok) => {
          return (
            <Post
              idCourses={kelompok.id}
              photo={kelompok.photo}
              title={kelompok.title}
              price={kelompok.price}
              benefit={kelompok.benefit}
              hapusCourse={this.handleHapusData}
              AddCourses={this.handleTambahData}
            />
          );
        })}

        {/* form input add courses */}

        <div className="form-add">
          <h3>Input Data Courses</h3>
          <input
            type="text"
            placeholder="Add Title"
            onChange={this.handleTambahData}
          />
          <input
            type="text"
            placeholder="Add Photo"
            onChange={this.handleTambahData}
          />
          <input
            type="text"
            placeholder="Add Price"
            onChange={this.handleTambahData}
          />
          <input
            type="text"
            placeholder="Add Benefit"
            onChange={this.handleTambahData}
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleTombolSimpan}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default BlogsPos;
