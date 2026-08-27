import React from "react";
import { Link } from "react-router-dom";
function CallToAction({link, heading, para}) {
  return (
    <>
      <div className="container my-5">
        <div className="row text-center d-flex justify-content-center align-items-center flex-column">
          <h2 className="text-center">{heading}</h2>
          <p className="text-center fs-5">
           {para}
          </p>
          <Link className="btn btn-primary d-inline-block w-auto py-2 fs-5">
           {link}
          </Link>
        </div>
      </div>
    </>
  );
}

export default CallToAction;
