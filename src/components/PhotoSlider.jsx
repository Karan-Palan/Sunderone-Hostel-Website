import React from 'react';
import Slider from 'react-slick';


const PhotoSlider = ({ photos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {photos.map((photo, index) => (
        <div key={index}>
          <img src={photo} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default PhotoSlider;