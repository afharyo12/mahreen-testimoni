import React from "react";

// Data mock untuk 3 testimoni
const testimonialData = [
  {
    id: 1,
    name: "Arya Ade Wiguna",
    position: "Fullstack Developer di TechNusantara",
    content:
      "Semenjak kami mengintegrasikan platform ini ke dalam ekosistem syarikat, perubahan yang kami rasakan sangat ketara. Antaramuka yang ditawarkan bukan sahaja memanjakan mata dengan reka bentuk yang moden, malah sangat intuitif bagi pasukan pembangun mahupun pengguna akhir. Dokumentasi API yang disediakan sangat komprehensif, terstruktur dengan kemas, dan mudah dilaksanakan.",
    image: "./guy1.png",
  },
  {
    id: 2,
    name: "Yohanes Bintang Nugroho",
    position: "Pengurus Projek di Yayasan Inovasi Nusantara",
    content:
      "Sebagai organisasi yang rutin mengadakan latihan dan bimbingan untuk masyarakat di pelbagai daerah, kami memerlukan alat yang mantap untuk pengurusan projek sekaligus kolaborasi pasukan secara masa nyata. Aplikasi ini benar-benar menjawab keperluan kami dengan ciri-cirinya yang direka dengan teliti untuk memudahkan kerja berpasukan tanpa halangan.",
    image: "./guy2.png",
  },
  {
    id: 3,
    name: "Duta Alamin",
    position: "Machine Learning Engineer di DataVision Indonesia",
    content:
      "Dalam pekerjaan saya yang sehari-hari berhadapan dengan pemprosesan data bervolume besar dan seni bina sistem yang kompleks, kestabilan dan kelajuan adalah segalanya. Platform ini menyediakan infrastruktur yang sangat kukuh untuk menguruskan aliran kerja kami dengan tahap kecekapan yang luar biasa.",
    image: "./guy3.png",
  },
];

const TestimonySection = () => {

    const scrollToSlide = (slideId) => {
    const element = document.getElementById(slideId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest', // This is the magic property that prevents vertical scrolling
        inline: 'start'   // This ensures it scrolls horizontally to the start of the item
      });
    }
  };
 return (
    <>
      <section
        id="testimony"
        className="relative w-full min-h-screen bg-neutral-800 text-neutral-100"
      >
        {/* Karusel Kontena Utama */}
        {/* We can keep scroll-smooth, but overflow-x-auto snap-x snap-mandatory helps with swipe gestures too */}
        <div className="carousel flex flex-row w-full h-full relative z-10">
          {testimonialData.map((item, index) => (
            <div
              key={item.id}
              id={`slide${item.id}`}
              className="carousel-item relative w-full h-full flex flex-col lg:flex-row snap-center shrink-0"
            >
              {/* Bahagian Kiri: Gambar */}
              <div className="w-full lg:w-1/2 h-full flex items-end justify-center text-neutral-300 p-0">
                <img
                  src={item.image}
                  alt={`Gambar ${item.name}`}
                  className="w-full max-w-md h-[80vh] object-contain rounded-2xl transition-all duration-300 ease-in-out hover:scale-105"
                />
              </div>

              {/* Bahagian Kanan: Nama, Jawatan, dan Teks Testimoni */}
              <div className="w-full lg:w-1/2 h-full flex flex-col justify-center p-8 lg:pr-32">
                <div className="max-w-2xl">
                  <p className="font-domine text-5xl text-amber-500 mb-2 font-bold text-start pb-4">
                    {item.name}
                  </p>
                  <p className="font-google italic text-neutral-300 text-xl text-start">
                    {item.position}
                  </p>

                  <p className="text-justify font-inter font-light text-sm md:text-md text-neutral-300 italic pt-6">
                    "{item.content}"
                  </p>
                </div>
              </div>

              {/* Butang Navigasi Karusel (Kiri & Kanan) */}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 pointer-events-none">
                
                {/* PREVIOUS BUTTON */}
                <button
                  onClick={() => scrollToSlide(`slide${index === 0 ? testimonialData.length : index}`)}
                  className="btn btn-circle bg-neutral-900/50 hover:bg-neutral-900 border-none text-white pointer-events-auto backdrop-blur-sm"
                >
                  ❮
                </button>
                
                {/* NEXT BUTTON */}
                <button
                  onClick={() => scrollToSlide(`slide${index === testimonialData.length - 1 ? 1 : index + 2}`)}
                  className="btn btn-circle bg-neutral-900/50 hover:bg-neutral-900 border-none text-white pointer-events-auto backdrop-blur-sm"
                >
                  ❯
                </button>

              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TestimonySection;
