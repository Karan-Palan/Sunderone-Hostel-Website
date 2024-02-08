import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/WhyAreWeBetter/Value";
import Footer from "./components/Footer/Footer";
import StudentLife from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Residencies/>
      <Value/>
      <StudentLife/>
      <Footer/>
    </div>
  );
}

export default App;
