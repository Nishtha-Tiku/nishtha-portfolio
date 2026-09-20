"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import GlowCard from "./GlowCard";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import { gmailCompose, impact, profile, reachOut } from "@/lib/data";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Mode = "message" | "referral";
type Status = "idle" | "sending" | "sent" | "opened" | "error" | "invalid";

export default function Contact() {
  const [mode] = useState<Mode>("message");   // referral mode is switched off for now
  const [status, setStatus] = useState<Status>("idle");

  // Referral mode is switched off for now. To bring it back, restore setMode and this listener:
  // useEffect(() => {
  //   const onReferral = () => setMode("referral");
  //   window.addEventListener("portfolio:referral", onReferral);
  //   return () => window.removeEventListener("portfolio:referral", onReferral);
  // }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("botcheck")) return;

    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const link = String(fd.get("link") ?? "").trim();
    const subjectField = String(fd.get("subject") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const subject = mode === "referral" ? `Referral: ${company || subjectField || "opportunity"}` : subjectField;
    if (!name || !email || !message || !subject || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("invalid");
      return;
    }
    const details = mode === "referral" ? `Company: ${company}\nJob link: ${link}\n\n` : "";
    const body = `${details}${message}`;

    if (WEB3FORMS_KEY) {
      setStatus("sending");
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            name,
            email,
            subject: `[Portfolio] ${subject}`,
            message: body,
            from_name: "Portfolio contact form",
          }),
        });
        const json = await res.json();
        if (json.success) {
          setStatus("sent");
          form.reset();
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    } else {
      window.open(gmailCompose(subject, `${body}\n\nFrom: ${name} (${email})`), "_blank", "noopener,noreferrer");
      setStatus("opened");
    }
  }

  const messages: Record<Status, string> = {
    idle: "",
    sending: "Sending...",
    sent: "Thanks! Your message has been sent.",
    opened: "Gmail opened in a new tab with your message. Press send there to finish.",
    error: "Something went wrong. Please use the email button instead.",
    invalid: "Please fill in every required field with a valid email.",
  };

  return (
    <div className="contact-grid">
      <Reveal>
        <GlowCard className="contact-info">
          <p className="eyebrow">Let&apos;s work together</p>
          <h3>Opportunities &amp; Collaboration</h3>
          <p>Open to backend and integration engineering roles.</p>
          <p>Happy to talk about enterprise integrations, Java microservices and applied AI.</p>
          <p className="muted small">For the fastest response, use the form or the email button.</p>

          <h4>What you can reach out for:</h4>
          <ul className="dot-list">
            {reachOut.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>

          <h4>Impact Snapshot</h4>
          <div className="impact-grid">
            {impact.map((i) => (
              <div key={i} className="impact-tile">
                {i}
              </div>
            ))}
          </div>

          <div className="contact-socials">
            <a href={gmailCompose()} target="_blank" rel="noopener noreferrer" aria-label="Email me on Gmail">
              <MailIcon size={24} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={24} />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={24} />
            </a>
          </div>
        </GlowCard>
      </Reveal>

      <Reveal delay={0.1}>
        <GlowCard className="contact-form-card">
          <div className="form-head">
            <div>
              <h3>Send a Message</h3>
              <p className="muted small">Let&apos;s connect! I reply as soon as I can.</p>
            </div>
            {/* Message / Referral toggle switched off for now
            <div className="mode-toggle" role="group" aria-label="Message type">
              <button type="button" aria-pressed={mode === "message"} onClick={() => setMode("message")}>
                Message
              </button>
              <button type="button" aria-pressed={mode === "referral"} onClick={() => setMode("referral")}>
                Referral
              </button>
            </div>
            */}
          </div>

          <form onSubmit={onSubmit} noValidate>
            <input type="text" name="botcheck" className="sr-only" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className="form-row">
              <label>
                Name <span className="req">*</span>
                <input name="name" type="text" placeholder="Full Name" autoComplete="name" required />
              </label>
              <label>
                Email <span className="req">*</span>
                <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
              </label>
            </div>

            {/* Referral fields switched off for now
            {mode === "referral" && (
              <div className="form-row">
                <label>
                  Company
                  <input name="company" type="text" placeholder="Company you are referring me to" />
                </label>
                <label>
                  Job link
                  <input name="link" type="url" placeholder="https://..." />
                </label>
              </div>
            )}
            */}

            <label>
              Subject <span className="req">*</span>
              <input
                name="subject"
                type="text"
                placeholder={mode === "referral" ? "Role or team" : "Job opportunity, collaboration, question..."}
                required
              />
            </label>
            <label>
              Message <span className="req">*</span>
              <textarea name="message" rows={5} placeholder="Tell me a bit about what you have in mind..." required />
            </label>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                <MailIcon size={18} /> {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>
            <p className={`form-status ${status}`} role="status" aria-live="polite">
              {messages[status]}
            </p>
          </form>
        </GlowCard>
      </Reveal>
    </div>
  );
}
