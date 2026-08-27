import React from "react";

function Universe() {
  const logos = Array(6).fill("media/images/zerodhaFundhouse.png");

  return (
    <div className="container py-5 px-3 d-flex flex-column justify-content-center align-items-center ">
      <div className="row text-center d-flex justify-content-center align-items-center flex-column">
        <h2 className="text-center">The Zerodha Universe</h2>
        <p className="text-center fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row justify-content-center g-4 py-5">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="col-6 col-md-4 d-flex justify-content-center mb-1"
          >
            <div className="each">
              <img
                src={logo}
                className="img-fluid mb-1"
                style={{ maxWidth: "160px" }}
                alt="Partner Logo"
              />
              <p className="fs-6 text-muted">Lorem, ipsum dolor sit amet</p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-primary px-5 py-2 fs-5">Sign up for Free</button>
    </div>
  );
}

export default Universe;
