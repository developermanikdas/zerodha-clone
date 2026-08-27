import React from "react";

function SignupHero() {
;

  return (
    <section className="container py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-semibold fs-3">Open a free demat and trading account online</h1>

        <p className="text-muted fs-5 mt-4">Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
      </div>

      {/* Hero Content */}
      <div className="row align-items-center gy-5">
        {/* Left Image */}
        <div className="col-lg-7 text-center">
          <img
            src="media/images/signup.png"
            alt="Signup"
            className="img-fluid"
          />
        </div>

        {/* Right Form */}
        <div className="col-lg-5">
          <h2 className="fw-semibold fs-4">Signup now</h2>

          <p className="text-muted fs-5 mb-4">
            Or track your existing application
          </p>

          <div className="input-group mb-4">
            <span className="input-group-text bg-white px-3 fs-5">
              🇮🇳 +91
            </span>

            <input
              type="tel"
              className="form-control py-3 fs-5"
              placeholder="Enter your mobile number"
            />
          </div>

          <button className="btn btn-primary w-100 py-3 fs-5">
            Get OTP
          </button>

          <p className="text-muted mt-4">
            By proceeding, you agree to the Zerodha{" "}
            <a href="#terms" className="text-decoration-none">
              terms
            </a>{" "}
            &{" "}
            <a href="#privacy" className="text-decoration-none">
              privacy policy
            </a>
          </p>

          <hr />

          <p className="mb-0">
            Looking to open NRI account?{" "}
            <a href="#nri" className="text-decoration-none">
              Click here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignupHero;