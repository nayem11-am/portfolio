"use client";

import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Technologies", "#technologies"],
  ["Pleron Labs", "#pleron"],
  ["Contact", "#contact"],
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        className={`menu-toggle${isOpen ? " is-open" : ""}`}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      {isOpen && (
        <nav className="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">
          <div className="mobile-menu-list">
            {links.map(([label, href], index) => (
              <a href={href} key={href} onClick={() => setIsOpen(false)}>
                <span className="mobile-menu-index">0{index + 1}</span>
                <span className="mobile-menu-label">{label}</span>
                <span className="mobile-menu-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
