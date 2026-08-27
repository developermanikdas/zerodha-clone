import InvestmentCard from "./InvestmentCard";

function InvestmentOptions() {
  const investments = [
    {
      title: "Stocks",
      description: "Invest in all exchange-listed securities",
      image: "media/images/stocks.svg",
    },
    {
      title: "Mutual funds",
      description: "Invest in commission-free direct mutual funds",
      image: "media/images/mf.svg",
    },
    {
      title: "IPO",
      description: "Apply to the latest IPOs instantly via UPI",
      image: "media/images/ipo.svg",
    },
    {
      title: "Futures & options",
      description:
        "Hedge and mitigate market risk through simplified F&O trading",
      image: "media/images/fo.svg",
    },
  ];

  return (
    <section className="container py-5">

      <h2 className="text-center mb-5">
        Investment options with Zerodha demat account
      </h2>

      <div className="row g-5">

        {investments.map((item) => (
          <div className="col-lg-6" key={item.title}>
            <InvestmentCard investment={item} />
          </div>
        ))}

      </div>

      <div className="text-center mt-5">
        <button className="btn btn-primary px-5 py-3 fs-5">
          Explore Investments
        </button>
      </div>

    </section>
  );
}

export default InvestmentOptions;