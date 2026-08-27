import React from "react";
import CustomTable from "../partials/CustomTable";

function AmcCharges({ amcChargesData }) {
  return (
    <div className="container">
      <CustomTable data={amcChargesData} />
    </div>
  );
}

export default AmcCharges;
