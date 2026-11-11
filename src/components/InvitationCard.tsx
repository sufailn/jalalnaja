import React, { useRef } from 'react';
import { WeddingData } from '../data/weddingConfig';
import { CornerOrnament, MughalArchMotif, OliveBranch, OrnamentalDivider, BackgroundBotanicals } from './FloralDecorations';
import { Calendar, Clock, MapPin, Heart } from 'lucide-react';
import { useSectionReveal } from '../hooks/useSectionReveal';

interface InvitationCardProps {
  weddingData: WeddingData;
  onOpenDetailsModal?: () => void;
}

export const InvitationCard: React.FC<InvitationCardProps> = ({
  weddingData,
  onOpenDetailsModal,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  useSectionReveal(containerRef);

  return (
    <section
      id="invitation"
      ref={containerRef}
      className="relative isolate flex flex-col items-center justify-center overflow-hidden bg-[#E9E1D1]/60 px-3 py-14 paper-grain-cream sm:px-5 sm:py-24"
    >
      {/* Living Background Botanical Ornaments with Graceful Pulse */}
      <BackgroundBotanicals variant="light" />
      <div
        aria-hidden="true"
        data-reveal-backdrop
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(255,255,255,.82),transparent_66%)]"
      />
      {/* Decorative botanical leaf corner accents */}
      <div className="absolute top-10 left-10 opacity-30 pointer-events-none hidden lg:block">
        <OliveBranch className="w-40 h-20 text-[#899477]" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-30 pointer-events-none hidden lg:block">
        <OliveBranch className="w-40 h-20 text-[#899477]" flipped />
      </div>

      {/* Main Suite Composition inspired by Reference 1 */}
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center">
        
        {/* Lace Doily Accent Element behind top-right of card */}
        <div className="pointer-events-none absolute -right-8 -top-10 z-0 hidden h-36 w-36 rotate-6 flex-col items-center justify-center rounded-full border-2 border-dashed border-[#B59A65]/35 bg-[#F4F0E6]/90 p-4 text-center shadow-sm sm:flex sm:h-40 sm:w-40">
          <div className="w-full h-full rounded-full border border-[#899477]/30 flex flex-col items-center justify-center p-2">
            <span className="font-script text-xl sm:text-2xl text-[#414B2E]">Du&apos;a</span>
            <span className="editorial-quote text-[10px] sm:text-xs text-[#899477] leading-tight mt-0.5">
              Barakallahu lakuma
            </span>
          </div>
        </div>

        {/* Central Printed Invitation Card */}
        <div
          data-section-reveal
          className="invitation-keepsake relative z-10 w-full max-w-2xl border border-[#B59A65]/60 bg-[#F8F5EC] p-1.5 text-center shadow-[0_30px_90px_rgba(53,67,43,0.2),0_8px_24px_rgba(84,45,58,0.08)] transition-shadow duration-700 sm:p-2.5"
        >
          <div className="relative border border-[#B59A65]/40 bg-gradient-to-b from-[#FCFAF4] via-[#F8F5EC] to-[#F3EDDF] px-4 py-9 paper-grain sm:px-8 sm:py-11 md:px-12 md:py-14">
          {/* Double-line thin decorative border */}
          <div className="absolute inset-2 sm:inset-3 border border-[#B59A65]/55 pointer-events-none rounded-xs" />
          <div className="absolute inset-3 sm:inset-4 border border-[#414B2E]/15 pointer-events-none rounded-xs" />

          {/* Corner Filigrees */}
          <CornerOrnament className="absolute top-3 left-3 sm:top-5 sm:left-5 w-8 h-8 sm:w-9 sm:h-9 text-[#B59A65]" />
          <CornerOrnament className="absolute top-3 right-3 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 text-[#B59A65] -scale-x-100" />
          <CornerOrnament className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 w-8 h-8 sm:w-9 sm:h-9 text-[#B59A65] -scale-y-100" />
          <CornerOrnament className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 text-[#B59A65] -scale-100" />

          {/* Couple's Calligraphy Monogram Crest */}
          <div className="flex flex-col items-center pt-2 pb-1">
            <MughalArchMotif className="mb-1 h-10 w-24 text-[#B59A65]/75 sm:h-12 sm:w-28" />
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#B59A65]/35 bg-[#F8F5EC]/80 p-3 shadow-[inset_0_0_0_4px_rgba(181,154,101,.08)] sm:h-24 sm:w-24">
              <img
                src="/assets/aistudio/logo_cropped_olive.png"
                alt="Bespoke Monogram Logo"
                className="h-full w-full object-contain drop-shadow-xs"
              />
            </div>
          </div>

          {/* Basmala Calligraphy */}
          <div className="pb-2">
            <p className="break-words font-arabic text-xl leading-[1.8] tracking-wider text-[#414B2E] sm:text-3xl">
              {weddingData.wording.basmala}
            </p>
            <p className="editorial-quote text-xs sm:text-sm text-[#899477] mt-1">
              &ldquo;{weddingData.wording.basmalaTranslation}&rdquo;
            </p>
          </div>

          <div className="my-5 sm:my-6">
            <OrnamentalDivider className="text-[#B59A65] mx-auto" />
          </div>

          {/* Formal Preamble */}
          <p className="editorial-subhead text-sm sm:text-base text-[#37352F]/85 max-w-lg mx-auto leading-[1.68]">
            {weddingData.wording.invitationPreamble}
          </p>

          {/* Names in Calligraphy Script */}
          <div className="my-7 space-y-2 sm:my-8 sm:space-y-2.5">
            <h3 className="break-words font-script text-[clamp(1.8rem,7.4vw,4rem)] font-normal leading-[1.12] text-[#414B2E] gold-foil-text">
              {weddingData.groom.name}
            </h3>

            <div className="flex items-center justify-center gap-3">
              <span className="h-[1px] w-12 bg-[#B59A65]/50" />
              <span className="font-serif italic text-2xl text-[#542D3A] leading-none">&amp;</span>
              <span className="h-[1px] w-12 bg-[#B59A65]/50" />
            </div>

            <h3 className="break-words font-script text-[clamp(1.8rem,7.4vw,4rem)] font-normal leading-[1.12] text-[#414B2E] gold-foil-text">
              {weddingData.bride.name}
            </h3>
          </div>

          {/* Blessing & Presence Request */}
          <p className="editorial-quote text-sm sm:text-base text-[#37352F]/90 max-w-md mx-auto leading-[1.62] mb-6">
            &ldquo;{weddingData.wording.invitationClosing}&rdquo;
          </p>

          {/* Key Event Cards with Confirmed Details */}
          <div className="grid grid-cols-1 gap-2.5 border-t border-[#B59A65]/35 pt-5 sm:grid-cols-3 sm:gap-3 sm:pt-6">
            {/* Date / Day */}
            <div className="group flex min-h-32 flex-col items-center justify-center rounded-sm border border-[#B59A65]/35 bg-gradient-to-b from-white/70 to-[#E9E1D1]/65 p-3.5 text-center shadow-[0_4px_12px_rgba(65,75,46,.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B59A65]/60 hover:shadow-[0_8px_18px_rgba(65,75,46,.09)] sm:p-4">
              <Calendar className="mb-1.5 h-4 w-4 text-[#96783B]" />
              <span className="editorial-kicker text-[10px] text-[#899477] font-semibold">Date</span>
              <span className="editorial-h3 text-xs sm:text-sm font-medium text-[#414B2E] mt-0.5">
                {weddingData.details.dateDisplay}
              </span>
              <span className="editorial-quote text-[11px] text-[#542D3A]">
                {weddingData.details.day}
              </span>
            </div>

            {/* Time */}
            <div className="group flex min-h-32 flex-col items-center justify-center rounded-sm border border-[#B59A65]/35 bg-gradient-to-b from-white/70 to-[#E9E1D1]/65 p-3.5 text-center shadow-[0_4px_12px_rgba(65,75,46,.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B59A65]/60 hover:shadow-[0_8px_18px_rgba(65,75,46,.09)] sm:p-4">
              <Clock className="mb-1.5 h-4 w-4 text-[#96783B]" />
              <span className="editorial-kicker text-[10px] text-[#899477] font-semibold">Time</span>
              <span className="editorial-h3 text-xs sm:text-sm font-medium text-[#414B2E] mt-0.5">
                {weddingData.details.time}
              </span>
              <span className="editorial-quote text-[11px] text-[#542D3A]">
                Auspicious Hour
              </span>
            </div>

            {/* Venue & Google Maps */}
            <a
              href={weddingData.details.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-32 flex-col items-center justify-center rounded-sm border border-[#B59A65]/35 bg-gradient-to-b from-white/70 to-[#E9E1D1]/65 p-3.5 text-center shadow-[0_4px_12px_rgba(65,75,46,.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B59A65]/60 hover:shadow-[0_8px_18px_rgba(65,75,46,.09)] sm:p-4"
            >
              <MapPin className="w-4 h-4 text-[#542D3A] mb-1 group-hover:scale-110 transition-transform" />
              <span className="editorial-kicker text-[10px] text-[#899477] font-semibold">Location</span>
              <span className="editorial-h3 text-xs sm:text-sm font-medium text-[#414B2E] mt-0.5 group-hover:underline">
                View on Google Maps
              </span>
              <span className="editorial-kicker text-[9px] text-[#B59A65] mt-0.5">
                Tap for Directions &rarr;
              </span>
            </a>
          </div>
        </div>
        </div>

        {/* Companion Burgundy Stationery Card */}
        <div className="relative z-20 mt-7 w-[min(100%,20rem)] self-center rounded-sm border border-[#B59A65]/55 bg-gradient-to-br from-[#673A49] via-[#542D3A] to-[#43232F] p-1.5 text-[#F4F0E6] shadow-[0_20px_45px_rgba(42,25,30,.24)] transition-transform duration-500 hover:-translate-y-1 sm:-mt-8 sm:mr-5 sm:w-72 sm:self-end">
          <div className="rounded-xs border border-[#F4F0E6]/20 px-4 py-5 text-center">
            <span aria-hidden="true" className="mb-3 block text-[10px] tracking-[.55em] text-[#D4BF8E]/75">✦ &nbsp; ✦ &nbsp; ✦</span>
            <span className="editorial-kicker text-[10px] text-[#B59A65] font-semibold">
              Celebration Note
            </span>
            <h4 className="font-script text-2xl text-[#F4F0E6] my-1 leading-tight">
              Prayers &amp; Blessings
            </h4>
            <p className="editorial-quote text-xs text-[#E9E1D1]/90 leading-[1.65] mt-2">
              &ldquo;May Allah bless this union and grant abundance in peace, health, and endless barakah.&rdquo;
            </p>
            <div className="mt-4 pt-3 border-t border-[#F4F0E6]/15 flex items-center justify-center gap-2 editorial-kicker text-[10px] text-[#B59A65]">
              <Heart className="w-3 h-3 fill-current" />
              <span>With Sincere Du&apos;as</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
