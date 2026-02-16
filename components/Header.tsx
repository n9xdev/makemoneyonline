'use client'

import { useState, useEffect } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(targetId)
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
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          <nav className={styles.desktopNav}>
            <a href="#hero" className={styles.navLink} onClick={(e) => handleNavClick(e, '#hero')}>Home</a>
            <a href="#projects" className={styles.navLink} onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
            <a href="#reviews" className={styles.navLink} onClick={(e) => handleNavClick(e, '#reviews')}>Testimonials</a>
          </nav>
          
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>
      
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
        <button 
          className={styles.mobileMenuClose}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <i className="fas fa-times"></i>
        </button>
        
        <nav className={styles.mobileNav}>
          <a href="#hero" className={styles.mobileNavLink} onClick={(e) => handleNavClick(e, '#hero')}>Home</a>
          <a href="#reviews" className={styles.mobileNavLink} onClick={(e) => handleNavClick(e, '#reviews')}>Reviews</a>
          <a href="#projects" className={styles.mobileNavLink} onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
        </nav>
      </div>
    </>
  )
}

