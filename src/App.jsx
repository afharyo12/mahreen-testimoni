import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import { Header } from "./layout/Header";
import HeroSection from "./layout/HeroSection";
import PetaSection from "./layout/PetaSection";
import RatingSection from "./layout/RatingSection";
import TestimonySection from "./layout/TestimonySection";
import Footer from "./layout/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <HeroSection/>
      <PetaSection/>
      {/* <RatingSection/> */}
      <TestimonySection/>
      <Footer/>
    </>
  );
}

export default App;
