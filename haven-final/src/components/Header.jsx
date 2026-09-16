
import { motion } from 'framer-motion'

export default function Header({ scrolled }){
  return (
    <motion.header
      initial={{ y:-20, opacity:0 }}
      animate={{ y:0, opacity:1 }}
      transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
      className={`header ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="header-inner">
        <div className="logo"><div className="logo-mark">H</div><span>HAVEN</span></div>
        <nav className="nav">
          <a href="#homes">Homes</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <motion.a whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }} href="https://wa.me/2348149228175" className="btn-black">
          Book a Tour <span className="btn-icon"><i className="bi bi-arrow-up-right"></i></span>
        </motion.a>
      </div>
    </motion.header>
  )
}
