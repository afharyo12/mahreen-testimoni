import React from 'react';
import Slider from 'react-slick';

const ImageCarousel = () => {
  // Array of image URLs
  const images = [
    'https://placehold.co/800x400',
    'https://placehold.co/800x400',
    'https://placehold.co/800x400',
    'https://placehold.co/800x400'
    
  ];

  // Slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Enable infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1 // Number of slides to scroll
  };

  return (
    <div className="w-4/5 m-auto">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;