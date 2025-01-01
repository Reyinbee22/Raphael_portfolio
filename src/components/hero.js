import React from 'react';
import background_image from '../assets/background_icon.jpg'; // Import your background image

const Hero = () => {
  return (
    <section className="hero">
      <div className="background-blur"></div> {/* Blur overlay */}
      <div className="hero-content">
        <h1>Hi, 
          <br/>
          I'm Rapheal Oyelami</h1>
        <p>Turning Data into Insights</p>
        <a href="https://github.com/raphaeloyelami">See My Work</a>
      </div>
    </section>
  );
};

export default Hero;
