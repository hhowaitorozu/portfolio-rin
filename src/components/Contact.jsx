import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-20 px-12 md:px-20 border-t border-white/10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}>
        <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-8">
          Contact
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">
          Let's connect.
        </h2>
        <div className="flex flex-col gap-4">
          <a
            href="mailto:nrinsalwa@gmail.com"
            className="text-white/50 hover:text-white transition-colors text-lg">
            nrinsalwa@gmail.com ↗
          </a>
          <a
            href="https://github.com/hhowaitorozu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors text-lg">
            github.com/hhowaitorozu ↗
          </a>
          <a
            href="https://linkedin.com/in/nrinsalwa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors text-lg">
            LinkedIn ↗
          </a>
        </div>
      </motion.div>
      <p className="mt-20 text-white text-xs tracking-widest text-center w-full">
        © 2026 Nisrina Salwa Putri. All rights reserved.
      </p>
    </section>
  );
}
