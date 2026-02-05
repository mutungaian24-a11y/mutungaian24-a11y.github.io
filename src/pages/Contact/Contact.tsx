import React from 'react'
import FormField from '../../components/molecules/FormField/FormField'
import Button from '../../components/atoms/Button/Button'
import Link from '../../components/atoms/Link/Link'
import styles from './Contact.module.css'

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Form submitted! (This is a demo)')
  }

  return (
    <div className={styles.contact}>
      {/* Hero */}
      <section className={`section ${styles.hero}`}>
        <div className="container container-narrow">
          <h1>Let's Talk</h1>
          <p className={styles.intro}>
            Interested in partnership, collaboration, or joining the <span className="brand-font">Munguti</span> ecosystem? 
            We'd love to hear from you. Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section">
        <div className="container">
          <div className={styles.contactContent}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <FormField label="Name" name="name" placeholder="Your name" />
              <FormField label="Email" name="email" placeholder="hello@yourcompany.com" />
              <FormField label="Company" name="company" placeholder="Your organization" />
              
              <label className={styles.field}>
                <span className={styles.label}>Inquiry Type</span>
                <select className={styles.select} name="projectType">
                  <option value="">Select inquiry type</option>
                  <option value="partnership">Partnership</option>
                  <option value="investment">Investment</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="services">Services</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Message</span>
                <textarea 
                  className={styles.textarea} 
                  name="message" 
                  rows={6} 
                  placeholder="Tell us about your inquiry..."
                />
              </label>

              <Button variant="primary">Send Inquiry</Button>
            </form>

            <div className={styles.info}>
              <h3>Connect With Us</h3>
              
              <div className={styles.infoCard}>
                <h4>📧 Email</h4>
                <Link href="mailto:hello@munguti.com" variant="default">hello@munguti.com</Link>
              </div>

              <div className={styles.infoCard}>
                <h4>🌐 Social</h4>
                <div className={styles.socialLinks}>
                  <Link href="https://twitter.com/munguti" variant="default" external>Twitter</Link>
                  <Link href="https://linkedin.com/company/munguti" variant="default" external>LinkedIn</Link>
                  <Link href="https://github.com/munguti" variant="default" external>GitHub</Link>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h4>🏢 Headquarters</h4>
                <p>Building Globally</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
