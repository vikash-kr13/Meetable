import React, { useState, useRef } from 'react';
import { saveLead, LeadSource } from '../leads';
import './EmailCapture.css';

interface Props {
  source: LeadSource;
  tier?: string;
  onSuccess?: () => void;
}

export default function EmailCapture({ source, tier, onSuccess }: Props) {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState(''); // visually hidden
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const isValidEmail = (v: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Honeypot check — silently ignore bots
    if (honeypot) return;

    if (!isValidEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      inputRef.current?.focus();
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      await saveLead({ email, source, tier });
      setStatus('success');
      onSuccess?.();
    } catch (err) {
      console.error('Lead save failed:', err);
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="ec-success" role="alert">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <p>
          <strong>You're on the founding-store list.</strong> Within 48 hours we'll email you a
          sample matched-table report built from a player list like yours — reply with your store's
          usual game night and we'll build it around your schedule.
        </p>
      </div>
    );
  }

  return (
    <form className="ec-form" onSubmit={handleSubmit} noValidate>
      {/* Visually hidden honeypot — bots fill it, humans don't */}
      <label className="sr-only" htmlFor={`hp-${source}`}>Leave this blank</label>
      <input
        id={`hp-${source}`}
        type="text"
        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="ec-honeypot"
      />

      <div className="ec-row">
        <input
          ref={inputRef}
          id={`email-${source}`}
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@store-email.com"
          className="ec-input"
          autoComplete="email"
          required
          disabled={status === 'loading'}
          aria-label="Your store email address"
          aria-describedby={errorMsg ? `ec-err-${source}` : undefined}
        />
        <button
          type="submit"
          className="btn-primary ec-btn"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending…' : 'Get founding-store access'}
        </button>
      </div>

      {errorMsg && (
        <p id={`ec-err-${source}`} className="ec-error" role="alert">
          {errorMsg}
        </p>
      )}

      <p className="ec-privacy">
        We only email you about Grouproll. No lists sold, ever.
      </p>
    </form>
  );
}
