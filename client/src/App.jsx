import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/WhyAreWeBetter/Value";

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
    </div>
  );
}

export default App;
