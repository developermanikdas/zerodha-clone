import React from "react";
import { Link } from "react-router-dom";
import "./ArrowLink.css"

function ArrowLink({ link, text }) {
  return (
    <>
      <Link className="text-decoration-none fs-5 arrow-link" to={link}>
        {text} <i className="fa-solid fa-arrow-right-long"></i>
      </Link>
    </>
  );
}

export default ArrowLink;
