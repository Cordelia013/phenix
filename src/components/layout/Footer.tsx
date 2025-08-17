import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <section id="hero" className="min-h-screen w-screen relative">
      <div className="relative w-full h-full min-h-screen">
        <Image
          src="/image46.png"
          alt="K-Pop Demon Hunters - HUNTR/X vs Saja Boys"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
             <div className="absolute inset-0 z-10 flex items-center justify-center mt-[100px]">
         <Image src="/image45.png" alt="K-Pop Demon Hunters - HUNTR/X vs Saja Boys" width={1000} height={1000} />
       </div>
       
                                                               <div className="absolute bottom-8 left-8 z-20 flex gap-4 items-center">
            <div className="flex gap-4 items-center">
              <div style={{
                fontFamily: 'Old Standard TT',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: 'white'
              }}>
                K-pop demon hunter @2025
              </div>
              <div style={{
                fontFamily: 'Old Standard TT',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: 'white'
              }}>
                Design by F1ReF0X764
              </div>
              <div style={{
                fontFamily: 'Old Standard TT',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: 'white'
              }}>
                Development by Yukina
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20" style={{
            fontFamily: 'Old Standard TT',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '12px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: 'white'
          }}>
            Mentions Légales
          </div>
     </section>
  )

  
}

export default Footer