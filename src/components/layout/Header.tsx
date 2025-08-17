import React from 'react'
import { NavigationMenu } from '../ui/NavigationMenu'
import Image from 'next/image'

function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50  '>
      <div className='container mx-auto px-8'>
        <div className='flex justify-between items-center h-16 mix-blend-difference'>
          {/* Logo */}
          <div className='flex items-center space-x-3 mix-blend-difference'>
          <Image src='/logo.svg' alt='K-Pop Demon Hunters Logo' width={32} height={32} className="mix-blend-difference" />
         
          </div>

          {/* Sound Icon */}  
          <div className='flex items-center space-x-10 mix-blend-difference'>
            {/* Navigation */}
            <NavigationMenu />
          <Image src='/sound.svg' alt='Sound' width={24} height={24} className="hover:opacity-70 transition-opacity cursor-pointer mix-blend-difference" />
          </div>



          
        </div>
      </div>
    </header>
  )
}

export default Header