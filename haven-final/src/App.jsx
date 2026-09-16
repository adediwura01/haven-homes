
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  useEffect(()=>{
    const onScroll=()=> setScrolled(window.scrollY>20)
    window.addEventListener('scroll',onScroll)
    return ()=> window.removeEventListener('scroll',onScroll)
  },[])
  return (
    <div className="page">
      <Header scrolled={scrolled} />
      <Hero />
      <Vision />
      <Built />
      <Why setShowVideo={setShowVideo} />
      <Words />
      <Footer />
      <AnimatePresence>
        {showVideo && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="modal" onClick={()=> setShowVideo(false)}>
            <motion.div initial={{ scale:0.95, y:20 }} animate={{ scale:1, y:0 }} exit={{ scale:0.95 }} className="modal-box">
              <button className="modal-close" onClick={()=> setShowVideo(false)}><i className="bi bi-x-lg"></i></button>
              <p>Demo video placeholder — Lekki Phase 1 walkthrough would play here.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
