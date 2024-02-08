import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Content.css"; // Importing your main CSS file for the color scheme

const Content = () => {
  const [videoHeight, setVideoHeight] = useState(0); // Initial height

  const videoWidth = 800; // Assuming width is 800px
  const aspectRatioWidth = 360;
  const aspectRatioHeight = 201.98;

  useEffect(() => {
    // Calculate height based on aspect ratio (360:201.98)
    const height = (videoWidth * aspectRatioHeight) / aspectRatioWidth;
    setVideoHeight(height);
  }, []);

  const videoLinks = [
    "https://www.youtube.com/embed/ULCk990OKWE",
    "https://www.youtube.com/embed/naGZ7sgqiKo",
    "https://www.youtube.com/embed/TGDf_kAd3jw"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Adjust speed for auto sliding
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust speed for auto sliding
    centerMode: true,
    centerPadding: "0", // No padding
    arrows: true // Show arrows
  };

  return (
    <div className="content-container">
      <h2 className="header primaryText">What People Say About Us </h2>
      <div className="slider-container">
        <Slider {...settings}>
          {videoLinks.map((link, index) => (
            <div key={index}>
              <iframe
                title={`YouTube Video ${index + 1}`}
                width={videoWidth}
                height={videoHeight} // Set height dynamically based on aspect ratio
                src={link}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Content;
