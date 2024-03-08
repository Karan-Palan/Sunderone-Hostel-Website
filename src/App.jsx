import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/WhyAreWeBetter/Value";
import Footer from "./components/Footer/Footer";
import StudentLife from "./components/Contacts/Contacts";
import Content from "./components/Content/Content";
import Amenities from "./components/Amenities/Amenities";
import Address from "./components/Address/Address";
import HostelInfo from "./components/HostelInfo";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const maxScroll = documentHeight - windowHeight;
      const progress = (scrollPosition / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      <Residencies />
      <Value />
      <Content />
      <StudentLife />
      <Amenities/>
      <Address/>
      <Footer />
      {/* <HostelInfo/> */}
    </div>
  );
}

export default App;
