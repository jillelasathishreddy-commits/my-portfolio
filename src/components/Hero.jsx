
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Mail, Sparkles } from "lucide-react";
import { Github, LinkedinIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="hero section-container" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="hello-badge">
          <Sparkles size={15} /> Hello, welcome to my portfolio
        </div>

        <h1>
          Hi, I'm <span className="gradient-text">Sathish Reddy</span>
        </h1>

        <h2 className="hero-role">
          Full-Stack Developer <span>&amp;</span> AI Enthusiast
        </h2>

        <p className="hero-description">
          I'm a computer science student passionate about building
          useful web applications and exploring Artificial Intelligence.
          I enjoy learning new technologies and turning ideas into
          practical projects.
        </p>

        <div className="hero-actions">
          <a className="button button-gradient" href="#projects">
            Explore Projects <ArrowUpRight size={18} />
          </a>
          <a
            className="button button-outline"
            href="./resume.pdf"
            target="_blank"
            rel="noreferrer"
            download="Sathish_Reddy_Resume.pdf"
          >
            Resume <Download size={16} />
          </a>
          <a className="button button-outline" href="#contact">
            Contact Me <Mail size={17} />
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/jillelasathishreddy-commits"
             target="_blank" rel="noreferrer"
             aria-label="GitHub profile">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/sathish-reddy-jillela/"
             target="_blank" rel="noreferrer"
             aria-label="LinkedIn profile">
            <LinkedinIcon />
          </a>
          <a href="mailto:jillelasathishreddy@gmail.com" aria-label="Email Sathish Reddy">
            <Mail />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />

        <div className="profile-glow">
          <img
            src="./profile.png"
            alt="Sathish Reddy"
            className="profile-image"
            onError={(event) => {
              if (!event.currentTarget.src.endsWith("profile.jpg")) {
                event.currentTarget.src = "./profile.jpg";
              } else {
                event.currentTarget.style.display = "none";
                event.currentTarget.nextElementSibling.style.display = "grid";
              }
            }}
          />
          <div className="profile-fallback">SR</div>
        </div>

        <div className="floating-card learning-card">
          <Sparkles className="floating-icon" />
          <div>
            <strong>Always Learning</strong>
            <p>Building one project at a time</p>
          </div>
        </div>

        <div className="code-note">Code. Build. Grow.</div>
      </motion.div>

      <div className="hero-stats">
        <div className="stat">
          <span className="stat-icon"><Github /></span>
          <div><strong>Build</strong><p>Real-world projects</p></div>
        </div>
        <div className="stat">
          <span className="stat-icon">{"</>"}</span>
          <div><strong>Develop</strong><p>Full-stack applications</p></div>
        </div>
        <div className="stat">
          <span className="stat-icon"><Sparkles /></span>
          <div><strong>Explore</strong><p>AI technologies</p></div>
        </div>
        <div className="stat">
          <span className="stat-icon"><ArrowDown /></span>
          <div><strong>Improve</strong><p>Every day</p></div>
        </div>
      </div>
    </section>
  );
}
