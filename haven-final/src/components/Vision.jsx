
import { motion } from 'framer-motion'
import { IMAGES } from '../data/data.js'

export default function Vision(){
  return (
    <section className="section vision" id="about">
      <div className="vision-grid">
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
          <h2>Every Home Begins<br/><span className="accent">vision of better living</span></h2>
          <p>Every home begins with a vision of balance — between architecture and nature, form and function, luxury and comfort. We design spaces that not only look exceptional but continue to inspire the people who live within them for years to come.</p>
          <a href="#contact" className="btn-outline"><i className="bi bi-people"></i> Meet the Team</a>
        </motion.div>
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.1, duration:0.6 }} className="vision-img">
          <img src={IMAGES.vision} alt="vision" onError={e=> e.target.src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'} />
        </motion.div>
      </div>
    </section>
  )
}
