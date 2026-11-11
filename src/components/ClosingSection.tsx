import React, { useRef } from 'react';
import { WeddingData } from '../data/weddingConfig';
import { MughalArchMotif, OliveBranch, OrnamentalDivider, WaxSealEmblem } from './FloralDecorations';
import { Mail } from 'lucide-react';
import { useSectionReveal } from '../hooks/useSectionReveal';

interface ClosingSectionProps {
  weddingData: WeddingData;
  onReopenEnvelope: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({
  weddingData,
  onReopenEnvelope,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  useSectionReveal(containerRef);

  return (
    <footer
      ref={containerRef}
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-[#414B2E] px-4 py-20 text-center text-[#F4F0E6] sm:py-28"
    >
      {/* Background Texture from Reference 3 (dark olive paper with repeated golden dot motifs) */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `url('/assets/aistudio/WhatsApp_Image_2026-10-31_at_2.30.28_PM_dbef1546.jpeg')`,
          backgroundSize: '280px auto',
        }}
      />
      <div
        aria-hidden="true"
        data-reveal-backdrop
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(181,154,101,.24),transparent_68%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center">
        {/* Crest & Calligraphy Logo */}
        <div data-section-reveal className="mb-6 flex flex-col items-center">
          <div className="w-24 h-36 sm:w-28 sm:h-44 mb-3 flex items-center justify-center">
            <img
              src="/assets/aistudio/logo_cropped_gold.png"
              alt="Jalaludheen & Najah Monogram"
              className="w-full h-full object-contain drop-shadow-[0_4px_16px_rgba(181,154,101,0.4)]"
            />
          </div>
          <MughalArchMotif className="w-36 h-14 text-[#B59A65] mx-auto opacity-75" />
        </div>

        {/* Heartfelt closing gratitude quote */}
        <div data-section-reveal>
          <p className="editorial-quote text-lg sm:text-2xl text-[#F4F0E6] max-w-xl mx-auto font-light leading-[1.6]">
            &ldquo;{weddingData.wording.closingGratitude}&rdquo;
          </p>
        </div>

        <div data-section-reveal className="my-8">
          <OrnamentalDivider className="text-[#B59A65] mx-auto max-w-xs" />
        </div>

        <div data-section-reveal className="mt-10 flex flex-wrap items-center justify-center gap-3 editorial-kicker text-[10px] sm:mt-12 sm:text-xs">
          <button
            onClick={onReopenEnvelope}
            className="flex min-h-11 items-center gap-2 rounded-full border border-[#B59A65]/40 px-5 py-2.5 text-[#E9E1D1] transition-colors hover:bg-[#35432B]"
          >
            <Mail className="w-3.5 h-3.5 text-[#B59A65]" />
            <span>Replay Invitation</span>
          </button>
        </div>

        {/* Subtle Footer Note */}
        <div data-section-reveal className="mt-16 w-full border-t border-[#B59A65]/20 pt-8 text-center">
          <p className="editorial-quote text-xs text-[#899477]">Made with love &amp; prayers</p>
        </div>
      </div>
    </footer>
  );
};
