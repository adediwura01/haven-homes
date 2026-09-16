
import { motion } from 'framer-motion'
import { IMAGES } from '../data/data.js'

export default function Hero(){
  return (
    <section className="hero-wrap">
      <div className="hero-card-main">
        
        <div className="hero-img-wrap">
          <motion.img initial={{ scale:1.05 }} animate={{ scale:1 }} transition={{ duration:1.4, ease:[0.22,1,0.36,1] }} src={IMAGES.hero} alt="hero" onError={e=> e.target.src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80'} />
          <motion.div animate={{ y:[-4,4,-4] }} transition={{ duration:3, repeat:Infinity, ease:"easeInOut" }} className="pill p1"><b>250+</b> Properties</motion.div>
          <motion.div animate={{ y:[4,-4,4] }} transition={{ duration:3.2, repeat:Infinity, ease:"easeInOut" }} className="pill p2"><b>15+</b> Years Experience</motion.div>
          <div className="hero-discover">
            <a href="#homes" className="btn-black">Discover Homes <span className="btn-icon white"><i className="bi bi-arrow-up-right"></i></span></a>
          </div>
        </div>
      </div>

       <motion.h1 className="hero-title">
        <motion.span initial={{ y:30, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay:0.1, duration:0.7 }} className="block">Where</motion.span>
        <motion.span initial={{ y:30, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay:0.2, duration:0.7 }} className="block big">LIFE</motion.span>
        <motion.span initial={{ y:30, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay:0.3, duration:0.7 }} className="block big accent">BELONGS</motion.span>
      </motion.h1>
      <p className="hero-sub">Explore premium residences crafted for effortless living and lasting value in Lagos & Abuja</p>
    </section>
  )
}
