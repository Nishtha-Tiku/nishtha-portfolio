import type { ReactNode } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollUI from "@/components/ScrollUI";
import Reveal from "@/components/Reveal";
import GlowCard from "@/components/GlowCard";
import Contact from "@/components/Contact";
import {
  BriefcaseIcon,
  CheckIcon,
  CodeIcon,
  ExternalIcon,
  FolderIcon,
  GithubIcon,
  MessageIcon,
  RocketIcon,
  TrophyIcon,
} from "@/components/Icons";
import { achievements, experience, footerRoles, profile, projects, skills } from "@/lib/data";

function SectionTitle({ icon, title, subtitle }: { icon: ReactNode; title: string; subtitle: string }) {
  return (
    <div className="sec-title">
      <h2>
        <span className="sec-icon">{icon}</span>
        {title}
      </h2>
      <p>{subtitle}</p>
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((t) => (
        <li key={t} className="chip">
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <ScrollUI />
      <Header />
      <main>
        <Hero />
        <div className="wrap">
          <section id="experience" className="section">
            <Reveal>
              <SectionTitle
                icon={<BriefcaseIcon />}
                title="Experience"
                subtitle="Roles where I've built enterprise integrations."
              />
            </Reveal>
            <div className="grid-2">
              {experience.map((job, i) => (
                <Reveal key={job.org} className={job.wide ? "span-2" : ""} delay={i * 0.08}>
                  <GlowCard className="full">
                    <div className="card-head">
                      <div>
                        <h3>{job.role}</h3>
                        <p className="muted">{job.org}</p>
                      </div>
                      <div className="card-meta">
                        <p>{job.period}</p>
                        <p>{job.place}</p>
                      </div>
                    </div>
                    <ul className={`check-list ${job.wide ? "cols-2" : ""}`}>
                      {job.points.map((p) => (
                        <li key={p}>
                          <CheckIcon size={16} />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <Tags items={job.tags} />
                  </GlowCard>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="projects" className="section">
            <Reveal>
              <SectionTitle
                icon={<RocketIcon />}
                title="Projects"
                subtitle="Selected work across integrations, applied AI and machine learning."
              />
            </Reveal>
            <div className="grid-2">
              {projects.map((p, i) => (
                <Reveal key={p.name} delay={(i % 2) * 0.08}>
                  <GlowCard className="full">
                    <div className="card-head">
                      <div>
                        <h3>{p.name}</h3>
                        <p className="muted small">{p.period}</p>
                      </div>
                      <div className="proj-links">
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} code on GitHub`} title="Code on GitHub">
                            <GithubIcon size={22} />
                          </a>
                        )}
                        {p.demo && (
                          <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} website`} title="Live website">
                            <ExternalIcon size={22} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="proj-text">{p.text}</p>
                    <ul className="check-list">
                      {p.bullets.map((b) => (
                        <li key={b}>
                          <CheckIcon size={16} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Tags items={p.tags} />
                  </GlowCard>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="achievements" className="section">
            <Reveal>
              <SectionTitle
                icon={<TrophyIcon />}
                title="Education & Recognition"
                subtitle="Where I studied and what I've been recognised for."
              />
            </Reveal>
            <div className="grid-4">
              {achievements.map((a, i) => (
                <Reveal key={a.title} delay={i * 0.06}>
                  <GlowCard className="full">
                    <h3>{a.title}</h3>
                    <p className="accent-text small">{a.meta}</p>
                    <p className="muted">{a.text}</p>
                    {a.href && (
                      <a className="paper-link" href={a.href} target="_blank" rel="noopener noreferrer">
                        {a.linkLabel ?? "View"} <ExternalIcon size={16} />
                      </a>
                    )}
                  </GlowCard>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="skills" className="section">
            <Reveal>
              <SectionTitle
                icon={<CodeIcon />}
                title="Technical Skills"
                subtitle="A snapshot of the tools and technologies I work with."
              />
            </Reveal>
            <div className="grid-2">
              {skills.map((s, i) => (
                <Reveal key={s.group} delay={(i % 2) * 0.08}>
                  <GlowCard className="full">
                    <h3 className="skill-title">
                      <FolderIcon size={18} />
                      {s.group}
                    </h3>
                    <Tags items={s.items} />
                  </GlowCard>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="contact" className="section">
            <Reveal>
              <SectionTitle
                icon={<MessageIcon />}
                title="Contact Me"
                subtitle="Let's talk about building something impactful together."
              />
            </Reveal>
            <Contact />
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>{footerRoles}</p>
        </div>
      </footer>
    </>
  );
}
