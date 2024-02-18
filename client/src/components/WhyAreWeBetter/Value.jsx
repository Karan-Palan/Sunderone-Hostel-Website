import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Value.css";
  

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./room1.jpeg" alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">Why Sundarone</span>

          <span className="primaryText">
            {" "}
            <a href="/">Why are we better ?</a>
          </span>

          <span className="secondaryText">
            Choose us for unbeatable value, unmatched facilities, and a vibrant
            student community.
            <br />
            Experience hostel living at its finest!{" "}
            <span
              style={{
                position: "relative",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                Get to know more here
              </a>
              <style>
                {`
      span:hover::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px; /* Adjust the thickness of the line as needed */
        background-color: gold; /* Set the color of the line */
        position: absolute;
        bottom: 0;
        left: 0;
        transition: width 0.3s ease; /* Animation duration and easing */
      }
    `}
              </style>
            </span>
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  uuid={i}
                  key={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton ">
                      {/* just for getting state of item */}
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
