
import { GraduationCap, MapPin, Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const details = [
  {
    Icon: GraduationCap,
    title: "Education",
    value: "BSc — Computer Science",
  },
  {
    Icon: MapPin,
    title: "Location",
    value: "India",
  },
  {
    Icon: Lightbulb,
    title: "Interests",
    value: "Web Development, AI, RAG, GeoAI",
  },
  {
    Icon: Target,
    title: "Career Goal",
    value: "Grow as a Full-Stack + AI Developer",
  },
];

export default function About() {
  return (
    <section className="section-container content-section" id="about">
      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <div className="section-title">
            <span className="eyebrow">GET TO KNOW ME</span>
            <h2>Who Am <span className="gradient-text">I?</span></h2>
          </div>

          <p className="section-description">
            I'm Sathish Reddy, a computer science student and aspiring
            Full-Stack Developer. I enjoy building applications with
            React, Node.js, Express, and MongoDB.
          </p>

          <p className="section-description">
            I'm also exploring AI, machine learning, retrieval-augmented
            generation, and GeoAI. My goal is to keep learning, solve
            real-world problems, and create meaningful software.
          </p>

          <a className="text-link" href="#contact">
            Let's connect <span>↗</span>
          </a>
        </div>

        <div className="about-details glass-card">
          {details.map(({ Icon, title, value }) => (
            <div className="detail-row" key={title}>
              <span className="detail-icon"><Icon size={20} /></span>
              <div>
                <span>{title}</span>
                <strong>{value}</strong>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
