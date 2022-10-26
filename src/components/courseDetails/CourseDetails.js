import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetail = useLoaderData();
  const { courseHeader, courseThumb, courseDes } = courseDetail;
  return (
    <div class="card m-3" style={{ maxwidth: "540px" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={courseThumb} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">{courseHeader}</h2>
            <p class="card-text">{courseDes}</p>
            <button className="btn btn-danger">Download Pdf</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
