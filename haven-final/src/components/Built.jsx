
import { motion } from 'framer-motion'
import { properties } from '../data/data.js'

export default function Built(){
  return (
    <section className="section built" id="homes">
      <motion.h2 initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="sec-title">Built with <span className="accent">Purpose</span></motion.h2>
      <div className="built-grid">
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="b-card featured">
          <img src={properties[0].image} alt={properties[0].name} onError={e=> e.target.src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'} />
          <div className="b-info"><h3>{properties[0].name}</h3><p>{properties[0].location}</p></div>
        </motion.div>
        <div className="b-small-grid">
          {properties.slice(1).map((p,i)=>(
            <motion.div key={p.name} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }} whileHover={{ y:-4 }} className="b-card">
              <img src={p.image} alt={p.name} onError={e=> e.target.src='https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80'} />
              <div className="b-info sm"><h4>{p.name}</h4><span>{p.location}</span></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
