import React, { useState, useEffect } from 'react';
import "./landing.css";
import image1 from '../../assets/gavin-cc-zobcA-tXkAY-unsplash.jpg';
import image2 from '../../assets/pauline-iakovleva-4ATz1W7dVgE-unsplash.jpg';
import image3 from '../../assets/sohan-rayguru-3d1TdZfe-9I-unsplash.jpg';

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: image1,
      title: "Enjoy the Journey",
      description: "Enjoy Every Second With a Bike That's Never Been Easy Before."
    },
    {
      image: image2,
      title: "Cycle With Confidence",
      description: "Experience the peace of mind that comes with a bike that's never gonna let you down."
    },
    {
      image: image3,
      title: "Low Price, High Quality",
      description: "Get the best bike at the lowest price, with top-notch quality and performance."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="hero-section">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="carousel-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <div className="hero-buttons">
                <a href="#features" className="secondary-button">Learn More</a>
              </div>
            </div>
          </div>
        ))}
        
        <button className="carousel-control prev" onClick={prevSlide}>
          <span>&#10094;</span>
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          <span>&#10095;</span>
        </button>
        
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Landing;
