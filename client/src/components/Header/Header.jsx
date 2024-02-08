import React from "react";
import "./Header.css";

const Header = () => {
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
            <a
              href="tel:
              9772379100"
            >
              Contact Us
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
