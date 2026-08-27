import React from "react";
import CustomTable from "../partials/CustomTable";
import { accountOpening } from "../data/charges";

function ValueAddedServices({ valueAddedServicesData }) {
  return (
    <div className="container py-5">
      <CustomTable data={valueAddedServicesData} />
    </div>
  );
}

export default ValueAddedServices;
