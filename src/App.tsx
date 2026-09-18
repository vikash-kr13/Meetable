import React, { useRef } from 'react';
import './styles/global.css';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import DemoMoment from './components/DemoMoment';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import SiteFooter from './components/SiteFooter';

export default function App() {
  // The hero capture form is the canonical scroll-to target for nav CTA
  const heroCaptureRef = useRef<HTMLDivElement>(null);

  function scrollToCapture() {
    heroCaptureRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Focus the email input after scroll
    setTimeout(() => {
      const input = heroCaptureRef.current?.querySelector('input[type="email"]');
      if (input instanceof HTMLElement) input.focus();
    }, 600);
  }

  return (
    <>
      <Nav onCTAClick={scrollToCapture} />
      <main>
        {/* 1. Hero */}
        <Hero captureRef={heroCaptureRef} />

        {/* 2. Problem — surface band */}
        <Problem />

        {/* 3. How It Works — bg band */}
        <HowItWorks />

        {/* 4. Demo Moment — surface band, immediately after How It Works */}
        <DemoMoment />

        {/* 5. Benefits — bg band */}
        <Benefits />

        {/* 6. Pricing — surface band */}
        <Pricing />

        {/* 7. FAQ — bg band */}
        <FAQ />

        {/* 8. Final CTA — surface band */}
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
