"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import NetworkBackground from "./NetworkBackground";
import Typewriter from "./Typewriter";
import { ArrowDownIcon, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, RocketIcon } from "./Icons";
import { gmailCompose, profile, roles } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function TiltPhoto() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 16 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 16 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="photo-perspective" onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div className="photo-stage" style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
        <div className="photo-glow" aria-hidden="true" />
        <div className="photo-card">
          <Image
            src="/profile.jpg"
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(max-width: 900px) 70vw, 420px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <NetworkBackground />
      <div className="wrap">
        <motion.div className="hero-grid" variants={container} initial="hidden" animate="show">
          <div className="hero-text">
            <motion.p variants={item} className="hero-pill">
              <span className="pulse" aria-hidden="true" />
              {profile.role} @ {profile.company}, {profile.location}
            </motion.p>
            <motion.p variants={item} className="hello">
              Hello, I&apos;m
            </motion.p>
            <motion.h1 variants={item}>{profile.name}</motion.h1>
            <motion.p variants={item} className="typed-line">
              <Typewriter words={roles} />
            </motion.p>
            <motion.p variants={item} className="hero-summary">
              {profile.summary}
            </motion.p>
            <motion.div variants={item} className="hero-actions">
              <a className="btn btn-primary" href={profile.resume} download="Nishtha_Tiku_Resume.pdf">
                <DownloadIcon size={18} /> Download Resume
              </a>
              <a className="btn btn-ghost" href="#projects">
                <RocketIcon size={18} /> Explore Projects
              </a>
            </motion.div>
            <motion.div variants={item} className="socials">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href={gmailCompose()} target="_blank" rel="noopener noreferrer" aria-label="Email me on Gmail">
                <MailIcon />
              </a>
            </motion.div>
          </div>
          <motion.div variants={item} className="hero-visual">
            <TiltPhoto />
          </motion.div>
        </motion.div>
      </div>
      <a href="#experience" className="scroll-hint" aria-label="Scroll to experience">
        Scroll to explore <ArrowDownIcon size={16} />
      </a>
    </section>
  );
}
