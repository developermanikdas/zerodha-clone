function AccountSteps() {
  const steps = [
    {
      number: "01",
      title: "Enter the requested details",
    },
    {
      number: "02",
      title: "Complete e-sign & verification",
    },
    {
      number: "03",
      title: "Start investing!",
    },
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center fw-semibold mb-5">
        Steps to open a demat account with Zerodha
      </h2>

      <div className="row align-items-center gy-5">
        {/* Left Image */}
        <div className="col-lg-6">
          <div
            className="ratio ratio-16x9 rounded-4 overflow-hidden shadow"
            style={{ maxWidth: "100%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/JFx9tzhBrjE"
              title="How to Open a Demat Account"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Steps */}
        <div className="col-lg-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`d-flex align-items-center py-4 ${
                index !== steps.length - 1 ? "border-bottom" : ""
              }`}
            >
              <div
                className="rounded-circle border d-flex justify-content-center align-items-center me-4"
                style={{
                  width: "48px",
                  height: "48px",
                  fontSize: "1.5rem",
                  minWidth: "48px",
                }}
              >
                {step.number}
              </div>

              <h3 className="mb-0 fw-normal">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountSteps;
