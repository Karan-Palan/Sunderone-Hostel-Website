import React from "react";
import "./Address.css";

const Address = () => {
  return (
    <div className="content-container">
      <h2 className="header primaryText">Come, Have a visit</h2>
      <div className="map-container">
        <iframe
          title="Google Map"
          width="800"
          height="600"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1566.7934536308621!2d75.57095839262212!3d26.84786104211782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c498a2723b655%3A0x10ed77c33394958a!2sSundarone%20Office!5e0!3m2!1sen!2sus!4v1707465390852!5m2!1sen!2sus"
        ></iframe>
      </div>
    </div>
  );
};

export default Address;
