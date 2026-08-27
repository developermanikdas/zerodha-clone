import React from "react";
import CustomTable from "../partials/CustomTable";

function AccountOpeningCharges({ accountOpeningData }) {
  return (
    <div className="container py-5">
      <CustomTable data={accountOpeningData} />
    </div>
  );
}

export default AccountOpeningCharges;
