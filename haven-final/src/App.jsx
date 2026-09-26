
import { useState, useEffect, useRef } from 'react'
import { MotionConfig } from 'framer-motion'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Vision from './components/Vision.jsx'
import Built from './components/Built.jsx'
import Why from './components/Why.jsx'
import Words from './components/Words.jsx'
import Footer from './components/Footer.jsx'
import './App.css'


export default function App(){
  const [scrolled,setScrolled]=useState(false)
  const [showVideo,setShowVideo]=useState(false)
  const dialogRef = useRef(null)
  useEffect(()=>{
    const onScroll=()=> setScrolled(window.scrollY>20)
    onScroll()
    window.addEventListener('scroll',onScroll,{ passive:true })
    return ()=> window.removeEventListener('scroll',onScroll)
  },[])
  useEffect(() => {
    if (!showVideo) return
    const dialog = dialogRef.current
    const trigger = document.activeElement
    const overflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = overflow
      trigger?.focus()
    }
  }, [showVideo])
  return (
    <MotionConfig reducedMotion="user">
    <div className="page">
      <a href="#main" className="skip-link">Skip to content</a>
      <Header scrolled={scrolled} />
      <main id="main" tabIndex={-1}>
      <Hero />
      <Vision />
      <Built />
      <Why setShowVideo={setShowVideo} />
      <Words />
      </main>
      <Footer />
      <dialog ref={dialogRef} className="modal" aria-labelledby="story-title" onCancel={()=> setShowVideo(false)} onClick={e=> { if(e.target === e.currentTarget) setShowVideo(false) }}>
        <div className="modal-box">
          <button className="modal-close" aria-label="Close story" onClick={()=> setShowVideo(false)}><i className="bi bi-x-lg" aria-hidden="true" /></button>
          <span className="eyebrow">The Haven perspective</span>
          <h2 id="story-title">A closer look at <span className="accent">Haven.</span></h2>
          <p>Our Lekki Phase 1 walkthrough is coming soon. In the meantime, arrange a private viewing with our team.</p>
          <a href="https://wa.me/2348149228175" className="btn btn-light">Book a private tour <i className="bi bi-arrow-up-right" aria-hidden="true" /></a>
        </div>
      </dialog>
    </div>
    </MotionConfig>
  )
}
