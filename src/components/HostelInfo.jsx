import React from "react";
import Slider from "react-slick";
import PhotoSlider from "./PhotoSlider";

const HostelInfo = () => {
  const photos = [
    "./hero.png",
    "./hero.png",
    "./hero.png",
  ];

  return (
    <div>
      <h2>Fully Furnished Hostel for Boys</h2>
      <PhotoSlider photos={photos} />
      <p>
        Strategically located within walking distance from Manipal University,
        this hostel offers all-in-one packages that cover your comfort, health,
        security, and community needs.
      </p>
      <p>
        Located less than a kilometre away from the premier Manipal University,
        this hostel is situated in a peaceful location. The hostel offers
        luxurious fully-furnished rooms that come with attached washrooms. The
        residents have access to premium amenities on the property and are
        offered four scrumptious meals every day.
      </p>
      <p>
        Every academic session, hundreds and thousands of students move to
        Jaipur, chasing their dreams and joining Manipal University. Sundarone
        Hostel supports their dreams by providing them with safe and comfortable
        accommodation in the area.
      </p>
      <p>
        Our PG near Manipal University is a luxurious property open for boys
        with a capacity of over 100 beds. The property welcomes students from
        nearby universities and offers them premium amenities and services to
        make their stay comfortable.
      </p>
      <ul>
        <li>
          Spacious fully furnished rooms with air-conditioner and geyser
          pre-installed
        </li>
        <li>Nutritious meals</li>
        <li>Housekeeping</li>
        <li>Laundry</li>
        <li>WiFi</li>
        <li>Power backup</li>
        <li>On-property parking</li>
        <li>Common recreational lounge</li>
        <li>Fitness centre/gym</li>
      </ul>
      <p>
        With all this and unconditional quality, Your-Space promises students
        comfort, health, community, and safety. Our PG is one of the very few
        accommodation properties, the team ensures maximum safety for residents.
        The property is gated and guarded. Additionally, CCTV Cameras and
        Biometric Entry Access systems are also installed on the property to
        maximise security.
      </p>
      <p>
        Property specific prices like onboarding charges, annual maintenance etc
        will be over and above the price quoted here.
      </p>
    </div>
  );
};

export default HostelInfo;
