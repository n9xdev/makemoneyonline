'use client'

import { useEffect, useRef } from 'react'
import styles from './Reviews.module.css'

interface Review {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
  link?: string
  twitterLink?: string
  linkedinLink?: string
}

const reviews: Review[] = [
  {
    id: 1,
    avatar: 'https://framerusercontent.com/images/FSKuvfWzsCXYkHhXauGmWGKg5q8.png?scale-down-to=512',
    name: 'bertug',
    role: 'Co-founder',
    company: 'Tech Startup Inc.',
    content: 'Outstanding developer with strong technical skills. Delivered the project on time and exceeded our expectations in both quality and communication.',
    rating: 5,
    link: 'https://x.com/bertugoymak',
    twitterLink: 'https://x.com/bertugoymak',
    linkedinLink: 'https://www.linkedin.com/in/bertugoymak'
  },
  {
    id: 2,
    name: 'James Smith',
    avatar: "https://pbs.twimg.com/profile_images/889181579913945088/_dYs6dRF_400x400.jpg",
    role: 'Product Manager',
    company: 'Innovation Labs',
    content: 'Very professional and reliable. Quickly understood our requirements and implemented clean, scalable solutions.',
    rating: 5,
    link: 'https://twitter.com/jamessmith',
    twitterLink: 'https://twitter.com/jamessmith',
    linkedinLink: 'https://www.linkedin.com/in/jamessmith'
  },
  {
    id: 3,
    avatar: 'https://ugc.production.linktr.ee/6b4850ab-ab8a-42f1-a34a-c838fc290535_1000098510.jpeg?io=true&size=avatar-v3_0',
    name: 'Tapalytics',
    role: 'Founder',
    company: 'tap_protocol on Bitcoin',
    content: 'Excellent problem-solving skills. The developer handled complex features smoothly and provided valuable suggestions throughout the project.',
    rating: 5,
    link: 'https://x.com/tapalytics_',
    twitterLink: 'https://x.com/tapalytics_',
    linkedinLink: 'https://www.linkedin.com/in/tapalytics'
  },
  {
    id: 4,
    avatar: "https://cdn2.lnk.bi/profilepics/-1944293_20240608735.png",
    name: 'CVJury',
    role: 'CTO',
    company: 'AI Solutions',
    content: 'Great experience working together. Responsive, detail-oriented, and committed to delivering high-quality results.',
    rating: 5,
    link: 'https://www.linkedin.com/company/cvjury/',
    twitterLink: 'https://x.com/cvjury',
    linkedinLink: 'https://www.linkedin.com/company/cvjury/'
  },
  {
    id: 5,
    avatar: "https://pbs.twimg.com/profile_images/1910061306343727104/5SqVsCi2_400x400.png",
    name: 'GGSOL',
    role: 'Head of Development',
    company: 'Casino Game',
    content: 'Highly skilled and easy to work with. The project was completed efficiently with clear documentation and ongoing support.',
    rating: 5,
    link: 'https://x.com/GGSOLio',
    twitterLink: 'https://x.com/GGSOLio',
    linkedinLink: 'https://www.linkedin.com/company/ggsol'
  }
]

export default function Reviews() {
  const carouselRef = useRef<HTMLDivElement>(null)
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
    <section className={`${styles.section} ${styles.sectionDark}`} id="reviews" ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${styles.fadeIn}`}>Testimonials</h2>
        <p className={`${styles.sectionSubtitle} ${styles.fadeIn}`}>
          What our clients say about working with us
        </p>

        <div className={styles.carouselWrapper}>
          <div className={styles.carousel} ref={carouselRef}>
            {/* Duplicate reviews for seamless loop */}
            {[...reviews, ...reviews].map((review, index) => (
              <div key={`${review.id}-${index}`} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  {/* Name badge in top-left */}
                  <div className={styles.nameBadge}>
                    {review.name.toUpperCase()}
                  </div>
                  <div className={styles.avatarContainer}>
                    {review.avatar ? (
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className={styles.avatarImage}
                      />
                    ) : (
                      <div className={styles.avatarPlaceholder}>
                        <span>{review.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.reviewContent}>
                  <p className={styles.reviewerRole}>{review.role}</p>
                  <p className={styles.reviewText}>{review.content}</p>
                  <div className={styles.socialLinks}>
                    {review.twitterLink && (
                      <a
                        href={review.twitterLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label={`${review.name} Twitter`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    )}
                    {review.linkedinLink && (
                      <a
                        href={review.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label={`${review.name} LinkedIn`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

