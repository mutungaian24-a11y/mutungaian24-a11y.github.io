import React from 'react'
import Button from '../../components/atoms/Button/Button'
import Card from '../../components/molecules/Card/Card'
import styles from './About.module.css'

export const About: React.FC = () => {
  const values = [
    { title: 'Craftsmanship', desc: 'Do things properly, not just quickly. Every detail matters.' },
    { title: 'Integrity', desc: 'Trust and quality are non-negotiable. Our word is our bond.' },
    { title: 'Innovation', desc: 'Experiment and improve constantly. Push boundaries with purpose.' },
    { title: 'Legacy', desc: 'Build with long-term impact in mind. Create what lasts.' },
  ]

  const ventures = [
    { category: 'Technology', items: ['Munguti Labs', 'Seru Platform', 'Tech Solutions', 'Digital Products'] },
    { category: 'Creative', items: ['Munguti Animation', 'Munguti Production', 'Content Creation', 'Storytelling'] },
    { category: 'Media', items: ['Munguti Media', 'Publishing', 'Distribution', 'Communications'] },
  ]

  const timeline = [
    { year: '2026', title: 'Munguti Enterprises', company: 'Founded', desc: 'Established parent company and brand architecture' },
    { year: '2026', title: 'Munguti Labs', company: 'Launched', desc: 'First venture focusing on tech innovation' },
    { year: '2027', title: 'Expansion', company: 'Planned', desc: 'Launch additional ventures across creative industries' },
  ]

  return (
    <div className={styles.about}>
      {/* Hero */}
      <section className={`section ${styles.hero}`}>
        <div className="container container-narrow">
          <h1>
            About <span className="brand-font">Munguti</span> Enterprises
          </h1>
          <p className={styles.intro}>
            Munguti Enterprises was founded by Ian Munguti to build a legacy ecosystem of businesses 
            that combine creativity, technology, and disciplined execution. We believe in ownership, 
            craftsmanship, and building ventures that create lasting impact.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <h2>Mission</h2>
              <p>Build and own multiple ventures that deliver innovation, creativity, and quality across industries.</p>
            </div>
            <div className={styles.missionCard}>
              <h2>Vision</h2>
              <p>Create a legacy of businesses that provide impact, opportunity, and growth across industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, idx) => (
              <Card key={idx} title={value.title}>
                <p>{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Journey</h2>
          <div className={styles.timeline}>
            {timeline.map((item, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <span className={styles.year}>{item.year}</span>
                <div className={styles.timelineContent}>
                  <h3>{item.title}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section className="section">
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Venture Portfolio</h2>
          <div className={styles.skillsGrid}>
            {ventures.map((group, idx) => (
              <div key={idx} className={styles.skillGroup}>
                <h3>{group.category}</h3>
                <div className={styles.skillTags}>
                  {group.items.map((item, i) => (
                    <span key={i} className={styles.skillTag}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Partner With Us</h2>
            <p>Interested in collaboration or joining our ecosystem?</p>
            <Button variant="primary">Get in Touch</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
