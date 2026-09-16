
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { IMAGES, testimonials } from '../data/data.js'

export default function Words(){
  const [active,setActive]=useState(0)
  const [inView,setInView]=useState(false)
  const ref=useRef(null)
  useEffect(()=>{
    const id=setInterval(()=> setActive(p=> (p+1)%testimonials.length),5000)
    return ()=> clearInterval(id)
  },[])
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=> { if(e.isIntersecting) setInView(true) }, { threshold:0.3 })
    if(ref.current) obs.observe(ref.current)
    return ()=> obs.disconnect()
  },[])

  return (
    <section className="words" ref={ref}>
      <div className="words-bg"><img src={IMAGES.testimonialBg} alt="" onError={e=> e.target.src='https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=80'} /></div>
      <div className="words-inner">
        <h2>Words from<br/><span className="accent">Homeowners</span></h2>
        <p className="words-sub">Discover exceptional residences designed for modern living. Schedule a private tour and experience Haven first hand.</p>
        <div className="stats-row">
          <div><b>{inView? '250+':'0+'}</b><span>HOMES DELIVERED</span></div>
          <div><b>{inView? '15+':'0+'}</b><span>YEARS OF EXPERIENCE</span></div>
          <div><b>{inView? '98%':'0%'}</b><span>CLIENT SATISFACTION</span></div>
        </div>
        <a href="https://wa.me/2348149228175" className="btn-black">Book a Private Tour</a>

        <div className="testi-wrap">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-12 }} className="testi-card">
              <p>"{testimonials[active].text}"</p>
              <div className="testi-person"><img src={testimonials[active].img} alt="" onError={e=> e.target.src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80'} /><div><b>{testimonials[active].name}</b><span>{testimonials[active].role}</span></div></div>
            </motion.div>
          </AnimatePresence>
          <button className="testi-next" onClick={()=> setActive(p=> (p+1)%testimonials.length)}><i className="bi bi-arrow-right"></i></button>
        </div>
      </div>
    </section>
  )
}
