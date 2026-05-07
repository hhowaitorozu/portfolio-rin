import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Stacka — Mobile App",
    desc: "Note-sharing platform for university students. Flutter mobile app on Google Play Store version, backed by Supabase.",
    tags: ["Flutter", "Supabase", "PostgrSQL"],
    link: "https://play.google.com/store/apps/details?id=com.stacka.app",
    year: "2026",
  },
  {
    title: "Stacka — Web App",
    desc: "A landing page and sticky board to support of note-sharing mobile app platform for university students. Next.js web version, database sharing backed by Supabase.",
    tags: ["Next.js", "Supabase", "Laravel", "PostgreSQL"],
    link: "https://github.com/hhowaitorozu/web-stacka",
    year: "2026",
  },
  {
    title: "AWS SSM Dashboard",
    desc: "Security monitoring dashboard for on-premise servers using AWS Systems Manager Agent, CloudWatch, and Inspector.",
    tags: ["AWS", "Grafana", "Systems Manager", "CloudWatch"],
    link: "#",
    year: "2026",
  },
  {
    title: "GI Diagnosis System",
    desc: "Gastrointestinal infection diagnosis tool using a decision tree algorithm, built as a Java console application.",
    tags: ["Java", "Decision Tree", "Algorithm"],
    link: "https://github.com/hhowaitorozu/expertsystem-studycase",
    year: "2026",
  },
  {
    title: "EatWise",
    desc: "AI-powered meal prep planner. Input your weekly prep schedule and daily meal frequency, and get a personalized meal plan generated automatically.",
    tags: ["Next.js", "Tailwind", "AI-powered", "prisma", "PostgreSQL"],
    link: "https://github.com/hhowaitorozu/eat-wise",
    year: "2025",
  },
  {
    title: "School System Administration",
    desc: "Web-based academic management system with dual roles including admin dashboard for system control and staff portal for managing student data and grades.",
    tags: ["PHP", "MySQL"],
    link: "https://github.com/hhowaitorozu/school-system",
    year: "2025",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-20 px-12 md:px-20 border-t border-white/10">
      <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-12">
        Projects
      </p>
      <motion.div
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-[#0a0a0a] p-8 group hover:bg-white/5 transition-colors">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs text-white/40">{project.year}</span>
              <span className="text-white/20 group-hover:text-white/60 transition-colors text-lg">
                ↗
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white/40 border border-white/50 px-2 py-1 rounded-3xl">
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
