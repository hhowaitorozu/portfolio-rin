import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-12 md:px-20 pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">
          Software Developer · Surabaya, Indonesia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-6xl md:text-8xl font-bold leading-none tracking-tight mb-6">
          Nisrina
          <br />
          <span className="text-white/50">Salwa.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white/40 text-lg max-w-md mb-12">
          D3 Informatics Engineering at PENS and building products that matter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex gap-4">
          <Link
            to="projects"
            smooth={true}
            duration={600}
            className="px-6 py-3 bg-white text-black text-sm font-semibold tracking-wide cursor-pointer hover:bg-white/90 transition-colors rounded-3xl">
            What I build
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            className="px-6 py-3 border border-white/20 text-white text-sm font-semibold tracking-wide cursor-pointer hover:border-white/50 transition-colors rounded-3xl">
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
