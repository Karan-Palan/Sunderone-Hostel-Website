import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Some <br />
            text
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Adress</span>
          <span className="secondaryText">__</span>
          <div className="flexCenter f-menu">
            <span>x</span>
            <span>y</span>
            <span>z</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
