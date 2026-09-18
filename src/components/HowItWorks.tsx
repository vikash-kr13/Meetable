import React from 'react';
import { useEntrance } from '../hooks/useEntrance';
import './HowItWorks.css';

const steps = [
  {
    num: '01',
    title: 'Upload your list and calendar',
    body: 'Paste your player emails and Discord names, add your game library and this month\'s events. Takes one afternoon, once.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Players pick games, times, and skill',
    body: 'Your store gets a signup link. Players say what they\'ll play, when they\'re free, and how experienced they are.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Grouproll builds the tables',
    body: 'Compatible 4–6 person tables form automatically. Reminders go out, cancellations get backfilled from the waitlist, and every Monday you see exactly how many seats you filled.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useEntrance<HTMLElement>();

  return (
    <section id="how-it-works" className="hiw section-bg" ref={ref}>
      <div className="container">
        <h2 className="hiw__headline">Three steps to a full room</h2>
        <div className="hiw__grid">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="hiw__card card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="hiw__card-top">
                <span className="hiw__num">{s.num}</span>
                {s.icon}
              </div>
              <h3 className="hiw__card-title">{s.title}</h3>
              <p className="hiw__card-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
