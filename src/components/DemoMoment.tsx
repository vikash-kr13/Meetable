import React from 'react';
import EmailCapture from './EmailCapture';
import { useEntrance } from '../hooks/useEntrance';
import './DemoMoment.css';

const pasteContent = `Event: Tuesday Game Night, 7:00 PM, 5 tables open

Marcus   — Wingspan, Terraforming Mars — experienced — Tue/Thu
Priya    — Catan, Ticket to Ride — beginner — Tue only
Dave K   — Terraforming Mars, Ark Nova — experienced — any night
Jen      — Wingspan, Cascadia — intermediate — Tue/Wed
Sam      — Catan, anything light — new to the store — Tue
Tyler    — Ark Nova, Terraforming Mars — experienced — Tue
Rosa     — Ticket to Ride, Azul — beginner — Tue/Fri
Ben      — Cascadia, Wingspan — intermediate — Tue
Aisha    — anything, prefers teaching games — experienced — Tue`;

interface TableCard {
  num: number;
  game: string;
  time: string;
  players: string;
  why: string;
}

const tables: TableCard[] = [
  {
    num: 1,
    game: 'Terraforming Mars',
    time: '7:00 PM',
    players: 'Dave K, Tyler, Marcus + 1 open seat',
    why: 'All experienced, all listed TM, all free Tuesday. Open seat offered to waitlist.',
  },
  {
    num: 2,
    game: 'Wingspan',
    time: '7:00 PM',
    players: 'Jen, Ben, Marcus (second choice), Aisha (teacher)',
    why: 'Two intermediates plus an experienced teacher — nobody carries the table alone.',
  },
  {
    num: 3,
    game: 'Catan',
    time: '7:00 PM',
    players: 'Priya, Sam, Rosa, Aisha (if Table 2 fills first)',
    why: 'Three beginners grouped together, with a teacher assigned so newcomers don\'t leave early.',
  },
];

export default function DemoMoment() {
  const ref = useEntrance<HTMLElement>();

  return (
    <section className="demo section-surface" ref={ref}>
      <div className="container">
        <p className="demo__intro">
          Here's a real Tuesday, built from a nine-player list — the kind already sitting in your inbox and Discord.
        </p>

        <div className="demo__panels">
          {/* Panel 1 — What you paste */}
          <div className="demo__panel demo__panel--input">
            <div className="demo__panel-label">What you paste</div>
            <pre className="demo__paste">{pasteContent}</pre>
          </div>

          {/* Panel 2 — What you get back */}
          <div className="demo__panel demo__panel--output">
            <div className="demo__panel-label">What you get back</div>
            <div className="demo__output">
              {tables.map(t => (
                <div key={t.num} className="demo__table-card">
                  <div className="demo__table-header">
                    <span className="demo__table-num">TABLE {t.num}</span>
                    <span className="demo__table-game">{t.game}</span>
                    <span className="demo__table-time">{t.time}</span>
                  </div>
                  <p className="demo__table-players">{t.players}</p>
                  <p className="demo__table-why">
                    <span className="demo__why-label">Why: </span>
                    {t.why}
                  </p>
                </div>
              ))}

              {/* Waitlist card */}
              <div className="demo__waitlist-card">
                <div className="demo__waitlist-header">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="17 1 21 5 17 9"/>
                    <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                    <polyline points="7 23 3 19 7 15"/>
                    <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                  </svg>
                  WAITLIST (auto-backfill order)
                </div>
                <p className="demo__waitlist-body">
                  1. Rosa → Table 1 if a seat opens. Reminder emails go out Sunday and Tuesday at 3 PM.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Email capture immediately after demo */}
        <div className="demo__capture">
          <p className="demo__capture-label">
            Want us to build one from <em>your</em> player list?
          </p>
          <EmailCapture source="demo" />
        </div>
      </div>
    </section>
  );
}
