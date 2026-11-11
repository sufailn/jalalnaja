import React, { useEffect, useState } from 'react';
import { initialWeddingData } from './data/weddingConfig';
import { HeroSection } from './components/HeroSection';
import { InvitationCard } from './components/InvitationCard';
import { FamilySection } from './components/FamilySection';
import { WeddingDetails } from './components/WeddingDetails';
import { ClosingSection } from './components/ClosingSection';

export default function App() {
  const [weddingData] = useState(initialWeddingData);
  const [hasOpenedInvitation, setHasOpenedInvitation] = useState(false);

  useEffect(() => {
    if (!hasOpenedInvitation) return;

    const timeout = window.setTimeout(() => {
      const invitationEl = document.getElementById('invitation');
      if (invitationEl) {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        invitationEl.scrollIntoView({
          behavior: reduceMotion ? 'instant' : 'smooth',
          block: 'start',
        });
      }
    }, 100);

    return () => window.clearTimeout(timeout);
  }, [hasOpenedInvitation]);

  const handleRevealContent = () => {
    setHasOpenedInvitation(true);
  };

  const handleReopenEnvelope = () => {
    setHasOpenedInvitation(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#F4F0E6] text-[#37352F] selection:bg-[#414B2E] selection:text-[#F4F0E6]">
      <main className="w-full">
        <HeroSection
          weddingData={weddingData}
          isInvitationOpen={hasOpenedInvitation}
          onOpenInvitation={handleRevealContent}
        />

        {hasOpenedInvitation && (
          <div className="invitation-experience">
            {/* SECTION 02: Printed Wedding Invitation Card */}
            <InvitationCard weddingData={weddingData} />

            {/* SECTION 03: Two-Column Family Lineage Section */}
            <FamilySection weddingData={weddingData} />

            {/* SECTION 04: Wedding Details & Live Countdown */}
            <WeddingDetails weddingData={weddingData} />

            {/* SECTION 05: Memorable Closing Section */}
            <ClosingSection
              weddingData={weddingData}
              onReopenEnvelope={handleReopenEnvelope}
            />
          </div>
        )}
      </main>
    </div>
  );
}
