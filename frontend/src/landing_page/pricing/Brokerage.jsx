import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-4 py-5 d-flex align-items-center flex-column">
          <img
            src="media/images/pricing0.svg"
            alt=""
            style={{ width: "60%" }}
          />
          <h2 className="text-center">Free equity delivery</h2>
          <p className="text-center fs-5 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 py-5 d-flex align-items-center flex-column">
          <img
            src="media/images/intradayTrades.svg"
            alt=""
            style={{ width: "60%" }}
          />
          <h2 className="text-center">Intraday and F&O trades</h2>
          <p className="text-center fs-5 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-md-4 py-5 d-flex align-items-center flex-column">
          <img
            src="media/images/pricing0.svg"
            alt=""
            style={{ width: "60%" }}
          />
          <h2 className="text-center">Free direct MF</h2>
          <p className="text-center fs-5 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
