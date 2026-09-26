
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { IMAGES, faqs } from '../data/data.js'

export default function Why({ setShowVideo }){
  const [open,setOpen]=useState(0)
  return (
    <section className="section why" id="projects">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why Haven</span>
          <motion.h2 initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="sec-title">Why Homeowners<br/><span className="accent">Choose Haven</span></motion.h2>
        </div>
        <div className="why-grid">
          <motion.button type="button" whileHover={{ scale:1.01 }} className="why-img" aria-label="Open the Haven story" aria-haspopup="dialog" onClick={()=> setShowVideo(true)}>
            <img src={IMAGES.why} alt="A thoughtfully designed Haven home" loading="lazy" decoding="async" />
            <span className="watch">The Haven perspective</span>
            <span className="play-btn"><i className="bi bi-play-fill" aria-hidden="true" /></span>
            <span className="image-caption">Architecture with intention. Living without compromise.</span>
          </motion.button>
          <div className="why-right">
            <p className="why-desc">Discover the philosophy behind every house we create.</p>
            <div className="why-card-img"><img src={IMAGES.vision} alt="" loading="lazy" decoding="async" /></div>
            <h3>Experience Haven Living</h3>
            <a href="#homes" className="btn btn-ghost"><i className="bi bi-house" aria-hidden="true" /> Explore Homes</a>
            <div className="faq">
              {faqs.map((f,i)=>(
                <div key={f.q} className={`faq-item ${open===i?'open':''}`}>
                  <h4><button type="button" className="faq-q" id={`faq-question-${i}`} aria-expanded={open===i} aria-controls={`faq-answer-${i}`} onClick={()=> setOpen(open===i ? null : i)}><span>0{i+1}</span> {f.q} <i className={`bi ${open===i?'bi-dash':'bi-plus'}`} aria-hidden="true" /></button></h4>
                  <AnimatePresence initial={false}>{open===i && <motion.div key="answer" id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} className="faq-a">{f.a}</motion.div>}</AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
