import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Footer from "../Footer";
import HeroSection from "./HeroSection";
import More from "./More";

function ProductPage() {
  return (
    <>
      <HeroSection />
      <LeftSection
        image="media/images/kite.png"
        imageALt="Product Image"
        heading="Kite"
        text="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1="#"
        link2="#"
        link1Text="Try Demo"
        link2Text="Learn More"
      />
      <RightSection
        image="media/images/console.png"
        imageALt="Product Image"
        heading="Console"
        text="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link="#"
        linkText="Learn More"
      />
      <LeftSection
        image="media/images/coin.png"
        heading="Coin"
        text="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1="#"
        link1Text="Coin"
      />
      <RightSection
        image="media/images/kiteconnect.png"
        heading="Kite Connect API"
        text="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link="#"
        linkText="Kite Connect"
      />
      <LeftSection
        image="media/images/varsity-products.svg"
        heading="Varsity mobile"
        text="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      />

      <More />
      <Universe />
    </>
  );
}

export default ProductPage;
