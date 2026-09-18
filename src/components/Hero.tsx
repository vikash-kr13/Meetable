import React from 'react';
import EmailCapture from './EmailCapture';
import './Hero.css';

interface Props {
  captureRef?: React.RefObject<HTMLDivElement>;
}

// Inline SVG hero image: warm game store table from slight angle,
// wooden surface, green felt mat, kraft-brown game boxes, warm pendant light, cream background.
function HeroImage() {
  return (
    <div className="hero__image-wrap" aria-hidden="true">
      <svg
        viewBox="0 0 560 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero__svg"
        role="img"
        aria-label="Five adults seated at a wooden game store table mid-game, warm pendant lighting"
      >
        {/* Background — warm cream matching site bg */}
        <rect width="560" height="460" fill="#F5EFE3"/>

        {/* Pendant light glow from above */}
        <ellipse cx="280" cy="60" rx="120" ry="40" fill="#FDF3D0" opacity="0.7"/>
        <circle cx="280" cy="45" r="12" fill="#E8C860" opacity="0.9"/>
        <line x1="280" y1="0" x2="280" y2="33" stroke="#C8A840" strokeWidth="2"/>

        {/* Table surface — wooden warm brown, perspective */}
        <ellipse cx="280" cy="270" rx="240" ry="110" fill="#8B5E3C"/>
        <ellipse cx="280" cy="270" rx="236" ry="106" fill="#9E6B45"/>
        {/* Wood grain lines */}
        <path d="M60 250 Q280 230 500 250" stroke="#7A4F2D" strokeWidth="1" opacity="0.4"/>
        <path d="M80 265 Q280 248 480 265" stroke="#7A4F2D" strokeWidth="1" opacity="0.3"/>
        <path d="M70 280 Q280 260 490 280" stroke="#7A4F2D" strokeWidth="1" opacity="0.3"/>

        {/* Green felt game mat in center */}
        <ellipse cx="280" cy="262" rx="160" ry="68" fill="var(--color-accent)" opacity="0.85"/>
        <ellipse cx="280" cy="262" rx="156" ry="64" fill="none" stroke="var(--color-accent-hover)" strokeWidth="1.5" opacity="0.5"/>

        {/* Game box — Kraft brown center */}
        <rect x="220" y="235" width="80" height="52" rx="4" fill="#C4955A" transform="rotate(-8 260 261)"/>
        <rect x="222" y="237" width="76" height="48" rx="3" fill="#A67C52" transform="rotate(-8 260 261)"/>
        <rect x="228" y="240" width="52" height="8" rx="2" fill="#8B5E3C" transform="rotate(-8 260 261)" opacity="0.6"/>

        {/* Second game box */}
        <rect x="290" y="230" width="72" height="48" rx="4" fill="#B8860B" transform="rotate(5 326 254)"/>
        <rect x="292" y="232" width="68" height="44" rx="3" fill="#9A7209" transform="rotate(5 326 254)"/>

        {/* Scattered cards/tokens */}
        <rect x="180" y="255" width="28" height="36" rx="3" fill="#FFFEF5" stroke="var(--color-border)" strokeWidth="1" transform="rotate(-15 194 273)"/>
        <rect x="350" y="248" width="28" height="36" rx="3" fill="#FFFEF5" stroke="var(--color-border)" strokeWidth="1" transform="rotate(12 364 266)"/>
        <circle cx="185" cy="290" r="8" fill="#E8C860" opacity="0.9"/>
        <circle cx="375" cy="285" r="8" fill="#E8C860" opacity="0.9"/>
        <circle cx="270" cy="305" r="6" fill="var(--color-accent)" opacity="0.8"/>

        {/* ---- FIGURES (5 players, stylized silhouettes) ---- */}

        {/* Player 1 — top/far side, center-left */}
        <g transform="translate(195, 155)">
          {/* Head */}
          <circle cx="0" cy="0" r="18" fill="#D4A574"/>
          {/* Hair */}
          <ellipse cx="0" cy="-14" rx="18" ry="10" fill="#4A3728"/>
          {/* Body/torso */}
          <path d="M-20 18 Q-22 55 -16 65 L16 65 Q22 55 20 18 Q8 12 0 14 Q-8 12 -20 18Z" fill="#4A6FA5"/>
          {/* Arms on table */}
          <path d="M-20 30 Q-45 45 -50 62" stroke="#D4A574" strokeWidth="8" strokeLinecap="round"/>
          <path d="M20 30 Q42 45 46 60" stroke="#D4A574" strokeWidth="8" strokeLinecap="round"/>
        </g>

        {/* Player 2 — top/far side, center-right */}
        <g transform="translate(365, 148)">
          <circle cx="0" cy="0" r="18" fill="#C68642"/>
          <ellipse cx="0" cy="-14" rx="18" ry="10" fill="#2C2018"/>
          <path d="M-20 18 Q-22 55 -16 65 L16 65 Q22 55 20 18 Q8 12 0 14 Q-8 12 -20 18Z" fill="#8B4513"/>
          <path d="M-20 30 Q-45 45 -50 62" stroke="#C68642" strokeWidth="8" strokeLinecap="round"/>
          <path d="M20 30 Q42 45 46 60" stroke="#C68642" strokeWidth="8" strokeLinecap="round"/>
        </g>

        {/* Player 3 — left side */}
        <g transform="translate(68, 258)">
          <circle cx="0" cy="0" r="19" fill="#8D5524"/>
          <ellipse cx="0" cy="-15" rx="19" ry="11" fill="#1A0F08"/>
          <path d="M-21 19 Q-24 58 -17 68 L17 68 Q24 58 21 19 Q8 13 0 15 Q-8 13 -21 19Z" fill="#556B2F"/>
          <path d="M-21 32 Q-55 38 -60 52" stroke="#8D5524" strokeWidth="9" strokeLinecap="round"/>
          <path d="M21 32 Q55 38 62 50" stroke="#8D5524" strokeWidth="9" strokeLinecap="round"/>
        </g>

        {/* Player 4 — right side */}
        <g transform="translate(492, 252)">
          <circle cx="0" cy="0" r="19" fill="#FDBCB4"/>
          <ellipse cx="0" cy="-15" rx="19" ry="11" fill="#8B3A3A"/>
          <path d="M-21 19 Q-24 58 -17 68 L17 68 Q24 58 21 19 Q8 13 0 15 Q-8 13 -21 19Z" fill="#9B59B6"/>
          <path d="M-21 32 Q-55 38 -60 52" stroke="#FDBCB4" strokeWidth="9" strokeLinecap="round"/>
          <path d="M21 32 Q55 38 62 50" stroke="#FDBCB4" strokeWidth="9" strokeLinecap="round"/>
        </g>

        {/* Player 5 — near side, bottom-center */}
        <g transform="translate(280, 355)">
          <circle cx="0" cy="0" r="20" fill="#D4A574"/>
          <ellipse cx="0" cy="-16" rx="20" ry="12" fill="#3D2B1F"/>
          <path d="M-22 20 Q-25 60 -18 72 L18 72 Q25 60 22 20 Q9 14 0 16 Q-9 14 -22 20Z" fill="#2E4A6E"/>
          <path d="M-22 34 Q-65 32 -72 48" stroke="#D4A574" strokeWidth="10" strokeLinecap="round"/>
          <path d="M22 34 Q65 32 72 48" stroke="#D4A574" strokeWidth="10" strokeLinecap="round"/>
        </g>

        {/* Warm pendant light overlay glow */}
        <ellipse cx="280" cy="200" rx="200" ry="160" fill="#FDF3D0" opacity="0.15"/>

        {/* Table legs suggestion */}
        <rect x="130" y="355" width="18" height="80" rx="9" fill="#6B3E26" opacity="0.7"/>
        <rect x="415" y="355" width="18" height="80" rx="9" fill="#6B3E26" opacity="0.7"/>

        {/* Floor — warm wood */}
        <rect x="0" y="400" width="560" height="60" fill="#C4955A" opacity="0.3"/>
      </svg>
    </div>
  );
}

export default function Hero({ captureRef }: Props) {
  return (
    <section id="top" className="hero section-bg">
      <div className="container hero__container">
        <div className="hero__copy">
          <h1 className="hero__headline">
            Fill your Tuesday tables from the list you already have
          </h1>
          <p className="hero__sub">
            Grouproll turns your email and Discord list into matched 4–6 person tables — with reminders and a waitlist that backfills no-shows.
          </p>
          <div className="hero__capture" ref={captureRef}>
            <EmailCapture source="hero" />
          </div>
          <p className="hero__credibility">
            <span className="hero__stat">14,800</span> people a month search "board game cafe near me" — that demand walks past your door and leaves without a seat.
          </p>
        </div>
        <HeroImage />
      </div>
    </section>
  );
}
