// Amenities.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSwimmer, 
  faDumbbell, 
  faWifi, 
  faUtensils, 
  faShieldAlt, 
  faTv, 
  faParking,
  faCar,
  faCoffee,
  faBed
} from '@fortawesome/free-solid-svg-icons';
import "./Amenities.css";

const Amenities = () => {
  const amenityIcons = [
    { icon: faSwimmer, label: "Swimming Pool" },
    { icon: faDumbbell, label: "Gym" },
    { icon: faWifi, label: "Free Wi-Fi" },
    { icon: faUtensils, label: "Fresh Food" },
    { icon: faShieldAlt, label: "Security" },
    { icon: faTv, label: "TV Entertainment" },
    { icon: faParking, label: "Parking" },
    { icon: faCar, label: "Car Rental" },
    { icon: faCoffee, label: "Coffee Shop" },
    { icon: faBed, label: "Comfortable Rooms" }
  ];

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrolling(true);
    }, 50000); // Change this value to adjust scroll speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Amenities like no other in Town</span>
          <div className={`amenities-container ${scrolling ? 'scrolling' : ''}`}>
            {amenityIcons.map((amenity, index) => (
              <div key={index} className="amenity">
                <div className="amenity-icon">
                  <FontAwesomeIcon icon={amenity.icon} size="4x" />
                </div>
                <div className="amenity-label">{amenity.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
