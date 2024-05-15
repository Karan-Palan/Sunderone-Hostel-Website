import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const GoldenHoverLink = () => {
    const linkStyle = {
      position: "relative",
      textDecoration: "none",
      color: "transparent",
      backgroundImage: "linear-gradient(to bottom, #ADD8E6, #00008B)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
    };

    return (
      <a
        href="https://www.linkedin.com/in/karan-palan-476472289/"
        style={linkStyle}
      >
        Karan Palan
        <style>
          {`
          a:hover::after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background-color: gold;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: width 0.3s ease;
          }
        `}
        </style>
      </a>
    );
  };

  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo.png" alt="" width={300} />
          <span className="secondaryText">
            Copyright <br />
            Sundarone Hostel @{currentYear}
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">
            Visit Again
          </span>
          <span style={{ fontSize: "20px" }}> <GoldenHoverLink /></span>
          <div className="flexCenter f-menu">
            <span >
              <a href="https://wa.me/9772379100?text=Hello%20there!">
                <FaWhatsapp />
              </a>
            </span>{" "}
            {/* WhatsApp icon */}
            <span style={{ fontSize: "24px" }}>
              <a href="https://www.facebook.com/sundaronehostel/">
                <FaFacebook />
              </a>
            </span>{" "}
            {/* Facebook icon */}
            <span style={{ fontSize: "24px" }}>
              <a href="https://www.instagram.com/sundaronehostel/">
                <FaInstagram />
              </a>
            </span>{" "}
            {/* Instagram icon */}
            <a
              className="whatsapp-button"
              href="https://wa.me/9772379100?text=Hello%20there!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1195px-WhatsApp.svg.png"
                alt="WhatsApp Logo"
                className="whatsapp-logo"
              />
              <span className="whatsapp-text">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
