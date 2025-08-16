import React from 'react'

function Hero() {
  return (
    <div className="h-screen w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 
          className="font-nevan text-4xl font-bold"
          style={{ 
            background: 'linear-gradient(180deg, #38548E 0%, #537DC3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          K-pop Demon Hunters
        </h1>
      </div>
    </div>
  );
}

export default Hero