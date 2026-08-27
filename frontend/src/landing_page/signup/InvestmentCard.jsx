function InvestmentCard({ investment }) {
  return (
    <div className="d-flex align-items-start gap-4">

      <img
        src={investment.image}
        alt={investment.title}
        width="140"
      />

      <div>

        <h3 className="mb-3">
          {investment.title}
        </h3>

        <p
          className="text-muted mb-0"
          style={{
            lineHeight: "1.8",
            fontSize: "1.2rem",
          }}
        >
          {investment.description}
        </p>

      </div>

    </div>
  );
}

export default InvestmentCard;