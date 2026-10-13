
import { useEffect, useState } from "react";
import { Menu, X, Download, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -35, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a className="brand" href="#home" onClick={closeMenu}>
        <Code2 className="brand-icon" size={30} />
        <span>Sathish <span className="gradient-text">Reddy</span></span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav
        id="primary-navigation"
        className={`nav-links ${menuOpen ? "nav-open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? "nav-active" : ""}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        className="button button-gradient resume-button"
        href="./resume.pdf"
        target="_blank"
        rel="noreferrer"
        download="Sathish_Reddy_Resume.pdf"
      >
        <Download size={16} />
        Resume
      </a>
    </motion.header>
  );
}
