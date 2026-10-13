
import { motion } from "framer-motion";
import {
  Globe, Server, Database, BrainCircuit,
  Map, Wrench,
} from "lucide-react";

const groups = [
  {
    title: "Frontend",
    Icon: Globe,
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend",
    Icon: Server,
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    Icon: Database,
    items: ["MongoDB", "Mongoose"],
  },
  {
    title: "AI & Machine Learning",
    Icon: BrainCircuit,
    items: ["Python", "LLMs", "RAG", "ML fundamentals"],
  },
  {
    title: "GeoAI & GIS",
    Icon: Map,
    items: ["GIS concepts", "Geospatial data", "GeoAI fundamentals"],
  },
  {
    title: "Tools",
    Icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export default function Skills() {
  return (
    <section className="section-container content-section" id="skills">
      <div className="section-title">
        <span className="eyebrow">MY TECHNICAL TOOLKIT</span>
        <h2>Skills &amp; <span className="gradient-text">Technologies</span></h2>
      </div>

      <p className="section-description">
        Technologies I'm learning and using to build projects.
      </p>

      <div className="skills-grid">
        {groups.map(({ title, Icon, items }, index) => (
          <motion.article
            className="skill-group"
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <div className="skill-group-heading">
              <span className="skill-icon"><Icon /></span>
              <h3>{title}</h3>
            </div>

            <div className="tech-tags">
              {items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
