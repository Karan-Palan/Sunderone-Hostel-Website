import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="white-gradient" />
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Sundarone <br />
              Hostels
              <br />
            </motion.h1>
          </div>
          <div className="flexColStart aText flexhero-des">
            <span>
              Affordable rates, top-notch facilities, vibrant student community.
            </span>
            <span>
              and much more. Experience the best of hostel living with us!
            </span>
          </div>
          <a href="https://forms.gle/GBTvo478AnNRWnn47">
            <button className="button">
              Book now !
            </button>
          </a>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1} end={24} duration={2} /> <span>+</span>
              </span>
              <span className="secondaryText">Hostels</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={5} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={10} duration={2} /> <span>+</span>
              </span>
              <span className="secondaryText">Facilities</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./head.jpeg" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
