import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        <a href="link">
          {" "}
          <img src="./logo.png" alt="logo" width={200} />{" "}
        </a>
        <div className="flexCenter h-menu">
          <a href="#residencies">Hostels</a>
          <a href="#value">Our Facilities</a>
          <a href="#get-started">Student Life</a>
          <button className="button">
            <a href="tel:9772379100">Contact Us</a>
          </button>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#residencies">Hostels</a>
          <a href="#value">Our Facilities</a>
          <a href="#get-started">Student Life</a>
          <button className="button">
            <a href="tel:9772379100">Contact Us</a>
          </button>
        </div>
      )}
    </section>
  );
};

export default Header;
