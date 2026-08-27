import React from "react";
import { chargesExplained } from "../data/charges";

function ChargesExplained() {
  return (
    <div className="container">
      <div className="container py-5">
        <h2 className="mb-5 ">Charges explained</h2>

        <div className="row">
          {chargesExplained.map((item) => (
            <div key={item.title} className="col-lg-6 mb-4">
              <h5 className="fw-semibold text-muted fs-6">{item.title}</h5>

              {item.description.map((text, index) => (
                <p key={index} className="text-muted small mb-2">
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChargesExplained;
