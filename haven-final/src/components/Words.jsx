
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { IMAGES, testimonials } from '../data/data.js'

const initials = testimonials.map(t => t.name.split(' ').map(w=> w[0]).slice(0,2).join(''))

export default function Words(){
  const reduceMotion=useReducedMotion()
  const [active,setActive]=useState(0)
  const [inView,setInView]=useState(false)
  const [isPlaying,setIsPlaying]=useState(!reduceMotion)
  const [isHovered,setIsHovered]=useState(false)
  const [isFocused,setIsFocused]=useState(false)
  const ref=useRef(null)
  useEffect(()=>{
    if(reduceMotion) setIsPlaying(false)
  },[reduceMotion])
  useEffect(()=>{
    if(!isPlaying || isHovered || isFocused) return
    const id=setInterval(()=> setActive(p=> (p+1)%testimonials.length),5000)
    return ()=> clearInterval(id)
  },[isPlaying,isHovered,isFocused])
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=> { if(e.isIntersecting) setInView(true) }, { threshold:0.3 })
    if(ref.current) obs.observe(ref.current)
    return ()=> obs.disconnect()
  },[])

  return (
    <section className="words" id="testimonials" ref={ref}>
      <div className="words-bg"><img src={IMAGES.testimonialBg} alt="" loading="lazy" /></div>
      <div className="words-inner">
        <h2>Words from<br/><span className="accent">Homeowners</span></h2>
        <p className="words-sub">Discover exceptional residences designed for modern living. Schedule a private tour and experience Haven first hand.</p>
        <div className="stats-row">
          <div><b>{inView? '250+':'0+'}</b><span>HOMES DELIVERED</span></div>
          <div><b>{inView? '15+':'0+'}</b><span>YEARS OF EXPERIENCE</span></div>
          <div><b>{inView? '98%':'0%'}</b><span>CLIENT SATISFACTION</span></div>
        </div>
        <a href="https://wa.me/2348149228175" className="btn btn-light">Book a Private Tour</a>

        <div className="testi-wrap"
          onMouseEnter={()=> setIsHovered(true)}
          onMouseLeave={()=> setIsHovered(false)}
          onFocusCapture={()=> setIsFocused(true)}
          onBlurCapture={e=> { if(!e.currentTarget.contains(e.relatedTarget)) setIsFocused(false) }}>
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={reduceMotion ? false : { opacity:0, y:12 }} animate={{ opacity:1, y:0 }} exit={reduceMotion ? { opacity:1, y:0 } : { opacity:0, y:-12 }} transition={reduceMotion ? { duration:0 } : undefined} className="testi-card">
              <p>"{testimonials[active].text}"</p>
              <div className="testi-person">
                <span className="avatar">{initials[active]}</span>
                <div><b>{testimonials[active].name}</b><span>{testimonials[active].role}</span></div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="testi-controls">
            <button type="button" className="testi-toggle" onClick={()=> setIsPlaying(p=> !p)} aria-label={isPlaying ? 'Pause testimonial autoplay' : 'Play testimonial autoplay'}>{isPlaying ? 'Pause' : 'Play'}</button>
            <button type="button" className="testi-next" aria-label="Next testimonial" onClick={()=> setActive(p=> (p+1)%testimonials.length)}><i className="bi bi-arrow-right" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>
    </section>
  )
}
