import React from "react";
import { Link, NavLink } from "react-router-dom";
import ArrowLink from "../partials/Arrowink";

function Education() {
  return (
    <div className="container py-5">
      <div className="row align-items-center gy-5">
        {/* Left Image */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Right Content */}
        <div className="col-12 col-lg-6">
          <h2 className="mb-4 fs-5">Free and open market education</h2>

          <div className="mb-5">
            <p className="text-muted fs-5">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>

            <ArrowLink text="Varsity" />
          </div>

          <div>
            <p className="text-muted fs-5">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>

            <ArrowLink text="TradingQ&A " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
