import { useState } from "react";
import { Header } from "./layout/Header";
import HeroSection from "./layout/HeroSection";
import PetaSection from "./layout/PetaSection";
import TestimonySection from "./layout/TestimonySection";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <HeroSection/>
      <PetaSection/>
      <TestimonySection/>
    </>
  );
}

export default App;
