
import { motion } from 'framer-motion'

export default function Footer(){
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="footer-cta">
          <h3>Loved what you see? <span className="accent">This is a concept by Wura</span></h3>
          <p>If you'd love something like this for your brand, let's build it. This Haven concept was built as a portfolio piece — premium, clean, conversion-focused.</p>
          <div className="cta-btns">
            <motion.a whileHover={{ y:-2 }} href="https://wa.me/2348149228175" target="_blank" className="btn-black"><i className="bi bi-whatsapp"></i> WhatsApp — 08149228175</motion.a>
            <motion.a whileHover={{ y:-2 }} href="https://instagram.com/visionarylabs.ng" target="_blank" className="btn-outline"><i className="bi bi-instagram"></i> visionarylabs.ng</motion.a>
            <motion.a whileHover={{ y:-2 }} href="https://tiktok.com/@wura.dev" target="_blank" className="btn-outline"><i className="bi bi-tiktok"></i> wura.dev</motion.a>
            <motion.a whileHover={{ y:-2 }} href="https://adeniregun.vercel.app" target="_blank" className="btn-outline"><i className="bi bi-box-arrow-up-right"></i> adeniregun.vercel.app</motion.a>
          </div>
        </div>
      </div>

      <div className="footer-black">
        <div className="f-grid">
          <div><div className="logo white"><div className="logo-mark">H</div><span>HAVEN</span></div><p>Thoughtfully designed resources for modern living.</p></div>
          <div><h4>Properties</h4><a href="#homes">Featured Homes</a><a href="#projects">Projects</a><a href="#homes">Communities</a><a href="#contact">Book a Tour</a></div>
          <div><h4>Company</h4><a href="#about">About</a><a href="#about">Our Philosophy</a><a href="#contact">Testimonials</a><a href="https://wa.me/2348149228175">Contact</a></div>
          <div><h4>Connect</h4><a href="https://wa.me/2348149228175">WhatsApp — 08149228175</a><a href="https://instagram.com/visionarylabs.ng">Instagram</a><a href="https://tiktok.com/@wura.dev">TikTok</a><a href="https://adeniregun.vercel.app">Portfolio</a></div>
        </div>
        <div className="copy">© 2025 HAVEN — Fictional concept. Built by Wura • Lagos & Abuja, Nigeria</div>
      </div>
    </footer>
  )
}
