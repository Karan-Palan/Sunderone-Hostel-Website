import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Amenities.css";

const Amenities = () => {
  const imageLinks = [
    "https://via.placeholder.com/800x600?text=Image+1",
    "https://via.placeholder.com/800x600?text=Image+2",
    "https://via.placeholder.com/800x600?text=Image+3"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
    centerMode: true,
    centerPadding: "0", 
    arrows: true 
  };

  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Amenities like no other</span>
          <div className="slider-container">
            <Slider {...settings}>
              {imageLinks.map((link, index) => (
                <div key={index}>
                  <img src={link} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
