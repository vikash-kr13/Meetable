import React, { useState } from 'react';
import { useEntrance } from '../hooks/useEntrance';
import { saveLead, LeadSource } from '../leads';
import './Pricing.css';

interface Tier {
  id: string;
  name: string;
  price: string;
  per: string;
  best: string;
  bullets: string[];
  recommended: boolean;
  btnLabel: string;
  source: LeadSource;
}

const tiers: Tier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$79',
    per: '/mo',
    best: 'Testing one weeknight',
    bullets: [
      '1 store, up to 4 events per month',
      'Player profiles and signup page',
      'Email reminders and waitlist backfill',
      'Email support',
    ],
    recommended: false,
    btnLabel: 'Reserve Starter',
    source: 'tier-starter',
  },
  {
    id: 'fullhouse',
    name: 'Full House',
    price: '$149',
    per: '/mo',
    best: 'Stores running two or more nights a week',
    bullets: [
      'Unlimited events',
      'Automatic table matching',
      'Monday filled-seats report',
      'Priority support',
    ],
    recommended: true,
    btnLabel: 'Reserve Full House',
    source: 'tier-fullhouse',
  },
  {
    id: 'multi',
    name: 'Multi-Location',
    price: '$299',
    per: '/mo',
    best: 'Owners with more than one storefront',
    bullets: [
      'Everything in Full House',
      'Up to 3 storefronts',
      'A signup page and calendar per location',
      'Onboarding call for each store',
    ],
    recommended: false,
    btnLabel: 'Reserve Multi-Location',
    source: 'tier-multilocation',
  },
];

interface TierModalProps {
  tier: Tier;
  onClose: () => void;
}

function TierModal({ tier, onClose }: TierModalProps) {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [err, setErr] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErr('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    try {
      await saveLead({ email, source: tier.source, tier: tier.name });
      setStatus('success');
    } catch {
      setStatus('error');
      setErr('Something went wrong. Please try again.');
    }
  }

  return (
    <div className="tier-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="tier-modal-title" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="tier-modal">
        <button className="tier-modal__close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <h3 id="tier-modal-title" className="tier-modal__title">Reserve {tier.name} — {tier.price}{tier.per}</h3>
        <p className="tier-modal__sub">
          Founding stores get early access in their metro, first month free at launch — no card, no commitment.
        </p>

        {status === 'success' ? (
          <div className="tier-modal__success" role="alert">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <p>
              <strong>You're on the founding-store list.</strong> Within 48 hours we'll email you a sample matched-table report built from a player list like yours — reply with your store's usual game night and we'll build it around your schedule.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="tier-modal__form">
            {/* Honeypot */}
            <label className="sr-only" htmlFor={`hp-tier-${tier.id}`}>Leave this blank</label>
            <input
              id={`hp-tier-${tier.id}`}
              type="text"
              value={honeypot}
              onChange={e => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="ec-honeypot"
            />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@store-email.com"
              className="tier-modal__input"
              autoComplete="email"
              required
              disabled={status === 'loading'}
              aria-label="Your store email address"
            />
            {err && <p className="tier-modal__err" role="alert">{err}</p>}
            <button type="submit" className="btn-primary tier-modal__btn" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending…' : `Reserve ${tier.name}`}
            </button>
            <p className="tier-modal__privacy">We only email you about Grouproll. No lists sold, ever.</p>
          </form>
        )}
      </div>
    </div>
  );
}

export default function Pricing() {
  const ref = useEntrance<HTMLElement>();
  const [activeTier, setActiveTier] = useState<Tier | null>(null);

  return (
    <section id="pricing" className="pricing section-surface" ref={ref}>
      <div className="container">
        <h2 className="pricing__headline">Priced under your POS line</h2>
        <div className="pricing__grid">
          {tiers.map((t, i) => (
            <div
              key={t.id}
              className={`pricing__card card${t.recommended ? ' pricing__card--recommended' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {t.recommended && (
                <div className="pricing__badge">Recommended</div>
              )}
              <div className="pricing__card-top">
                <span className="pricing__tier-name">{t.name}</span>
                <div className="pricing__price-row">
                  <span className="pricing__price">{t.price}</span>
                  <span className="pricing__per">{t.per}</span>
                </div>
                <p className="pricing__best">Best for: {t.best}</p>
              </div>
              <ul className="pricing__bullets" role="list">
                {t.bullets.map((b, j) => (
                  <li key={j} className="pricing__bullet">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <button
                className={t.recommended ? 'btn-primary pricing__btn' : 'btn-secondary pricing__btn'}
                onClick={() => setActiveTier(t)}
              >
                {t.btnLabel}
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeTier && (
        <TierModal tier={activeTier} onClose={() => setActiveTier(null)} />
      )}
    </section>
  );
}
