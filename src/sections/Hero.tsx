import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
         <section id="hero" className="min-h-screen w-screen">  
       <div className='flex flex-col justify-center items-center pt-11'>
          <h1 className="font-bold leading-tight hero-title-gradient font-nevan ">
            <span className="block text-8xl">K-POP</span>
            <span className="block text-7xl">DEMON</span>
            <span className="block text-6xl">HUNTERS</span>
          </h1>
        </div>
                 <div className='flex justify-between items-end px-16 mt-8'>
         <p className="text-base w-1/4 font-['Old_Standard_TT'] text-black" >
          Dans un monde où chaque rythme porte de la magie, HUNTR/X s&apos;élève avec des hymnes flamboyants pour protéger la lumière. Mais dans l&apos;ombre, The Saja Boys transforment la mélodie en sombre tentation. Leur affrontement n&apos;est pas qu&apos;une performance — c&apos;est la guerre.
         </p>
          <Image src='/photo1.png' alt='K-Pop Demon Hunters - HUNTR/X vs Saja Boys' width={600} height={500} />
        </div>
    </section>
  );
}

export default Hero