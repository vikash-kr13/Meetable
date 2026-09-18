import React from 'react';
import { useEntrance } from '../hooks/useEntrance';
import './Benefits.css';

const benefits = [
  {
    title: 'Full tables, not "interested" clicks',
    body: 'Matched groups commit to a specific table, game, and time — not a vague event RSVP.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {/* Table with four seats */}
        <rect x="6" y="8" width="12" height="8" rx="2"/>
        <line x1="12" y1="4" x2="12" y2="8"/>
        <line x1="12" y1="16" x2="12" y2="20"/>
        <line x1="6" y1="12" x2="3" y2="12"/>
        <line x1="18" y1="12" x2="21" y2="12"/>
        <circle cx="12" cy="3" r="1.5"/>
        <circle cx="12" cy="21" r="1.5"/>
        <circle cx="2" cy="12" r="1.5"/>
        <circle cx="22" cy="12" r="1.5"/>
      </svg>
    ),
  },
  {
    title: 'No-shows get backfilled',
    body: 'When someone cancels, the next compatible waitlisted player gets the seat before the night starts.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="17 1 21 5 17 9"/>
        <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
        <polyline points="7 23 3 19 7 15"/>
        <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
      </svg>
    ),
  },
  {
    title: 'Newcomers stay past round one',
    body: 'Beginners get seated together, with a teacher — so their first night isn\'t their last.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/>
        <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/>
        <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/>
        <path d="M14 14.5v1c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-1"/>
        <path d="M8.32 3.85C7.5 4.38 7 5.27 7 6.29V9.5C7 10.33 7.67 11 8.5 11H12"/>
        <path d="M17 11h.5c.83 0 1.5.67 1.5 1.5v5.5"/>
      </svg>
    ),
  },
  {
    title: 'Know which nights make money',
    body: 'The Monday report shows seats filled, no-show rate, and the games that pull people in.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
  {
    title: 'Your list, not a landlord\'s platform',
    body: 'Runs on your own player list — no Meetup organizer fees, no algorithm deciding who sees your event.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
      </svg>
    ),
  },
  {
    title: 'Set up once, runs weekly',
    body: 'No tech skills needed. Paste your list, share the link, and the tables build themselves.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <polyline points="9 16 11 18 15 14"/>
      </svg>
    ),
  },
];

export default function Benefits() {
  const ref = useEntrance<HTMLElement>();

  return (
    <section className="benefits section-bg" ref={ref}>
      <div className="container">
        <div className="benefits__grid">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="benefits__item"
              style={{ transitionDelay: `${i * 55}ms` }}
            >
              <div className="benefits__icon">{b.icon}</div>
              <div>
                <h3 className="benefits__title">{b.title}</h3>
                <p className="benefits__body">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
