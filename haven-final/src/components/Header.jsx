
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  ['#homes', 'Homes'],
  ['#projects', 'Projects'],
  ['#about', 'About'],
  ['#contact', 'Contact'],
]

export default function Header({ scrolled }){
  const [open, setOpen] = useState(false)
  const menuButton = useRef(null)
  const header = useRef(null)
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 901px)')
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false) }
    const onKeyDown = e => {
      if (e.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus() }
    }
    const onPointerDown = e => { if (!header.current?.contains(e.target)) setOpen(false) }
    desktop.addEventListener('change', closeOnDesktop)
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      desktop.removeEventListener('change', closeOnDesktop)
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])
  return (
    <>
      <motion.header
        ref={header}
        onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false) }}
        initial={{ y:-24, opacity:0 }}
        animate={{ y:0, opacity:1 }}
        transition={{ duration:0.8, ease:[0.22,1,0.36,1] }}
        className={`header ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="header-inner">
          <a href="#top" className="logo" onClick={()=> setOpen(false)}>
            <span className="logo-mark">H</span>
            <span>HAVEN</span>
          </a>
          <nav className="nav" aria-label="Main navigation">
            {links.map(([href,label])=> <a key={href} href={href}>{label}</a>)}
          </nav>
          <div className="header-actions">
            <motion.a
              whileHover={{ y:-2 }}
              whileTap={{ scale:0.97 }}
              href="https://wa.me/2348149228175"
              className="btn btn-dark header-cta"
            >
              Book a Tour <span className="btn-icon"><i className="bi bi-arrow-up-right"></i></span>
            </motion.a>
            <button
              ref={menuButton}
              className="menu-btn"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={()=> setOpen(o=> !o)}
            >
              <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>
          </div>
        </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            transition={{ duration:0.3 }}
            className="mobile-menu"
            onClick={()=> setOpen(false)}
          >
            <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
              {links.map(([href,label],i)=>(
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity:0, y:16 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{ delay:0.06*i }}
                  onClick={()=> setOpen(false)}
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/2348149228175"
                className="btn btn-dark"
                initial={{ opacity:0, y:16 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay:0.26 }}
                onClick={()=> setOpen(false)}
              >
                Book a Tour <span className="btn-icon"><i className="bi bi-arrow-up-right"></i></span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.header>
    </>
  )
}
