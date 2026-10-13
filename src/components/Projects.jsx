
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink, ShoppingBag, GraduationCap,
  BrainCircuit, Map, FolderCode,
} from "lucide-react";
import { Github } from "./Icons";
import projects from "../data/projects";

const categories = ["All", "Full-Stack", "AI"];

const icons = {
  "shopping-bag": ShoppingBag,
  "graduation-cap": GraduationCap,
  "brain-circuit": BrainCircuit,
  map: Map,
  "folder-code": FolderCode,
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section className="section-container content-section" id="projects">
      <div className="section-title">
        <span className="eyebrow">MY RECENT WORK</span>
        <h2>Featured <span className="gradient-text">Projects</span></h2>
      </div>

      <div className="projects-intro">
        <p className="section-description">
          Projects I've built or am exploring. Select a category to filter.
        </p>

        <div className="project-filters" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`filter-button ${
                activeFilter === category ? "filter-active" : ""
              }`}
              onClick={() => setActiveFilter(category)}
              aria-pressed={activeFilter === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => {
          const Icon = icons[project.icon] || FolderCode;

          return (
            <motion.article
              layout
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <div className="project-top">
                <span className="project-number">
                  {String(project.id).padStart(2, "0")}
                </span>
                <Icon className="project-symbol" size={28} />
              </div>

              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <span
                className={`project-status ${
                  project.status === "Live"
                    ? "status-active"
                    : project.status === "In Development"
                    ? "status-dev"
                    : "status-planned"
                }`}
              >
                {project.status}
              </span>

              <div className="tech-tags">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github ? (
                  <a href={project.github}
                     target="_blank" rel="noreferrer">
                    <Github size={16} /> GitHub
                  </a>
                ) : (
                  <span className="link-pending">Repository to add</span>
                )}

                {project.demo && (
                  <a href={project.demo}
                     target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
