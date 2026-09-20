"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { MenuIcon, CloseIcon } from "./Icons";
import { profile } from "@/lib/data";

const links = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "experience", "projects", "skills", "achievements", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Referral tab is switched off for now. To bring it back, uncomment this function and the link below.
  // function openReferral() {
  //   setOpen(false);
  //   window.dispatchEvent(new CustomEvent("portfolio:referral"));
  // }

  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="#home" className="brand" aria-label={`${profile.name}, home`}>
          <span className="avatar">{profile.initials}</span>
          <span className="brand-text">
            <span className="brand-name">{profile.name}</span>
            <span className="brand-sub">
              {profile.role} · {profile.location}
            </span>
          </span>
        </a>

        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          {/* Referral link switched off for now
          <a href="#contact" onClick={openReferral}>
            Referral
          </a>
          */}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <button
            type="button"
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
