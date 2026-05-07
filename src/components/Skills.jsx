import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Next.js",
  "React",
  "JavaScript",
  "PostgreSQL",
  "Supabase",
  "Java",
  "Flutter",
  "AWS",
  "Figma",
  "Git",
  "Linux",
  "Docker",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-20 px-12 md:px-20 border-t border-white/10">
      <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-12">
        Skills
      </p>
      <motion.div ref={ref} className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="px-4 py-2 border border-white/20 text-white/60 text-sm tracking-wide rounded-3xl hover:border-white/50 hover:text-white transition-all">
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
