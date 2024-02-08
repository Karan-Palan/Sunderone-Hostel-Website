import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
          <span className="primaryText">Come, Have a visit !</span>
          <span className="secondaryText">
            Sundarone Main office, near Sundarone Boys Hostel, Manipal
            University Jaipur, Dehmi Kalan,Bagru, Jaipur. Rajasthan-303007
          </span>
          <div className="flexCenter f-menu">
            <span style={{ fontSize: "24px" }}>
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
