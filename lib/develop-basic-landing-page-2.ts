// components/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Journal</h1>
        <p className="text-lg mb-8">
          Journal is a simple and elegant way to keep track of your thoughts and experiences.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;