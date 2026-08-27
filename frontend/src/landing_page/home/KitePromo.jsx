import React from "react";
import ArrowLink from "../partials/Arrowink";

function KitePromotion() {
  return (
    <div className="container-fluid bg-info-subtle py-5">
      <div className="container">
        <div className="row align-items-center text-center text-lg-start">

          {/* Left - Logo */}
          <div className="col-12 col-lg-3 mb-4 mb-lg-0 d-flex justify-content-center">
            <img
              src="media/images/kc-logo-landing.svg"
              alt="Kite Connect"
              className="img-fluid"
              style={{ maxWidth: "180px" }}
            />
          </div>

          {/* Center - Text */}
          <div className="col-12 col-lg-5 mb-4 mb-lg-0">
            <p className="mb-0 fs-5">
              Need more? Build your own trading and investing experience with
              Kite Connect, simple HTTP APIs to place orders, stream market
              data, manage your account, and more.{" "}
              <ArrowLink link="#" text="Explore" />
            </p>
          </div>

          {/* Right - Banner */}
          <div className="col-12 col-lg-4 d-flex justify-content-center">
            <img
              src="media/images/kc-banner-image.svg"
              alt="Kite Connect Banner"
              className="img-fluid"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default KitePromotion;