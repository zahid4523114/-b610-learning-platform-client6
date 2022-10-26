import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, courseHeader, courseThumb, courseDes, price, ratings } = course;
  console.log(course);
  return (
    <div style={{ width: "18rem" }} class="card my-4 ">
      <img className="" src={courseThumb} alt="" />
      <div class="card-header text-center">{courseHeader}</div>
      <div class="card-body">
        <h5 class="card-title">Price: ${price}</h5>
        <h5 class="card-title">Ratings: {ratings}</h5>
        <Link class="btn btn-primary container-fluid">Show Details</Link>
      </div>
    </div>
  );
};

export default Course;
