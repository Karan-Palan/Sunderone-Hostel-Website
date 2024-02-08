import React from "react";
import "./Contacts.css";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StudentLife = () => {
  const phoneNumber = "02112314514"; // Phone number without spaces

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Student life</span>
          <span className="primaryText">
            Experience The Best Student life of Manipal
          </span>
          <span className="secondaryText">
            Experience the heartbeat of student life in Manipal with us. Our
            hostel offers a dynamic blend of academic support and social
            activities, creating an environment where friendships flourish and
            memories are made. From lively events to enriching experiences,
            every moment is an opportunity for growth and connection. Join us
            and discover the vibrant spirit of campus living at its best.{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Phone number</span>
                    <span className="secondaryText">
                      <a
                        href={`tel:${phoneNumber}`}
                        className="phoneNumberLink"
                      >
                        021 123 145 14
                      </a>
                    </span>
                  </div>
                </div>
                <div
                  className="flexCenter button callNowButton"
                  onClick={handleCallNow}
                >
                  Call now
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Instagram</span>
                    <span className="secondaryText">Idname</span>
                  </div>
                </div>
                <div className="flexCenter button">Check out our page</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <Slider {...settings}>
              <div>
                <img src="hero.png" alt="" />
              </div>
              <div>
                <img src="hero.png" alt="" />
              </div>
              <div>
                <img src="hero.png" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLife;

const GoldenHoverLink = () => {
  const linkStyle = {
    position: "relative",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "inherit",
  };

  return (
    <a href="/" style={linkStyle}>
      The Best Student Life in all of Manipal
      <style>
        {`
          a:hover::after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background-color: gold;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: width 0.3s ease;
          }
        `}
      </style>
    </a>
  );
};
