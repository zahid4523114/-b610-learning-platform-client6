import React from "react";

const Faq = () => {
  return (
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button
            class="accordion-button fw-bold collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            1. How much does a new website cost?
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Do you think it’s possible to calculate the exact cost for website
            development? Website development will be fully customizable,
            tailoring to the client’s requirements. Nowadays, you can find many
            options to develop your website. You can approach a website designer
            (Freelancer) or contact a website development agency, or you can try
            developing a website on your own using some well-performing website
            builders. Depending on the requirements and the method you choose to
            build your website, the cost keeps varying. At ColorWhistle, we come
            up with the pricing after a separate analysis has been conducted on
            the projects and after brainstorming we work towards achieving the
            desired results.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button
            class="accordion-button fw-bold collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            2. Will you maintain my site for me?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Regular maintenance is essential for a website to stabilize its
            flexibility and reliability. Proper maintenance would help in
            ensuring your website’s security, invite new visitors, boost traffic
            and more. Of course, we can help you out with proper and
            professional website maintenance in addition to development as it
            supports in achieving stabilized growth, keeping your business
            inclined.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button
            class="accordion-button fw-bold collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            3. Will my website be mobile-friendly?
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Let it be a ticket booking, online order, browsing, etc. people are
            keen to do these tasks on the go. So, developing a responsive
            website will help in increasing the look and feel of your website on
            both small and large devices. It also increases the number of
            visitors, rankings in search engines. Yes, we ensure to develop a
            responsive website that would make your visitors appealing and
            deliver an optimized browsing experience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
