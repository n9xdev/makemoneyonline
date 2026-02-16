'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import { StaticImageData } from 'next/image'
import agentipyImg from '@/assets/img/agentipy.png'
import luckImg from '@/assets/img/luck.png'
import snakeImg from '@/assets/img/snake.png'
import sintraImg from '@/assets/img/sintra.png';


interface BackgroundImage {
  image: StaticImageData
  alt: string
  category: string
  position: {
    left?: string
    right?: string
    top?: string
    bottom?: string
  }
  rotation?: number // Rotation angle in degrees for 3D effect
  side?: 'left' | 'right' // Which side the image comes from
}

// Add more project images here for the background
// Images are arranged in one horizontal line, evenly spaced
const backgroundImages: BackgroundImage[] = [
  {
    image: sintraImg,
    alt: 'Sintra',
    category: 'Multi AI Agent',
    position: { left: '0%', top: '50%' },
    rotation: 0,
    side: 'left'
  },
  {
    image: agentipyImg,
    alt: 'Agentipy',
    category: 'Solana AI Agent',
    position: { left: '0%', top: '50%' },
    rotation: 0,
    side: 'left'
  },
  {
    image: snakeImg,
    alt: 'Snake Game',
    category: 'Skill-based games',
    position: { left: '0%', top: '50%' },
    rotation: 0,
    side: 'right'
  },
  {
    image: luckImg,
    alt: 'Luck',
    category: 'Casino',
    position: { left: '0%', top: '50%' },
    rotation: 0,
    side: 'right'
  }
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current || typeof window === 'undefined') return

    // Check if script is already loaded
    const existingScript = document.querySelector('script[data-tubes-cursor]')
    if (existingScript) return

    // Load the ES module directly in the browser using a script tag
    const script = document.createElement('script')
    script.type = 'module'
    script.setAttribute('data-tubes-cursor', 'true')
    script.textContent = `
      import TubesCursor from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js';
      const canvas = document.getElementById('canvas');
      if (canvas) {
        TubesCursor(canvas, {
          tubes: {
            colors: ["#ffffff", "#d0d0d0", "#a0a0a0", "#808080"],
            lights: {
              intensity: 100,
              colors: ["#ffffff", "#e0e0e0", "#c0c0c0"]
            }
          }
        });
        canvas.style.backgroundColor = 'transparent';
      }
    `
    document.head.appendChild(script)

    return () => {
      // Cleanup: remove script on unmount
      const scriptToRemove = document.querySelector('script[data-tubes-cursor]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [])

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector('#projects')
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector('#projects')
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.rainContainer}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className={styles.rainDrop} style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${0.5 + Math.random() * 0.5}s`,
          }} />
        ))}
      </div>
      <div className={styles.backgroundImages}>
        {backgroundImages.map((bgImage, index) => (
          <div
            key={index}
            className={styles.imageWindContainer}
            style={{
              ...bgImage.position,
              '--rotation': `${bgImage.rotation || 0}deg`,
              '--wind-delay': `${index * 0.5}s`,
            } as React.CSSProperties & { '--rotation': string; '--wind-delay': string }}
          >
            <img
              src={bgImage.image.src}
              alt={bgImage.alt}
              className={styles.backgroundImage}
            />
            <div className={styles.categoryLabel}>
              <span className={styles.categoryText}>{bgImage.category}</span>
              <div className={styles.categoryGlow}></div>
            </div>
            <div className={styles.windEffect}>
              <div className={styles.windStreak}></div>
              <div className={styles.windStreak}></div>
              <div className={styles.windStreak}></div>
              <div className={styles.windStreak}></div>
              <div className={styles.windStreak}></div>
            </div>
          </div>
        ))}
      </div>
      <canvas ref={canvasRef} id="canvas" className={styles.canvas}></canvas>
      
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>GenAI DeFi Engineering</h1>
        <h2 className={styles.heroSubtitle}>The sky has no limits. Why limit yourself</h2>
        <p className={styles.heroDescription}>
        Rust • Python • Solidity wizard building AI agents, prediction markets & autonomous traders on Solana • EVM • BTC

        </p>
        
        <div className={styles.socialSection}>
          <p className={styles.socialTitle}>Follow me here</p>
          <div className={styles.socialIcons}>
            <a href="https://twitter.com/intent/user?screen_name=soulcrancerdev" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X (Twitter)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.80L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://t.me/soulcrancerdev" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Telegram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2L2 12.5l7 1L19 8l-8.5 7.5 1 7L21.5 2z"/>
              </svg>
            </a>
            {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a> */}
            <a href="https://youtube.com/@soulcrancerdev" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
              </svg>
            </a>
            <a href="mailto:misssilverbeauty0927@gmail.com" className={styles.socialIcon} aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
            {/* <a href="https://wa.me/16085717937" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a> */}
            <a href="https://github.com/enlomy" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
      
      <a 
        href="#projects" 
        onClick={handleScrollClick}
        className={styles.scrollButton}
        aria-label="Scroll to projects section"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.scrollButtonIcon}>
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </a>

    </section>
  )
}
