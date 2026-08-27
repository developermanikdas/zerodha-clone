import React from "react";
import { Link } from "react-router-dom";

function Founder() {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-5">People</h2>

      <div className="row align-items-center justify-content-center g-5">
        {/* Left */}
        <div className="col-lg-4 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle mb-4"
            style={{
              width: "320px",
              height: "320px",
              objectFit: "cover",
            }}
          />

          <h4 className="mb-2">Nithin Kamath</h4>

          <p className="text-muted">Founder, CEO</p>
        </div>

        {/* Right */}
        <div className="col-lg-7">
          <p className="text-muted fs-5">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="text-muted fs-5">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="text-muted fs-5">
            Playing basketball is his zen.
          </p>

          <p className="mt-4">
            Connect on{" "}
            <Link to="#" className="text-decoration-none">
              Homepage
            </Link>{" "}
            /{" "}
            <Link to="#" className="text-decoration-none">
              TradingQnA
            </Link>{" "}
            /{" "}
            <Link to="#" className="text-decoration-none">
              Twitter
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Founder;