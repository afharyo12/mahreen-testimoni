import React from "react";
import ImageCarousel from '../components/RatingCarousel';

const RatingSection = () => {
  return (
    <>
      <section
        id="rating"
        className="relative w-full h-screen bg-neutral-800 pt-5"
      >
        <div className="w-full flex flex flex-col">
          <p className="font-domine font-normal text-6xl text-amber-500 text-center">
            Apa Kata Mereka?
          </p>
          <p className="font-google text-neutral-300 text-sm text-center pt-2">
            Ribuan pengguna telah membuktikan layanan kami. Simak pengalaman
            nyata dari mereka yang sudah bergabung bersama kami.
          </p>
          
        </div>
        
      </section>
      <ImageCarousel />
    </>
  );
};

export default RatingSection;
