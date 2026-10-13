
import { ArrowUp, Code2, Heart } from "lucide-react";
import { Github, Linkedin } from "./Icons";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="brand">
        <Code2 className="brand-icon" />
        <span>Sathish <span className="gradient-text">Reddy</span></span>
      </a>

      <p>
        Built with React and <Heart size={14} className="heart-icon" />
        curiosity.
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <a
          href="https://github.com/jillelasathishreddy-commits"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          style={{ color: "var(--subtle)", display: "flex", alignItems: "center", transition: "color 0.2s" }}
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/sathish-reddy-jillela/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          style={{ color: "var(--subtle)", display: "flex", alignItems: "center", transition: "color 0.2s" }}
        >
          <Linkedin size={18} />
        </a>
      </div>

      <a className="back-top" href="#home">
        Back to top <ArrowUp size={15} />
      </a>

      <small className="copyright">
        © {CURRENT_YEAR} Sathish Reddy. All rights reserved. • jillelasathishreddy@gmail.com
      </small>
    </footer>
  );
}
