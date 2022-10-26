import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../course/Course";
import "./courses.css";

const Courses = () => {
  const allCourses = useLoaderData();
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3500/category")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <div className="row container-fluid">
      <div className="col-lg-3 col-md-12 col-12 ms-lg-0 ms-md-0 ms-2  d-flex  flex-column">
        {catagories.map((category) => (
          <Link
            to={`/course/${category.id}`}
            key={category.id}
            style={{ backgroundColor: "lightcoral" }}
            className="btn text-light my-lg-4 my-md-3 my-2"
          >
            {category.categoryName}
          </Link>
        ))}
      </div>
      <div className="col-lg-9 col-md-12 col-12 course-container">
        {allCourses.map((c) => (
          <Course key={c.id} course={c}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
