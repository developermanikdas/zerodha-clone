import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import Pricing from "./Pricing";
import AccountOpeningCharges from "./AccountOpeningCharges";
import AmcCharges from "./AmcCharges";
import ValueAddedServices  from "./ValueAddedServices"
import {
  accountOpening,
  amcCharges,
  valueAddedServices,
} from "../data/charges";
import ChargesExplained from "./ChargesExplained";

function PricingPage() {
  return (
    <>
      <Hero />
      <Brokerage />
      <Pricing />
      <AccountOpeningCharges accountOpeningData={accountOpening} />
      <AmcCharges amcChargesData={amcCharges} />
      <ValueAddedServices valueAddedServicesData={valueAddedServices} />
      <ChargesExplained />
    </>
  );
}

export default PricingPage;
