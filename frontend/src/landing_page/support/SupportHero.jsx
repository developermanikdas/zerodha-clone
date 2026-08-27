import { Search } from "lucide-react";

function SupportHero() {
  return (
    <section className="bg-light py-4">
      <div className="container">
        {/* Heading + Button */}
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <h1 className="fw-semibold m-0" style={{ fontSize: "3rem" }}>
            Support Portal
          </h1>

          <button
            className="btn btn-primary px-4 py-2 fw-semibold"
            style={{ borderRadius: "6px" }}
          >
            My tickets
          </button>
        </div>

        {/* Search Box */}
        <div className="position-relative mt-5">
          <Search
            size={22}
            className="position-absolute text-secondary"
            style={{
              left: "18px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />

          <input
            type="text"
            className="form-control ps-5 py-3"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
            style={{
              fontSize: "1.25rem",
              borderRadius: "6px",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default SupportHero;
