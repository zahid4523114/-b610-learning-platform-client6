import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckoutPage = () => {
  const userInfo = useLoaderData();
  const { id, courseHeader, courseThumb, courseDes } = userInfo;

  console.log(userInfo);
  return (
    <div
      class="accordion accordion-flush shadow-lg container mt-3 rounded"
      id="accordionFlushExample"
    >
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button
            class="accordion-button collapsed fw-bold fs-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            {courseHeader}
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body fs-5">
            <p>{courseDes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
