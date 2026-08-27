import React from "react";
import SupportHero from "./SupportHero";
import SupportAccordion from "./SupportAccordion";
import Sidebar from "./Sidebar";

function SupportPage() {
  return (
    <>
      <SupportHero />
      <div className="container d-flex flex-column flex-md-row ">
        <SupportAccordion />
        <Sidebar />
      </div>
    </>
  );
}

export default SupportPage;
