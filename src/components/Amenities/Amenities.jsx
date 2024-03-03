// Amenities.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSwimmer, 
  faDumbbell, 
  faWifi, 
  faUtensils, 
  faShieldAlt, 
  faTv, 
  faParking 
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
    { icon: faParking, label: "Parking" }
  ];

  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Amenities like no other in Town</span>
          <div className="amenities-container">
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
