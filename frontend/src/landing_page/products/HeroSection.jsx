import React from "react";
import ArrowLink from "../partials/Arrowink";

function HeroSection() {
  return (
    <div className="text-center py-5 px-5 d-flex flex-column align-items-center ">
      <h2 className="mb-4">Zerodha Products</h2>

      <div className="row justify-content-center">
        <div className="col-12">
          <p className="text-muted fs-5 text-center">
            Sleek, modern, and intuitive trading platforms
          </p>
        </div>
      </div>

      <ArrowLink text="Investment offerings" />
    </div>
  );
}

export default HeroSection;
