import React, { useState } from 'react'
import ProjectCard from '../../components/molecules/ProjectCard/ProjectCard'
import Button from '../../components/atoms/Button/Button'
import styles from './Projects.module.css'

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    { id: 1, title: 'Munguti Labs', description: 'Tech innovation hub building AI solutions and digital products', category: 'tech' },
    { id: 2, title: 'Munguti Animation', description: 'Premium animation studio for brands and storytellers', category: 'creative' },
    { id: 3, title: 'Munguti Production', description: 'Full-service video production from concept to delivery', category: 'creative' },
    { id: 4, title: 'Munguti Media', description: 'Publishing and distribution for impactful content', category: 'media' },
    { id: 5, title: 'Seru Platform', description: 'Digital ecosystem for modern businesses', category: 'tech' },
    { id: 6, title: 'Content Studio', description: 'Strategic content creation and storytelling', category: 'creative' },
  ]

  const filters = ['all', 'tech', 'creative', 'media']

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className={styles.projects}>
      {/* Header */}
      <section className={`section ${styles.header}`}>
        <div className="container">
          <h1>Our Ventures</h1>
          <p className={styles.subtitle}>The Munguti Enterprises ecosystem</p>
        </div>
      </section>

      {/* Filters */}
      <section className={styles.filtersSection}>
        <div className="container">
          <div className={styles.filters}>
            {filters.map(filter => (
              <button
                key={filter}
                className={`${styles.filterButton} ${activeFilter === filter ? styles.active : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.projectsGrid}>
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} title={project.title} description={project.description} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Partner With Us</h2>
            <p>Join the Munguti ecosystem</p>
            <Button variant="primary">Get in Touch</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
