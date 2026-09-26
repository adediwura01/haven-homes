
import { motion } from 'framer-motion'
import { IMAGES } from '../data/data.js'

export default function Vision(){
  return (
    <section className="section vision" id="about">
      <div className="container vision-grid">
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
          <span className="eyebrow">Our Philosophy</span>
          <h2>Every Home Begins<br/><span className="accent">with a vision of better living</span></h2>
          <p className="lead">Every home begins with a vision of balance — between architecture and nature, form and function, luxury and comfort. We design spaces that not only look exceptional but continue to inspire the people who live within them for years to come.</p>
          <a href="#contact" className="btn btn-ghost"><i className="bi bi-people"></i> Meet the Team</a>
        </motion.div>
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1, duration:0.6 }} className="vision-img">
          <img src={IMAGES.vision} alt="Light-filled living space with natural wood finishes and garden views" loading="lazy" decoding="async" />
          <span className="image-caption">01 / Designed around the way you live</span>
        </motion.div>
      </div>
    </section>
  )
}
