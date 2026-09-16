
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { IMAGES, faqs } from '../data/data.js'

export default function Why({ setShowVideo }){
  const [open,setOpen]=useState(0)
  return (
    <section className="section why" id="projects">
      <motion.h2 initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="sec-title">Why Homeowners<br/><span className="accent">Choose Haven</span></motion.h2>
      <div className="why-grid">
        <motion.div whileHover={{ scale:1.01 }} className="why-img" onClick={()=> setShowVideo(true)}>
          <img src={IMAGES.why} alt="why" onError={e=> e.target.src='https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1400&q=80'} />
          <div className="watch"><i className="bi bi-play-circle"></i> Watch Story</div>
          <div className="play-btn"><i className="bi bi-play-fill"></i></div>
        </motion.div>
        <div className="why-right">
          <p className="why-desc">Discover the philosophy behind every house we create.</p>
          <div className="why-card-img"><img src={IMAGES.vision} alt="" onError={e=> e.target.style.display='none'} /></div>
          <h4>Experience Haven Living</h4>
          <a href="#homes" className="btn-outline sm"><i className="bi bi-house"></i> Explore Homes</a>
          <div className="faq">
            {faqs.map((f,i)=>(
              <div key={i} className={`faq-item ${open===i?'open':''}`} onClick={()=> setOpen(i)}>
                <div className="faq-q"><span>0{i+1}</span> {f.q} <i className={`bi ${open===i?'bi-dash':'bi-plus'}`}></i></div>
                <AnimatePresence>{open===i && <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} className="faq-a">{f.a}</motion.div>}</AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
