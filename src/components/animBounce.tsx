'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimBounceProps {
  isPlaying: boolean
  children: React.ReactNode
}

export default function AnimBounce({ isPlaying, children }: AnimBounceProps) {
  const [bounce, setBounce] = useState(0)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    if (!isPlaying) {
      setBounce(0)
      setParticles([])
      return
    }

    const animate = () => {
      if (!isPlaying) {
        setBounce(0)
        setParticles([])
        return
      }

      const intensity = Math.random()
      setBounce(intensity * 15)
      
      if (intensity > 0.6 && Math.random() > 0.7) {
        const newParticles = Array.from({ length: 3 }, (_, i) => ({
          id: Date.now() + i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2
        }))
        
        setParticles(prev => [...prev.slice(-20), ...newParticles])
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying])

  return (
    <div className="relative">
      <div 
        className="transition-transform duration-100"
        style={{ 
          transform: `scale(${1 + bounce * 0.01}) translateY(${-bounce * 0.5}px)` 
        }}
      >
        {children}
      </div>
      
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute pointer-events-none animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'floatUp 2s ease-out forwards',
            opacity: 0.6
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}