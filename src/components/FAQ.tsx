import React, { useState } from 'react';
import { useEntrance } from '../hooks/useEntrance';
import './FAQ.css';

const items = [
  {
    q: 'Is this available yet?',
    a: 'Not yet — we\'re onboarding a small group of founding stores now. Sign up and you\'ll get early access in your metro, your first month free at launch, and a direct line to shape how matching works for your store.',
  },
  {
    q: 'Will my players actually sign up?',
    a: 'They\'re the motivated side. Players already post "can\'t find a group, even at my local store" threads that pull 140+ replies. You give them a link that ends with a seat at a real table — that\'s an easier ask than joining another Facebook group.',
  },
  {
    q: 'How is this different from my Facebook group and signup sheet?',
    a: 'A Facebook post collects maybes. Grouproll collects availability, game preference, and skill — then does the part you do by hand: forming the tables, sending reminders, and filling the seat when someone bails.',
  },
  {
    q: 'Is $79 worth it for a night that barely breaks even?',
    a: 'Most stores already spend $99–$150 a month on their POS. Grouproll costs less than that, and the Monday report tells you in plain numbers whether the night pays — filled seats, no-show rate, repeat attendance. If it doesn\'t move your Tuesday inside 60 days, cancel.',
  },
  {
    q: 'What happens when someone still no-shows?',
    a: 'Reminders go out 48 hours and 4 hours before the event, and the waitlist is ranked by compatibility — so an open seat gets offered to the right player, not just the next name.',
  },
  {
    q: 'Do I need to be technical, or connect it to my POS?',
    a: 'No. Setup is pasting a list and sharing a link. No POS integration required — Grouproll runs alongside whatever you use at the register.',
  },
];

export default function FAQ() {
  const ref = useEntrance<HTMLElement>();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="faq section-bg" ref={ref}>
      <div className="container faq__container">
        <h2 className="faq__headline">Questions</h2>
        <div className="faq__list" role="list">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`faq__item${isOpen ? ' faq__item--open' : ''}`} role="listitem">
                <button
                  className="faq__question"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{item.q}</span>
                  <svg
                    className="faq__chevron"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="faq__answer"
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
