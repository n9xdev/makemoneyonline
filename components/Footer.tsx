'use client'

import styles from './Footer.module.css'

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
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
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContact}>
          <div className={styles.contactItem}>
            <i className="fas fa-envelope"></i>
            <a href="mailto:misssilverbeauty0927@gmail.com" className={styles.contactLink}>
              misssilverbeauty0927@gmail.com
            </a>
          </div>
          <div className={styles.contactItem}>
            <i className="fas fa-phone"></i>
            <a href="tel:+16085717937" className={styles.contactLink}>
              +1 (608) 571-7937
            </a>
          </div>
          {/* <div className={styles.contactItem}>
            <i className="fas fa-map-marker-alt"></i>
            <span className={styles.contactText}>Romania | Covasna</span>
          </div> */}
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2026 Advanced Developer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

