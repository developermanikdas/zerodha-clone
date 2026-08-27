import React from "react";

function TeamCard({ image, name, designation }) {
  return (
    <div className="text-center">

      <img
        src={image}
        alt={name}
        className="img-fluid rounded-circle mb-3"
        style={{
          width: "220px",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <h5 className="mb-1">{name}</h5>

      <p className="text-muted mb-2">{designation}</p>

      <button
        className="btn btn-link text-decoration-none p-0"
        type="button"
      >
        Bio <i className="fa-solid fa-angle-down"></i>
      </button>

    </div>
  );
}

export default TeamCard;