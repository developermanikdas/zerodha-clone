import React from "react";
import CallToAction from "../partials/CallToAction";

function Hero() {
  return (
    <div className="container py-5 px-3">
      <div className="row text-center d-flex justify-content-center align-items-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-1"
        />
        <CallToAction
          link="Signup Now"
          heading="Invest in everything"
          para="Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more."
        />
      </div>
    </div>
  );
}

export default Hero;
