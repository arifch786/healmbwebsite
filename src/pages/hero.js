import React from 'react';
import heroimage from "../assets/hero.jpg";
import button1 from "../assets/Group 6.png";
import button2 from "../assets/Frame 19.png";

const Hero = () => {
  return (
    <div id='home'>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroimage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Transform Your <br /> Mind, Body, and Soul
          </h1>
          <p
            className="max-w-xl mb-8 text-lg md:text-xl"
            style={{ fontFamily: "'Aktiv Grotesk', sans-serif" }}
          >
            HealMindBody is designed to support your wellness journey with personalized meditation experiences, 
            whether you're seeking relaxation, stress relief, focus, or sleep support. Our AI-optimized meditations 
            evolve with you, offering unique sessions based on your needs at any given moment.
          </p>

          {/* App Store Buttons */}
          <div className="flex space-x-4">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={button2} alt="Download on the App Store" className="w-32 h-12" />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src={button1} alt="Get it on Google Play" className="w-32 h-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
