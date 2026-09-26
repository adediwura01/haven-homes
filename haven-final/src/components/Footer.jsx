
import { motion } from 'framer-motion'

export default function Footer(){
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="footer-cta">
          <p className="eyebrow">Begin your next chapter</p>
          <h3>A place to call your <em className="accent">own</em>.</h3>
          <div className="cta-btns">
            <motion.a whileHover={{ y:-2 }} href="https://wa.me/2348149228175" target="_blank" rel="noopener noreferrer" className="btn btn-dark"><i className="bi bi-whatsapp"></i> Book a Tour on WhatsApp</motion.a>
          </div>
          <div className="creator-note">
            <p><b>This is a concept by Wura</b></p>
            <p>If you'd love something like this for your brand, let's build it. This Haven concept was built as a portfolio piece — premium, clean, conversion-focused.</p>
            <div className="cta-btns">
              <motion.a whileHover={{ y:-2 }} href="https://instagram.com/visionarylabs.ng" target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><i className="bi bi-instagram"></i> visionarylabs.ng</motion.a>
              <motion.a whileHover={{ y:-2 }} href="https://tiktok.com/@wura.dev" target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><i className="bi bi-tiktok"></i> wura.dev</motion.a>
              <motion.a whileHover={{ y:-2 }} href="https://adeniregun.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><i className="bi bi-box-arrow-up-right"></i> adeniregun.vercel.app</motion.a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-black">
        <div className="f-grid">
          <div>
            <div className="logo white"><span className="logo-mark">H</span><span>HAVEN</span></div>
            <p>Thoughtfully designed residences for modern living.</p>
          </div>
          <div><h4>Properties</h4><a href="#homes">Featured Homes</a><a href="#projects">Projects</a><a href="#homes">Communities</a><a href="https://wa.me/2348149228175">Book a Tour</a></div>
          <div><h4>Company</h4><a href="#about">About</a><a href="#about">Our Philosophy</a><a href="#testimonials">Testimonials</a><a href="https://wa.me/2348149228175">Contact</a></div>
          <div><h4>Connect</h4><a href="https://wa.me/2348149228175">WhatsApp — 08149228175</a><a href="https://instagram.com/visionarylabs.ng">Instagram</a><a href="https://tiktok.com/@wura.dev">TikTok</a><a href="https://adeniregun.vercel.app">Portfolio</a></div>
        </div>
        <div className="copy">© 2025 HAVEN — Fictional concept. Built by Wura • Lagos &amp; Abuja, Nigeria</div>
      </div>
    </footer>
  )
}
