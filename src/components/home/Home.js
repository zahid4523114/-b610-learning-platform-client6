import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container text-center position-relative ">
      <div className="course-header">
        <h1 className="text-white">
          Education <span className="text-warning">&</span> Training
          Organization.
          <br /> we provide best education system for you.
        </h1>
        <Link to="/courses">
          <button className="btn btn-primary">Explore Courses</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
