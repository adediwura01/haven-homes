
import { motion } from 'framer-motion'
import { properties } from '../data/data.js'

export default function Built(){
  const [featured, ...rest] = properties
  return (
    <section className="section built" id="homes">
      <div className="container">
        <div className="section-head collection-head">
          <div>
          <span className="eyebrow">Featured Residences</span>
          <motion.h2 initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="sec-title">Built with <span className="accent">Purpose</span></motion.h2>
          </div>
          <p className="lead">A considered collection of exceptional homes.<br />Find the space that feels like you.</p>
        </div>
        <div className="built-grid">
          <motion.article initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="b-card featured">
            <img src={featured.image} alt={featured.name} loading="lazy" decoding="async" />
            <span className="b-tag">Featured</span>
            <div className="b-info">
              <div className="b-info-top">
                <h3><a href={`https://wa.me/2348149228175?text=${encodeURIComponent(`I'd like to arrange a viewing of ${featured.name}.`)}`}>{featured.name}<i className="bi bi-arrow-up-right" aria-hidden="true" /></a></h3>
                <span className="b-price">{featured.price}</span>
              </div>
              <p>{featured.location}</p>
              <span className="b-meta">{featured.meta}</span>
            </div>
          </motion.article>
          <div className="b-small-grid">
            {rest.map((p,i)=>(
              <motion.article key={p.name} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }} whileHover={{ y:-4 }} className="b-card">
                <img src={p.image} alt={p.name} loading="lazy" decoding="async" />
                <div className="b-info sm">
                  <div className="b-info-top">
                    <h3><a href={`https://wa.me/2348149228175?text=${encodeURIComponent(`I'd like to arrange a viewing of ${p.name}.`)}`}>{p.name}<i className="bi bi-arrow-up-right" aria-hidden="true" /></a></h3>
                    <span className="b-price">{p.price}</span>
                  </div>
                  <span className="b-meta">{p.location}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
