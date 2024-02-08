import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/WhyAreWeBetter/Value";
import Footer from "./components/Footer/Footer";
import StudentLife from "./components/Contacts/Contacts";
import Content from "./components/Content/Content";

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
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Residencies />
      <Value />
      <Content />
      <StudentLife />
      <Footer />
    </div>
  );
}

export default App;
