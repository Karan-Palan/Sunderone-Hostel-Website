import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/WhyAreWeBetter/Value";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

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
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
