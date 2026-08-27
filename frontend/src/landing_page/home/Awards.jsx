import React from "react";

function Awards() {
  return (
    <div className="container py-5 px-3">
      <div className="row align-items-center justify-content-center gy-5">
        {/* Left Image */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Award"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Right Content */}
        <div className="col-12 col-md-6">
          <h2>Open a Zerodha Account</h2>

          <p className="fs-5 text-muted">
            Join millions of investors and traders who trust Zerodha for a
            seamless investing experience. Start your journey with a fast,
            paperless account opening process and gain access to powerful
            trading platforms.
          </p>

          <div className="row mb-4 text-muted">
            <div className="col-6">
              <ul className="d-flex flex-column gap-3 ps-3">
                <li>Completely online account opening</li>
                <li>₹0 brokerage on equity delivery</li>
                <li>Advanced trading and charting tools</li>
              </ul>
            </div>

            <div className="col-6">
              <ul className="d-flex flex-column gap-3 ps-3">
                <li>Access to stocks, F&O, commodities, and ETFs</li>
                <li>Secure and reliable trading platform</li>
                <li>Dedicated customer support</li>
              </ul>
            </div>
          </div>

          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;