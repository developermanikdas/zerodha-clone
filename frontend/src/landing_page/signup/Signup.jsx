import React from "react";
import SignUpHero from "./SignUpHero";
import InvestmentOptions from "./InvestmentOptions";
import Benefits from "./Benefits";
import AccountSteps from "./AccountSteps";
import CallToAction from "../partials/CallToAction";

function SignupPage() {
  return (
    <div className="container">
      <SignUpHero />
      <InvestmentOptions />
      <AccountSteps />
      <Benefits />
      <CallToAction
          link="Signup Now Free"
          heading="Open a Zerodha account"
          para="Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades."
        />
    </div>
  );
}

export default SignupPage;
