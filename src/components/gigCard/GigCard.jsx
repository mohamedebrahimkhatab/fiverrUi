import React from "react";
import { Link } from "react-router-dom";
import "./GigCard.scss";

const GigCard = ({ gig }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={gig.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={gig.pp} alt="" />
            <span>{gig.username}</span>
          </div>
          <p>{gig.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{gig.star}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              $ {gig.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
