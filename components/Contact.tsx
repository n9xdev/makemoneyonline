'use client'

import { useEffect, useRef } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      const fadeElements = sectionRef.current.querySelectorAll(`.${styles.fadeIn}`)
      fadeElements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className={`${styles.section} ${styles.sectionLight}`} id="contact" ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${styles.fadeIn}`}>You can find me on here</h2>
        
        <div className={styles.mapWrapper}>
          <div className={`${styles.mapContainer} ${styles.fadeIn}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45756.78901234567!2d26.1833!3d45.8500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474b5f7b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sCovasna%2C%20Romania!5e0!3m2!1sen!2sro!4v1234567890123!5m2!1sen!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
              title="Covasna, Romania Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

