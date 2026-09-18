import React from 'react';
import { useEntrance } from '../hooks/useEntrance';
import './Problem.css';

const pains = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    text: 'You post the event in the Facebook group, twelve people say "interested," and six show up.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
    text: 'A newcomer walks in, gets dropped into a table of grognards, and never comes back.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="15" y1="9" x2="9" y2="15"/>
        <line x1="9" y1="9" x2="15" y2="15"/>
      </svg>
    ),
    text: 'One regular cancels at 5 PM and the whole table falls apart — no way to fill the seat.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    text: 'You run game night as goodwill because you honestly can\'t tell if it sells anything.',
  },
];

export default function Problem() {
  const ref = useEntrance<HTMLElement>();

  return (
    <section className="problem section-surface" ref={ref}>
      <div className="container">
        <h2 className="problem__headline">The players exist. The tables stay empty.</h2>
        <div className="problem__grid">
          {pains.map((p, i) => (
            <div
              key={i}
              className="problem__item"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="problem__icon">{p.icon}</div>
              <p className="problem__text">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
