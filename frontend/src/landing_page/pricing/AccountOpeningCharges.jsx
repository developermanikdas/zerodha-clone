import React from "react";
import CustomTable from "../partials/CustomTable";
import { accountOpening } from "../data/charges";

function AccountOpeningCharges({ accountOpeningData }) {
  return (
    <div className="container py-5">
      <CustomTable data={accountOpeningData} />
    </div>
  );
}

export default AccountOpeningCharges;
