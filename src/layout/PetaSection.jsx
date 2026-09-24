import React, { useState } from "react";
import PetaIndonesia from "../components/PetaIndonesia";
const PetaSection = () => {
  const [tooltip, setTooltip] = useState("");

  return (
    <section
      id="peta"
      className="relative w-full h-screen bg-neutral-900 text-neutral-100 overflow-hidden flex flex-col  items-center justify-center py-20 px-4 md:flex-row"
    >
      <div className="text-center mb-8 z-10 max-w-xl ps-5">
        <p className="font-domine text-5xl text-amber-500 mb-2 font-bold text-start pb-4">
          Jejak Dampak Mahreen
        </p>
        <p className="font-google text-neutral-300 text-xl text-start">
          Mahreen telah menjangkau dan membantu sebanyak <span className="text-amber-500 text-2xl">19000+</span>  talenta muda dari <span className="text-amber-500 text-2xl">38</span> provinsi di Indonesia untuk terus berkembang dan menciptakan dampak nyata.
        </p>
      </div>

      <div className="w-full mx-auto">
        <PetaIndonesia />
      </div>
    </section>
  );
};

export default PetaSection;
