import { useState } from "react";
import ComparisionTable from "./ComparisionTable";

function Pricing() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <div className="container">
      <ul className="nav nav-tabs fs-4 border-bottom mb-5">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "equity" ? "active" : ""}`}
            onClick={() => setActiveTab("equity")}
          >
            Equity
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "currency" ? "active" : ""}`}
            onClick={() => setActiveTab("currency")}
          >
            Currency
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "commodity" ? "active" : ""}`}
            onClick={() => setActiveTab("commodity")}
          >
            Commodity
          </button>
        </li>
      </ul>

      <ComparisionTable type={activeTab} />
    </div>
  );
}

export default Pricing