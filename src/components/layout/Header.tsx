'use client'

import React, { useEffect, useState } from 'react'
import { NavigationMenu } from '../ui/NavigationMenu'
import Image from 'next/image'

function Header() {
  const [isOnDarkSection, setIsOnDarkSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      
      // Détecter les sections sombres (approximation basée sur la position de scroll)
      // Vous devrez ajuster ces valeurs selon vos sections
      const darkSections = [
        { start: viewportHeight, end: viewportHeight * 2 }, // Section playlist par exemple
        { start: viewportHeight * 3, end: viewportHeight * 4 }, // Autre section sombre
      ]
      
      const isDark = darkSections.some(section => 
        scrollY >= section.start && scrollY <= section.end
      )
      
      setIsOnDarkSection(isDark)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const headerStyle = {
    color: isOnDarkSection ? '#ffffff' : '#000000',
    filter: isOnDarkSection ? 'none' : 'none'
  }
  return (
    <header className='fixed top-0 left-0 right-0 z-50 pointer-events-none'>
      <div className='container mx-auto px-8'>
        <div className='flex justify-between items-center h-16 pointer-events-auto transition-all duration-300' style={headerStyle}>
          {/* Logo */}
          <div className='flex items-center space-x-3'>
          <Image 
            src='/logo.svg' 
            alt='K-Pop Demon Hunters Logo' 
            width={32} 
            height={32}
            style={{ filter: isOnDarkSection ? 'brightness(0) invert(1)' : 'brightness(0)' }}
          />
         
          </div>

          {/* Sound Icon */}  
          <div className='flex items-center space-x-10'>
            {/* Navigation */}
            <NavigationMenu />
          <Image 
            src='/sound.svg' 
            alt='Sound' 
            width={24} 
            height={24} 
            // className="hover:opacity-70 transition-opacity cursor-pointer" 
            style={{ filter: isOnDarkSection ? 'brightness(0) invert(1)' : 'brightness(0)' }}
          />
          </div>



          
        </div>
      </div>
    </header>
  )
}

export default Header