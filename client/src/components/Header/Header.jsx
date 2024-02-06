import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        <img src="./copy.png" alt="logo" width={100} />
        <div className="flexCenter h-menu">
          <a href="#residencies">Residencies</a>
          <a href="#value">Our Facilities</a>
          <a href="#get-started">Student Life</a>
          <button className="button">
            <a href="sundarone email">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
