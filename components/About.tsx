'use client'

import { useEffect, useRef } from 'react'
import styles from './About.module.css'

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)

            // Animate progress bars
            const progressBars = entry.target.querySelectorAll('[data-width]')
            progressBars.forEach((bar) => {
              const width = bar.getAttribute('data-width')
              if (bar instanceof HTMLElement && width) {
                setTimeout(() => {
                  bar.style.width = width + '%'
                }, 300)
              }
            })
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
    <section className={`${styles.section} ${styles.sectionLight}`} id="about" ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${styles.fadeIn}`}>About Me</h2>
        <p className={`${styles.sectionSubtitle} ${styles.fadeIn}`}>
          A passionate developer with expertise in modern software technologies and innovative solutions
        </p>

        <div className={styles.aboutContent}>
          <div className={styles.aboutGrid}>
            <div className={`${styles.aboutCard} ${styles.fadeIn}`}>
              <h3>Professional Background</h3>
              <p>
                With over 10 years of experience in software development, I specialize in creating scalable web applications on blockchain and digital solutions. My expertise spans full-stack integration AI development, cloud architecture, and modern frameworks.
              </p>
              <p>
                I believe in writing clean, efficient code and creating systems that are both powerful and maintainable. My approach combines technical excellence with strategic thinking to deliver solutions that drive real business results.
              </p>

              <div className={styles.skillsContainer}>
                <div className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>JavaScript / TypeScript</span>
                    <span className={styles.skillPercentage}>95%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} data-width="95"></div>
                  </div>
                </div>

                <div className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>React & Vue.js</span>
                    <span className={styles.skillPercentage}>90%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} data-width="90"></div>
                  </div>
                </div>

                <div className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>Python & Backend</span>
                    <span className={styles.skillPercentage}>95%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} data-width="95"></div>
                  </div>
                </div>

                <div className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>Rust & Backend</span>
                    <span className={styles.skillPercentage}>90%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} data-width="90"></div>
                  </div>
                </div>

                <div className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>Node.js & Backend</span>
                    <span className={styles.skillPercentage}>92%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} data-width="92"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.aboutCard} ${styles.fadeIn}`}>
              <h3>Experience & Education</h3>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDate}>2020 - Present</div>
                  <h4 className={styles.timelineTitle}>Blockchain Full-Stack Developer</h4>
                  <p className={styles.timelineDescription}>
                    Leading development teams and architecting enterprise-level solutions on blockchain for global clients.
                  </p>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineDate}>2018 - 2020</div>
                  <h4 className={styles.timelineTitle}>Senior Full-Stack Developer</h4>
                  <p className={styles.timelineDescription}>
                    Developed responsive web applications across AI using modern frameworks and collaborated with UX teams.
                  </p>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineDate}>2016 - 2018</div>
                  <h4 className={styles.timelineTitle}>Web Developer</h4>
                  <p className={styles.timelineDescription}>
                    Built and maintained websites and applications, gaining expertise in full-stack development.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <h4>Certifications</h4>
                <p style={{ marginTop: '0.5rem', color: '#aaa' }}>
                  &#8226; AWS Solutions Architect &#8226; Google Cloud Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

