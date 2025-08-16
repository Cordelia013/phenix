import React from 'react'

function Hero() {
  return (
    <div className="h-screen w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 
          className="font-nevan font-bold text-center text-hero-title hero-title-gradient text-red-500 bg-yellow-100"
        >
          <div>K-pop</div>
          <div>Demon</div>
          <div>Hunters</div>
        </h1>
      </div>
    </div>
  );
}

export default Hero