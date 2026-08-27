function Benefits() {
  const benefits = [
    {
      title: "Unbeatable pricing",
      description:
        "Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.",
    },
    {
      title: "Best investing experience",
      description:
        "Simple and intuitive trading platform with an easy-to-understand user interface.",
    },
    {
      title: "No spam or gimmicks",
      description:
        'Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.',
    },
    {
      title: "The Zerodha universe",
      description:
        "More than just an app — gain free access to the entire ecosystem of our partner products.",
    },
  ];

  return (
    <section className="container py-5">
      <div className="row align-items-center gy-5">
        {/* Left Side */}
        <div className="col-lg-6 text-center">
          <img
            src="media/images/acop-benefits.svg"
            alt="Benefits"
            className="img-fluid mb-5"
            
          />

          <h2 className="fw-semibold">
            Benefits of opening a Zerodha demat account
          </h2>
        </div>

        {/* Right Side */}
        <div className="col-lg-6">
          {benefits.map((item) => (
            <div key={item.title} className="mb-5">
              <h3 className="fw-semibold mb-3">{item.title}</h3>

              <p
                className="text-muted mb-0"
                style={{
                  lineHeight: "1.8",
                  fontSize: "1.2rem",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;