import React from "react";
import ArrowLink from "../partials/Arrowink";

function Pricing() {
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center gy-5 my-5">
          {/* Left Content */}
          <div className="col-12 col-lg-5">
            <h2>Unbeatable Pricing</h2>

            <p className="text-muted fs-5">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges. soluta hic
              cupiditate? Placeat, optio. Minus, ipsam tenetur!
            </p>

            <ArrowLink text="See Pricing"/>
          </div>

          {/* Right Cards */}
          <div className="col-12 col-lg-7 px-4">
            <div className="row">
              <div className="col-6 p-4 border text-center">
                <h3 className="fs-1 text-warning fw-bold fs-5">$0</h3>
                <p className="fs-5">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo.
                </p>
              </div>
              <div className="col-6 p-4 border text-center">
                <h3 className="fs-1 text-warning fw-bold fs-5">$10</h3>
                <p className="fs-5">
                  {" "}
                  ipsum dolor sit amet consectetur adipisicing elit. Explicabo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
