import { motion } from 'framer-motion'
import { IMAGES } from '../data/data.js'

export default function Hero() {
  return (
    <section className="hero-wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-card-main">
        <div className="hero-img-wrap">
          <img src={IMAGES.hero} alt="Contemporary Haven residence overlooking a private swimming pool" fetchPriority="high" />
        </div>
        <motion.div className="hero-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <span className="eyebrow">Exceptional homes. Considered living.</span>
          <h1 className="hero-title" id="hero-title">Where life<br /><span className="accent">belongs.</span></h1>
          <p className="hero-sub">Distinctive residences. Remarkable locations.<br />A quieter kind of luxury in Lagos &amp; Abuja.</p>
          <a href="#homes" className="btn btn-light">Explore the collection <i className="bi bi-arrow-up-right" aria-hidden="true" /></a>
        </motion.div>
        <div className="hero-caption"><span>THE HAVEN COLLECTION</span><span>Lagos &amp; Abuja, Nigeria</span></div>
        <a href="#about" className="hero-scroll" aria-label="Discover the Haven philosophy"><i className="bi bi-arrow-down" aria-hidden="true" /></a>
      </div>
      <div className="hero-meta">
        <p>Extraordinary spaces.<br /><span className="accent">An everyday feeling.</span></p>
        <div><b>250+</b><span>Homes delivered</span></div>
        <div><b>15+</b><span>Years of experience</span></div>
        <div><b>98%</b><span>Client satisfaction</span></div>
      </div>
    </section>
  )
}
