import { Link } from "react-scroll";
import { motion } from "framer-motion";

const links = ["about", "skills", "what i build", "contact"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-sm">
      <span className="text-sm font-semibold tracking-widest uppercase text-white/80">
        Salwa
      </span>
      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link}>
            <Link
              to={link}
              smooth={true}
              duration={600}
              className="text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors cursor-pointer">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
