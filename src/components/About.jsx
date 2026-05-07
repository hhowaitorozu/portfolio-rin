import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-20 px-12 md:px-20 border-t border-white/10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-5xl">
        <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-8">
          About
        </p>
        <p className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed mb-8">
          4th semester student at{" "}
          <span className="text-white font-semibold">
            Politeknik Elektronika Negeri Surabaya
          </span>
          , interesting on cloud infrastructure and web development.
        </p>
        <p className="text-white/50 leading-relaxed max-w-5xl">
          Currently building <span className="text-white/80">Stacka</span> — a
          note-sharing platform for university students, and developing a
          security monitoring dashboard using AWS Systems Manager for my final
          project. I care about clean architecture and products that actually
          get used.
        </p>
      </motion.div>
    </section>
  );
}
