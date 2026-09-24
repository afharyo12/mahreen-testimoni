import { React } from "react";

const HeroSection = () => {
  return (
    <>
      <section id="hero" className="relative w-full h-screen">
        <div className="absolute inset-0 z-0 bg-neutral-900 opacity-100 "></div>
        <div className="absolute w-200 inset-0 mask-r-from-10% bg-[url('/bg-hero.jpg')] bg-cover bg-center bg-no-repeat bg-neutral-900 z-10 opacity-50"></div>
        <div className="relative z-20 flex flex-col justify-center h-full max-w-screen-xl mx-auto px-4">
          {/* Tambahkan w-full agar kontainer membentang penuh */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-8 px-4 ">
            {/* Bagian Kiri (50% Lebar) */}
            {/* Kontainer Bagian Kiri (Gambar) */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img
                src="/logo-mahreen-alt.png"
                // w-3/4 dan max-w mengontrol ukuran proporsional di mobile tanpa membuat celah vertikal.
                // md:h-128 mengambil alih hanya saat di layar besar.
                className="w-3/4 max-w-[280px] md:max-w-none md:w-auto md:h-128 object-contain"
                alt="Logo Mahreen"
              />
            </div>

            {/* Bagian Kanan (50% Lebar) */}
            {/* Tambahkan flex-col agar teks bertumpuk dari atas ke bawah */}
            <div className="w-1/2 flex flex-col gap-y-4">
              <p className="font-domine font-normal text-6xl text-amber-500 text-start">
                Berkarya untuk Indonesia
              </p>
              <p className="font-google text-xl text-white text-start opacity-75">
                Mahreen Indonesia hadir sebagai ruang kolaborasi. Temukan
                potensimu, asah kreativitas, dan wujudkan semangat
                <span className="italic"> #FromLearningToRealImpact </span> mulai hari ini.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
