import React, { useState, useEffect } from 'react';
import './Nav.css';

interface Props {
  onCTAClick: () => void;
}

export default function Nav({ onCTAClick }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} aria-label="Main navigation">
      <div className="nav__inner container">
        {/* Logo + Wordmark */}
        <a href="#top" className="nav__brand" aria-label="Grouproll home">
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="18" fill="var(--color-accent)" stroke="var(--color-accent-hover)" strokeWidth="1.5"/>
            <circle cx="24" cy="24" r="15" fill="none" stroke="var(--color-kraft)" strokeWidth="0.75" opacity="0.6"/>
            {/* Meeple top */}
            <g transform="translate(24, 8)">
              <circle cx="0" cy="-1" r="2" fill="var(--color-bg)"/>
              <path d="M-2.5 1.5 Q-3 4 -1.5 5 L0 4 L1.5 5 Q3 4 2.5 1.5 Q1 0 0 1 Q-1 0 -2.5 1.5Z" fill="var(--color-bg)"/>
            </g>
            {/* Meeple right */}
            <g transform="translate(38, 24)">
              <circle cx="0" cy="-1" r="2" fill="var(--color-kraft)"/>
              <path d="M-2.5 1.5 Q-3 4 -1.5 5 L0 4 L1.5 5 Q3 4 2.5 1.5 Q1 0 0 1 Q-1 0 -2.5 1.5Z" fill="var(--color-kraft)"/>
            </g>
            {/* Meeple bottom */}
            <g transform="translate(24, 38)">
              <circle cx="0" cy="-1" r="2" fill="var(--color-bg)"/>
              <path d="M-2.5 1.5 Q-3 4 -1.5 5 L0 4 L1.5 5 Q3 4 2.5 1.5 Q1 0 0 1 Q-1 0 -2.5 1.5Z" fill="var(--color-bg)"/>
            </g>
            {/* Meeple left */}
            <g transform="translate(10, 24)">
              <circle cx="0" cy="-1" r="2" fill="var(--color-kraft)"/>
              <path d="M-2.5 1.5 Q-3 4 -1.5 5 L0 4 L1.5 5 Q3 4 2.5 1.5 Q1 0 0 1 Q-1 0 -2.5 1.5Z" fill="var(--color-kraft)"/>
            </g>
          </svg>
          <span className="nav__wordmark">Grouproll</span>
        </a>

        {/* Links */}
        <ul className="nav__links">
          <li><a href="#how-it-works" className="nav__link">How it works</a></li>
          <li><a href="#pricing" className="nav__link">Pricing</a></li>
          <li><a href="#faq" className="nav__link">FAQ</a></li>
        </ul>

        {/* CTA */}
        <button className="btn-primary nav__cta" onClick={onCTAClick}>
          Get founding-store access
        </button>
      </div>
    </nav>
  );
}
