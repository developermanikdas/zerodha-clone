import React from "react";
import ArrowLink from "../partials/Arrowink";

function LeftSection({
  image,
  imageALt,
  heading,
  text,
  link1,
  link2,
  link1Text,
  link2Text,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center gy-5">
        {/* Left Image */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src={image}
            alt={imageALt}
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Right Content */}
        <div className="col-12 col-lg-6">
          <h2 className="mb-4">{heading}</h2>

          <div className="mb-5">
            <p className="text-muted fs-5">{text}</p>
            <div className="d-flex gap-5">
              {link1 && link1Text && (
                <ArrowLink text={link1Text} link1={link1} />
              )}
              {link2 && link2Text && (
                <ArrowLink text={link2Text} link1={link2} />
              )}
            </div>
            <div className="d-flex gap-3 flex-wrap mt-4">
              <img
                src="media/images/googlePlayBadge.svg"
                alt=""
                style={{ width: "140px" }}
              />

              <img
                src="media/images/appstoreBadge.svg"
                alt=""
                style={{ width: "140px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
