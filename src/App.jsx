import React from "react";
import styles from "./components/Overlay/Overlay.css";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import CarouselLanding from "./components/Carousel/CarouselLanding";
import Info from "./components/InfoSection/InfoSection";
import Alert from "./components/AlertSection/AlertSection";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
function ShowAlert() {
  alert(
    "Tried to replicate all effects in the original site.NavBar dropdown Mean haven't built completely working on it."
  );
}
function App() {
  return (
    <Router>
      <Navbar styles={"Overlay"} />
      <Alert />
      <CarouselLanding />
      <div className="lrmargin">
        <Info />
        <Testimonial />
      </div>
      <Footer />
      <ShowAlert />
    </Router>
  );
}

export default App;
