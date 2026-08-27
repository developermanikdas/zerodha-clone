import React from 'react';
import ArrowLink from '../partials/Arrowink';

function RightSection({image,imageAlt, heading, text, link, linkText}) {
    return (<div className="container py-5">
        <div className="row align-items-center gy-5">


            {/* Left Content */}
            <div className="col-12 col-lg-6">
                <h2 className="mb-4">{heading}</h2>

                <div className="mb-5">
                    <p className="text-muted fs-5">
                       {text}
                    </p>
                    <div className="d-flex gap-5">
                        <ArrowLink text={linkText} link={link} />
                    </div>

                </div>
            </div>


            {/* Right Image */}
            <div className="col-12 col-lg-6 text-center">
                <img
                    src={image}
                    alt={imageAlt}
                    className="img-fluid"
                    style={{ maxWidth: "90%" }}
                />
            </div>
        </div>
    </div>);
}

export default RightSection;