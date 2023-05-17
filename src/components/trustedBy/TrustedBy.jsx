import React from "react";

import "./TrustedBy.scss";
import { Link } from "react-router-dom";

const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="container">
        <span>Trusted by: </span>
        <Link to={"https://www.facebook.com/"}>
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"
            alt=""
          />
        </Link>
        <Link to={"https://www.google.com/"}>
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
            alt=""
          />
        </Link>
        <Link to={"https://www.netflix.com/eg-en/"}>
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
            alt=""
          />
        </Link>
        <Link to={"https://en-eg.pg.com/"}>
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
            alt=""
          />
        </Link>
        <Link to={"https://www.paypal.com/eg/home"}>
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default TrustedBy;
