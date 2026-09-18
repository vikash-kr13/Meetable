import React from 'react';
import './SiteFooter.css';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <svg width="24" height="24" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="18" fill="var(--color-accent)" stroke="var(--color-accent-hover)" strokeWidth="1.5"/>
            <g transform="translate(24, 8)"><circle cx="0" cy="-1" r="2" fill="var(--color-bg)"/><path d="M-2.5 1.5 Q-3 4 -1.5 5 L0 4 L1.5 5 Q3 4 2.5 1.5 Q1 0 0 1 Q-1 0 -2.5 1.5Z" fill="var(--color-bg)"/></g>
            <g transform="translate(38, 24)"><circle cx="0" cy="-1" r="2" fill="var(--color-kraft)"/><path d="M-2.5 1.5 Q-3 4 -1.5 5 L0 4 L1.5 5 Q3 4 2.5 1.5 Q1 0 0 1 Q-1 0 -2.5 1.5Z" fill="var(--color-kraft)"/></g>
            <g transform="translate(24, 38)"><circle cx="0" cy="-1" r="2" fill="var(--color-bg)"/><path d="M-2.5 1.5 Q-3 4 -1.5 5 L0 4 L1.5 5 Q3 4 2.5 1.5 Q1 0 0 1 Q-1 0 -2.5 1.5Z" fill="var(--color-bg)"/></g>
            <g transform="translate(10, 24)"><circle cx="0" cy="-1" r="2" fill="var(--color-kraft)"/><path d="M-2.5 1.5 Q-3 4 -1.5 5 L0 4 L1.5 5 Q3 4 2.5 1.5 Q1 0 0 1 Q-1 0 -2.5 1.5Z" fill="var(--color-kraft)"/></g>
          </svg>
          <span className="footer__wordmark">Grouproll</span>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} Grouproll. Built for independent game stores.
        </p>
        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="#how-it-works" className="footer__link">How it works</a>
          <a href="#pricing" className="footer__link">Pricing</a>
          <a href="#faq" className="footer__link">FAQ</a>
        </nav>
      </div>
    </footer>
  );
}
