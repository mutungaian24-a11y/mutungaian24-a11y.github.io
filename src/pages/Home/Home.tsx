import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Hero from '../../components/organisms/Hero/Hero'
import Icon from '../../components/atoms/Icon/Icon'
import styles from './Home.module.css'

export const Home: React.FC = () => {
  const ventures = [
    { id: 1, title: 'Munguti Labs', short: 'Labs', description: 'Tech platforms and innovative digital solutions', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop' },
    { id: 2, title: 'Munguti Animation', short: 'Animation', description: 'Creative storytelling and motion design', image: 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=1200&h=800&fit=crop' },
    { id: 3, title: 'Munguti Studios', short: 'Studios', description: 'Design systems and brand experiences', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=800&fit=crop' },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  // Reveal values on scroll, one at a time
  useEffect(() => {
    const els = Array.from(document.getElementsByClassName(styles.valueItem)) as HTMLElement[]
    if (!els.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) {
            el.classList.add(styles.isVisible)
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Reveal process steps on scroll, sequentially
  useEffect(() => {
    const els = Array.from(document.getElementsByClassName(styles.processItem)) as HTMLElement[]
    if (!els.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) {
            el.classList.add(styles.isVisible)
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const values = [
    {
      iconName: 'craftsmanship',
      name: 'Deliberate Craft',
      description:
        'We obsess over details most people skip. Speed matters, but never at the cost of structure, clarity, or finish.',
    },
    {
      iconName: 'integrity',
      name: 'Earned Trust',
      description:
        'We don’t overpromise, we don’t ship shortcuts, and we don’t disappear after delivery. Trust is built through consistency.',
    },
    {
      iconName: 'innovation',
      name: 'Practical Experimentation',
      description:
        'We experiment with purpose. New ideas are tested, measured, and kept only if they make the work meaningfully better.',
    },
    {
      iconName: 'legacy',
      name: 'Long-Term Thinking',
      description:
        'We design and build for longevity—systems that can grow, adapt, and remain relevant long after launch.',
    },
  ]

  const process = [
    { step: '01', title: 'Frame the Problem', desc: 'We start by understanding the real problem—business, users, and constraints—before deciding what should be built.' },
    { step: '02', title: 'Design the System', desc: 'We design clear, modular systems that can evolve—covering structure, technology, and future growth from the start.' },
    { step: '03', title: 'Build With Discipline', desc: 'We build deliberately, focusing on quality, performance, and clarity—shipping only what earns its place.' },
    { step: '04', title: 'Support Growth', desc: 'We prepare systems to scale when needed, without forcing growth before the foundation is ready.' },
  ]

  return (
    <div className={styles.home}>
      <Hero />

      {/* Ventures Slider */}
      <section className={styles.venturesSection} aria-labelledby="ventures-heading">
        <div className={styles.venturesHeader}>
          <span className={styles.sectionLabel}>Ventures</span>
          <h2 id="ventures-heading" className={styles.sectionTitle}>Selected ventures and capability</h2>
          <p className={styles.sectionSubtitle}>A compact look at what we build and why it matters.</p>
        </div>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.emblaContainer}>
            {ventures.map((venture, index) => (
              <div key={venture.id} className={`${styles.emblaSlide} ${index === selectedIndex ? styles.emblaSlideActive : ''}`}>
                <div className={styles.slideCard}>
                  <img
                    src={venture.image}
                    alt={venture.title}
                    className={styles.slideImage}
                  />
                  <div className={styles.slideOverlay}>
                    <div className={styles.titleBrand}><span className="brand-font">MUNGUTI</span></div>
                    <div className={styles.titleRect}>{venture.short}</div>
                    <p className={styles.slideDesc}>{venture.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.indicators}>
          {ventures.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === selectedIndex ? styles.indicatorActive : ''}`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Core Values (Editorial list) */}
      <section className={`section ${styles.servicesSection}`} aria-labelledby="values-heading">
        <div className="container">
          <div className={styles.valuesHeader}>
            <h2 id="values-heading" className={styles.sectionTitle}>Our Values</h2>
            <p className={styles.sectionSubtitle}>How we think about building matters as much as what we build.</p>
          </div>

          <div className={styles.valuesList}>
            {values.map((value, idx) => (
              <div
                key={value.name}
                className={`${styles.valueItem} ${styles.reveal}`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className={styles.valueIndex} aria-hidden>
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <div className={styles.valueContent}>
                  <h3 className={styles.valueTitle}>{value.name}</h3>
                  <p className={styles.valueBody}>{value.description}</p>
                </div>

                <div className={styles.valueSubtleIcon} aria-hidden>
                  <Icon name={value.iconName} size="lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build (Editorial flow) */}
      <section className="section" aria-labelledby="process-heading">
        <div className="container">
          <div className={styles.processHeader}>
            <h2 id="process-heading" className={styles.sectionTitle}>How We Build</h2>
            <p className={styles.sectionSubtitle}>Our process is simple, but not simplistic.</p>
          </div>

          <div className={styles.processList}>
            {process.map((item, idx) => (
              <div key={idx} className={`${styles.processItem} ${styles.reveal}`} style={{ transitionDelay: `${idx * 160}ms` }}>
                <div className={styles.processIndex} aria-hidden>{item.step}</div>

                <div className={styles.processContent}>
                  <h3 className={styles.processTitle}>{item.title}</h3>
                  <p className={styles.processBody}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* footer handled by MainLayout */}
    </div>
  )
}

export default Home
