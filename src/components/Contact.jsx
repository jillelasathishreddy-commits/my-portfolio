
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";
import { Github, Linkedin } from "./Icons";

const CONTACT_EMAIL = "jillelasathishreddy@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  function updateField(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...form,
            _subject: `Portfolio contact: ${form.subject}`,
            _template: "table",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || result.success === "false" ||
          result.success === false) {
        throw new Error("Message could not be sent.");
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section-container content-section" id="contact">
      <div className="section-title">
        <span className="eyebrow">LET'S CONNECT</span>
        <h2>Get In <span className="gradient-text">Touch</span></h2>
      </div>

      <p className="section-description">
        Have a project idea, an opportunity, or a question? Send me a message.
      </p>

      <div className="contact-grid">
        <motion.div
          className="contact-info glass-card"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Let's talk about your idea.</h3>
          <p>
            I'm open to connecting with developers, learning communities,
            and people building interesting projects.
          </p>

          <a className="contact-detail" href={`mailto:${CONTACT_EMAIL}`}>
            <Mail /><span><small>Email</small>{CONTACT_EMAIL}</span>
          </a>

          <div className="contact-detail">
            <MapPin /><span><small>Location</small>India</span>
          </div>

          <div className="social-links">
            <a href="https://github.com/jillelasathishreddy-commits"
               target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/sathish-reddy-jillela/"
               target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
        </motion.div>

        <form className="contact-form glass-card" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            value={form.name}
            onChange={updateField}
            placeholder="Enter your name"
            autoComplete="name"
            maxLength={100}
            required
          />

          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={form.email}
            onChange={updateField}
            placeholder="you@example.com"
            autoComplete="email"
            maxLength={254}
            required
          />

          <label htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={updateField}
            placeholder="What would you like to discuss?"
            maxLength={150}
            required
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={updateField}
            placeholder="Write your message..."
            rows={5}
            maxLength={5000}
            required
          />

          <button
            className="button button-gradient"
            type="submit"
            disabled={status === "sending"}
          >
            <Send size={17} />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="form-success" role="status">
              Your message was submitted successfully.
            </p>
          )}

          {status === "error" && (
            <div className="form-error" role="alert">
              <p>Unable to send via automated form right now.</p>
              <a
                className="button button-outline"
                style={{ marginTop: "10px", fontSize: "12px", minHeight: "36px", padding: "0 12px" }}
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Sathish,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`}
              >
                Send via Email App ↗
              </a>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
