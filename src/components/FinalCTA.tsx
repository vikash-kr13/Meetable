import React from 'react';
import EmailCapture from './EmailCapture';
import { useEntrance } from '../hooks/useEntrance';
import './FinalCTA.css';

export default function FinalCTA() {
  const ref = useEntrance<HTMLElement>();

  return (
    <section className="finalcta section-surface" ref={ref}>
      <div className="container finalcta__inner">
        <h2 className="finalcta__headline">
          Your regulars want a table. Give them one that actually forms.
        </h2>
        <p className="finalcta__risk">
          Founding stores get early access and their first month free at launch — no card, no commitment.
        </p>
        <div className="finalcta__capture">
          <EmailCapture source="final-cta" />
        </div>
      </div>
    </section>
  );
}
