import React from "react";
import ArrowLink from "../partials/Arrowink";

function Stats() {
  return (
    <div className="container ">
      <div className="row mt-2 d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6">
          <h2 className="mb-4">Trust with confidence </h2>
          <h4>Customer-first always</h4>
          <p className="text-muted fs-5">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h4>No spam or gimmicks</h4>
          <p className="text-muted fs-5">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a href="#philosophies" className="text-primary text-decoration-none">
              Our philosophies{" "}
            </a>
            .
          </p>
          <h4>The Zerodha universe</h4>
          <p className="text-muted fs-5">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4>Do better with money</h4>
          <p className="text-muted fs-5">
            With initiatives like{" "}
            <a href="#nudge" className="text-primary text-decoration-none">Nudge</a> and{" "}
            <a href="#kill-switch" className="text-primary text-decoration-none">Kill Switch</a> ,
            we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <img className="img-fluid" src="media/images/ecosystem.png" alt="Ecosystem" />
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 text-primary">
            <ArrowLink text="Explore Our Products" link="#" />
            <ArrowLink text="Try a demo" link="#" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
