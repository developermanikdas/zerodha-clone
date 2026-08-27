import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Education from "./Education";
import KitePromotion from "./KitePromo";
import Pricing from "./Pricing";
import Stats from "./Stats";
import CallToAction from "../partials/CallToAction";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Pricing />
      <KitePromotion />
      <Awards />
      <Education />
      <CallToAction
          link="Signup Now Free"
          heading="Open a Zerodha account"
          para="Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades."
        />
    </>
  );
}

export default HomePage;
