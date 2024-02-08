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
            <a
              className="whatsapp-button"
              href="https://wa.me/123456789?text=Hello%20there!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1195px-WhatsApp.svg.png"
                alt="WhatsApp Logo"
                style={{ width: "24px", height: "24px", marginRight: "8px" }}
              />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
