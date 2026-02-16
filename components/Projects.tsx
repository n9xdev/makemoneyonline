'use client'
import casinoImg from "@/assets/img/casino.png";
import casinoImg2 from "@/assets/img/casino2.png";
import casinoImg3 from "@/assets/img/casino3.png";
import casinoImg4 from "@/assets/img/casino4.png";
import casinoImg5 from "@/assets/img/casino5.png";
import snakeImg from "@/assets/img/snake.png";
import snakeImg2 from "@/assets/img/snake2.png";
import snakeImg3 from "@/assets/img/snake3.png";
import snakeImg4 from "@/assets/img/snake4.png";
import snakeImg5 from "@/assets/img/snake5.png";
import btImg from "@/assets/img/bt.png";
import btImg2 from "@/assets/img/bt2.png";
import btImg3 from "@/assets/img/bt3.png";
import btImg4 from "@/assets/img/bt4.png";
import btImg5 from "@/assets/img/bt5.png";
import luckImg from "@/assets/img/luck.png";
import luckImg2 from "@/assets/img/luck2.png";
import luckImg3 from "@/assets/img/luck3.png";
import luckImg4 from "@/assets/img/luck4.png";
import luckImg5 from "@/assets/img/luck5.png";
import sintra from "@/assets/img/sintra.png";
import sintra2 from "@/assets/img/sintra2.png";
import sintra3 from "@/assets/img/sintra3.png";
import sintra4 from "@/assets/img/sintra4.png";
import sintra5 from "@/assets/img/sintra5.png";
import ocoyaImg from "@/assets/img/ocoya.png";
import ocoyaImg2 from "@/assets/img/ocoya2.png";
import ocoyaImg3 from "@/assets/img/ocoya3.png";
import ocoyaImg4 from "@/assets/img/ocoya4.png";
import ocoyaImg5 from "@/assets/img/ocoya5.png";
import agentipyImg from "@/assets/img/agentipy.png";
import agentipyImg2 from "@/assets/img/agentipy2.png";
import agentipyImg3 from "@/assets/img/agentipy3.png";
import agentipyImg4 from "@/assets/img/agentipy4.png";
import agentipyImg5 from "@/assets/img/agentipy5.png";
import storyfileImg from "@/assets/img/storyfile.png";
import storyfileImg2 from "@/assets/img/storyfile2.png";
import storyfileImg3 from "@/assets/img/storyfile3.png";
import storyfileImg4 from "@/assets/img/storyfile4.png";
import storyfileImg5 from "@/assets/img/storyfile5.png";
import cvjuryImg from "@/assets/img/cvjury.png";
import cvjuryImg2 from "@/assets/img/cvjury2.png";
import cvjuryImg3 from "@/assets/img/cvjury3.png";
import cvjuryImg4 from "@/assets/img/cvjury4.png";
import cvjuryImg5 from "@/assets/img/cvjury5.png";
import blogImg from "@/assets/img/blog.png";
import blogImg2 from "@/assets/img/blog2.png";
import blogImg3 from "@/assets/img/blog3.png";
import blogImg4 from "@/assets/img/blog4.png";
import blogImg5 from "@/assets/img/blog5.png";
import pumpfunImg from "@/assets/img/pumpfun.png";
import pumpfunImg2 from "@/assets/img/pumpfun2.png";
import pumpfunImg3 from "@/assets/img/pumpfun3.png";
import pumpfunImg4 from "@/assets/img/pumpfun4.png";
import pumpfunImg5 from "@/assets/img/pumpfun5.png";
import onyxImg from "@/assets/img/onyx.png";
import onyxImg2 from "@/assets/img/onyx2.png";
import onyxImg3 from "@/assets/img/onyx3.png";
import onyxImg4 from "@/assets/img/onyx4.png";
import onyxImg5 from "@/assets/img/onyx5.png";
// or: ../assets/projects/casino.png

import { useEffect, useRef, useState } from 'react'
import styles from './Projects.module.css'
import { StaticImageData } from "next/image";

interface Project {
  images: StaticImageData[] // Array of images for carousel
  badge: string
  title: string
  link: string
  description: string
  tech: string[]
  stats: { icon: string; value: string }[]
}

const projects: Project[] = [
  {
    images: [sintra, sintra2, sintra3, sintra4, sintra5],
    badge: 'AI Agent',
    title: 'AI media manager',
    description: 'AI social media manager that acts like a multi-agent team (researching topics, creating brand-consistent content/images, scheduling, and analyzing performance).',
    link: "https://sintra.ai/soshie",
    tech: ['React vite', 'node', 'AI', 'python', 'postgres'],
    stats: [
      { icon: 'fas fa-download', value: '50K+' },
      { icon: 'fas fa-heart', value: '95%' }
    ]
  },
  {
    images: [agentipyImg, agentipyImg2, agentipyImg3, agentipyImg4, agentipyImg5],
    badge: 'AI Agent',
    title: 'AgentiPy',
    description: 'AgentiPy is an open-source Python framework that enables AI agents to seamlessly perform on-chain actions on Solana and Base, bringing blockchain power.',
    link: "https://agentipy.fun/",
    tech: ['python', 'solana', 'openai', 'LLM', 'node'],
    stats: [
      { icon: 'fas fa-download', value: '50K+' },
      { icon: 'fas fa-heart', value: '95%' }
    ]
  }, 
  {
    images: [snakeImg, snakeImg2, snakeImg3, snakeImg4, snakeImg5],
    badge: 'Blockchain',
    title: 'Slither Game',
    description: 'Slither game development requires high-performance real-time systems, scalable multiplayer architecture to deliver smooth, addictive gameplay.',
    link: "https://pvplabs.xyz/",
    tech: [ 'node', 'mongodb', 'solana', 'TypeScript'],
    stats: [
      { icon: 'fas fa-download', value: '50K+' },
      { icon: 'fas fa-heart', value: '95%' }
    ]
  },
  {
    images: [casinoImg, casinoImg2, casinoImg3, casinoImg4, casinoImg5],
    badge: 'Blockchain',
    title: 'GGsol Game',
    description: 'Successful casino game development blends regulatory compliance, advanced security, and seamless performance to create trusted, engaging gameplay.',
    link: "https://ggsol.io/",
    tech: ['React', 'TypeScript', 'solana', 'Node.js'],
    stats: [
      { icon: 'fas fa-code', value: '15K' },
      { icon: 'fas fa-users', value: '5K+' }
    ]
  },
  {
    images: [luckImg, luckImg2, luckImg3, luckImg4, luckImg5],
    badge: 'Blockchain',
    title: 'Luck Game',
    description: 'Casino game development demands secure, compliant, and high-performance systems that deliver fair play and engaging user experiences.',
    link: "https://luck.io/",
    tech: ['TypeScript', 'React vite', 'Node.js', 'mongodb'],
    stats: [
      { icon: 'fas fa-code', value: '15K' },
      { icon: 'fas fa-users', value: '5K+' }
    ]
  },
  {
    images: [btImg, btImg2, btImg3, btImg4, btImg5],
    badge: 'Blockchain',
    title: 'Bitcoin Mining Game',
    description: 'Bitcoin mining game development requires balanced in-game economics, and engaging gameplay that reflects real mining dynamics.',
    link: "https://theruneguardians.com/",
    tech: ['React',  'BTC', 'Node.js', 'mongodb'],
    stats: [
      { icon: 'fas fa-code', value: '15K' },
      { icon: 'fas fa-users', value: '5K+' }
    ]
  },
  {
    images: [ocoyaImg, ocoyaImg2, ocoyaImg3, ocoyaImg4, ocoyaImg5],
    badge: 'AI Agent',
    title: 'Ocoya',
    description: 'AI agent templates are designed to automate social media, DMs and engagement. ',
    link: "https://www.ocoya.com/",
    tech: ['Next.js', 'websocket', 'mongodb', 'python'],
    stats: [
      { icon: 'fas fa-download', value: '50K+' },
      { icon: 'fas fa-heart', value: '95%' }
    ]
  },
  {
    images: [blogImg, blogImg2, blogImg3, blogImg4, blogImg5],
    badge: 'Fullstack AI',
    title: 'ChatDOC',
    description: 'AI-powered tool designed to help users interact with documents in a simple and efficient way.',
    link: "https://chatdoc.com",
    tech: ['Next.js', 'mongodb', 'AI', 'python'],
    stats: [
      { icon: 'fas fa-download', value: '50K+' },
      { icon: 'fas fa-heart', value: '95%' }
    ]
  },
  {
    images: [storyfileImg, storyfileImg2, storyfileImg3, storyfileImg4, storyfileImg5],
    badge: 'Fullstack AI',
    title: 'StoryFile',
    description: 'AI-powered video platform, A StoryLine is a set of questions that guide the user through a video.',
    link: "https://storyfile.com",
    tech: [ 'React vite', 'Node.js', 'python', 'mongodb',],
    stats: [
      { icon: 'fas fa-code', value: '15K' },
      { icon: 'fas fa-users', value: '5K+' }
    ]
  },
  {
    images: [onyxImg, onyxImg2, onyxImg3, onyxImg4, onyxImg5],
    badge: 'Blockchain',
    title: 'EVM AI Agent',
    description: "Help you execute operations across various blockchain networks by generating transaction data using ai chat",
    link: "https://ai.onyx.org",
    tech: ['evm', 'node', 'mongodb', 'AI', 'TypeScript'],
    stats: [
      { icon: 'fas fa-download', value: '50K+' },
      { icon: 'fas fa-heart', value: '95%' }
    ]
  },
  {
    images: [cvjuryImg, cvjuryImg2, cvjuryImg3, cvjuryImg4, cvjuryImg5],
    badge: 'Fullstack AI',
    title: 'Free resume builder',
    description: "Get everything you need to land more interviews, from a resume and cover letter builder to a scanner, LinkedIn optimizations, and much more.",
    link: "https://cvjury.com/",
    tech: ['React vite', 'python', 'mongodb', 'node', 'AI'],
    stats: [
      { icon: 'fas fa-download', value: '50K+' },
      { icon: 'fas fa-heart', value: '95%' }
    ]
  },
  {
    images: [pumpfunImg, pumpfunImg2, pumpfunImg3, pumpfunImg4, pumpfunImg5],
    badge: 'Blockchain',
    title: 'Memecoin Launchpad',
    description: "Memecoin Launchpad is a next-generation memecoin launchpad built for both Solana and EVM-compatible chains, designed to make launching tokens fast, fair, and fun. Anyone can create and deploy a memecoin in minutes with no coding required.",
    link: "https://agents.land/",
    tech: ['Next.js', 'solana', 'mongodb', 'evm', 'Web3'],
    stats: [
      { icon: 'fas fa-download', value: '50K+' },
      { icon: 'fas fa-heart', value: '95%' }
    ]
  },
]

type FilterCategory = 'All' | 'AI Agent' | 'Fullstack AI' | 'Blockchain'

// Map tech names to Font Awesome icon classes
const getTechIcon = (tech: string): string => {
  const techLower = tech.toLowerCase()
  const iconMap: Record<string, string> = {
    'python': 'fab fa-python',
    'solana': 'fas fa-coins',
    'base': 'fas fa-layer-group',
    'openai': 'fas fa-brain',
    'llm': 'fas fa-brain',
    'react': 'fab fa-react',
    'react vite': 'fab fa-react',
    'vite': 'fas fa-bolt',
    'node': 'fab fa-node-js',
    'node.js': 'fab fa-node-js',
    'next.js': 'fas fa-code',
    'nextjs': 'fas fa-code',
    'websocket': 'fas fa-plug',
    'mongodb': 'fas fa-database',
    'typescript': 'fab fa-js-square',
    'web3': 'fas fa-link',
    'ai': 'fas fa-brain',
    'btc': 'fab fa-bitcoin',
    'evm': 'fab fa-ethereum',
    'solana sc': 'fas fa-coins',
    'rust': 'fas fa-cog',
    'postgres': 'fas fa-database',
    'postgresql': 'fas fa-database',
  }
  
  // Check for exact match first
  if (iconMap[techLower]) {
    return iconMap[techLower]
  }
  
  // Handle special cases
  if (techLower.includes('mongo')) {
    return 'fas fa-database'
  }
  if (techLower.includes('next')) {
    return 'fas fa-code'
  }
  if (techLower.includes('rust')) {
    return 'fas fa-cog'
  }
  
  // Check for partial matches
  for (const [key, icon] of Object.entries(iconMap)) {
    if (techLower.includes(key) || key.includes(techLower)) {
      return icon
    }
  }
  
  // Default icon
  return 'fas fa-code'
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('All')

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

    // Use requestAnimationFrame to ensure DOM is updated
    requestAnimationFrame(() => {
      if (sectionRef.current) {
        const fadeElements = sectionRef.current.querySelectorAll(`.${styles.fadeIn}`)
        fadeElements.forEach((el) => {
          // Check if element is in viewport and make it visible immediately
          const rect = el.getBoundingClientRect()
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
          if (isInViewport) {
            el.classList.add(styles.visible)
          }
          observer.observe(el)
        })
      }
    })

    return () => observer.disconnect()
  }, [selectedFilter])

  // Filter projects based on selected category
  const getFilteredProjects = () => {
    if (selectedFilter === 'All') {
      return projects
    }
    
    return projects.filter((project) => {
      if (selectedFilter === 'Blockchain') {
        return project.badge === 'Blockchain' || project.badge === 'Defi'
      }
      if (selectedFilter === 'AI Agent') {
        return project.badge === 'AI Agent'
      }
      if (selectedFilter === 'Fullstack AI') {
        return project.badge === 'Fullstack AI'
      }
      return true
    })
  }

  const filteredProjects = getFilteredProjects()

  // Group filtered projects by badge (treat Defi same as Blockchain)
  const projectsByBadge = filteredProjects.reduce((acc, project) => {
    const badge = project.badge === 'Defi' ? 'Blockchain' : project.badge
    if (!acc[badge]) {
      acc[badge] = []
    }
    acc[badge].push(project)
    return acc
  }, {} as Record<string, Project[]>)

  // Get unique badges from the normalized grouping keys
  const badges = Object.keys(projectsByBadge)

  const filterCategories: FilterCategory[] = ['All', 'AI Agent', 'Fullstack AI', 'Blockchain']

  return (
    <section className={`${styles.section} ${styles.sectionDark}`} id="projects" ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={`${styles.sectionTitle} ${styles.fadeIn}`}>Featured Projects</h2>
        <p className={`${styles.sectionSubtitle} ${styles.fadeIn}`}>
        Recent work I’m especially proud of: deeply considered, expertly executed solutions at the intersection of innovation and reliability.
        </p>

        <div className={styles.filterButtons}>
          {filterCategories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${selectedFilter === category ? styles.filterButtonActive : ''}`}
              onClick={() => setSelectedFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          selectedFilter === 'All' ? (
            // Show all projects in a single grid without category grouping
            <div className={styles.projectsGrid}>
              {filteredProjects.map((project, index) => (
                <a
                  key={`${project.title}-${index}-${selectedFilter}`}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.projectCard} ${styles.fadeIn}`}
                  aria-label={`View ${project.title}`}
                  onMouseEnter={(e) => {
                    const randomAngle = Math.random() * 60 - 30; // Random angle between -30 and 30 degrees
                    const iconContainer = e.currentTarget.querySelector(`.${styles.projectIconContainer}`) as HTMLElement;
                    if (iconContainer) {
                      iconContainer.style.setProperty('--light-angle', `${randomAngle}deg`);
                    }
                  }}
                >
                  <div className={styles.projectHeader}>
                    <div className={styles.projectIconContainer}>
                      {project.images && project.images.length > 0 && (
                        <>
                          {project.images.map((img, imgIndex) => (
                            <img
                              key={imgIndex}
                              src={img.src}
                              alt={`${project.title} - Image ${imgIndex + 1}`}
                              className={imgIndex === 0 ? styles.projectImage : styles.projectImageCarousel}
                              style={{
                                '--image-index': imgIndex,
                                '--total-images': project.images.length
                              } as React.CSSProperties}
                              data-image-index={imgIndex}
                            />
                          ))}
                        </>
                      )}
                    </div>
                    <div className={styles.projectBadge}>{project.badge}</div>
                  </div>
                  <div className={styles.projectContent}>
                    <div className={styles.projectTitleContainer}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                    </div>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.projectTech}>
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.techText}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            // Show projects grouped by badge when a specific category is selected
            badges.map((badge) => {
              const displayBadge = badge
              return (
              <div key={`${badge}-${selectedFilter}`} className={styles.badgeSection}>
                {selectedFilter !== 'AI Agent' && selectedFilter !== 'Fullstack AI' && selectedFilter !== 'Blockchain' && (
                  <h3 className={`${styles.badgeTitle} ${styles.fadeIn}`}>{displayBadge}</h3>
                )}
                <div className={styles.projectsGrid}>
                  {projectsByBadge[badge].map((project, index) => (
                    <a
                      key={`${project.title}-${index}-${selectedFilter}`}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.projectCard} ${styles.fadeIn}`}
                      aria-label={`View ${project.title}`}
                      onMouseEnter={(e) => {
                        const randomAngle = Math.random() * 60 - 30; // Random angle between -30 and 30 degrees
                        const iconContainer = e.currentTarget.querySelector(`.${styles.projectIconContainer}`) as HTMLElement;
                        if (iconContainer) {
                          iconContainer.style.setProperty('--light-angle', `${randomAngle}deg`);
                        }
                      }}
                    >
                      <div className={styles.projectHeader}>
                        <div className={styles.projectIconContainer}>
                          {project.images && project.images.length > 0 && (
                            <>
                              {project.images.map((img, imgIndex) => (
                                <img
                                  key={imgIndex}
                                  src={img.src}
                                  alt={`${project.title} - Image ${imgIndex + 1}`}
                                  className={imgIndex === 0 ? styles.projectImage : styles.projectImageCarousel}
                                  style={imgIndex > 0 ? {
                                    '--image-index': imgIndex,
                                    '--total-images': project.images.length
                                  } as React.CSSProperties : {
                                    '--image-index': imgIndex,
                                    '--total-images': project.images.length
                                  } as React.CSSProperties}
                                  data-image-index={imgIndex}
                                />
                              ))}
                            </>
                          )}
                        </div>
                        <div className={styles.projectBadge}>{project.badge}</div>
                      </div>
                      <div className={styles.projectContent}>
                        <div className={styles.projectTitleContainer}>
                          <h3 className={styles.projectTitle}>{project.title}</h3>
                        </div>
                        <p className={styles.projectDescription}>{project.description}</p>
                        <div className={styles.projectTech}>
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className={styles.techText}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              )
            })
          )
        ) : (
          <div className={styles.noProjects}>
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

