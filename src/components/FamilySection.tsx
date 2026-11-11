import React, { useRef } from 'react';
import { WeddingData } from '../data/weddingConfig';
import {
  CornerOrnament,
  MughalArchMotif,
  OrnamentalDivider,
  BackgroundBotanicals,
  OliveBranch,
} from './FloralDecorations';
import { Home, Sparkles, Heart } from 'lucide-react';
import { useSectionReveal } from '../hooks/useSectionReveal';

interface FamilySectionProps {
  weddingData: WeddingData;
}

export const FamilySection: React.FC<FamilySectionProps> = ({ weddingData }) => {
  const containerRef = useRef<HTMLElement>(null);
  const groomCardRef = useRef<HTMLDivElement>(null);
  const brideCardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  useSectionReveal(containerRef);

  return (
    <section
      id="families"
      ref={containerRef}
      className="relative overflow-hidden bg-[#242D1B] px-4 py-20 text-[#F4F0E6] sm:px-6 sm:py-28 lg:px-8"
    >
      {/* Living Golden Botanical Background Ornaments with Slow Pulse */}
      <BackgroundBotanicals variant="dark" />
      <div
        aria-hidden="true"
        data-reveal-backdrop
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(181,154,101,.18),transparent_68%)]"
      />

      {/* Textured Handmade Olive Paper Pattern with Golden Dots from Reference 3 */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('/assets/aistudio/WhatsApp_Image_2026-10-31_at_2.30.28_PM_dbef1546.jpeg')`,
          backgroundSize: '280px auto',
        }}
      />

      {/* Central Soft Vignette Glow for Candlelit Depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(65,75,46,0.15)_0%,rgba(16,21,12,0.8)_100%)]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} data-section-reveal className="mb-12 px-2 text-center sm:mb-16">
          <MughalArchMotif className="w-36 h-16 text-[#B59A65] mx-auto opacity-85 mb-3" />
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#B59A65]/60" />
            <span className="editorial-kicker text-[9px] font-semibold tracking-[0.14em] text-[#B59A65] sm:text-sm sm:tracking-[0.3em]">
              Honoured Lineage &amp; Heritage
            </span>
            <span className="w-8 h-[1px] bg-[#B59A65]/60" />
          </div>
          <h2 className="editorial-h1 mt-2 text-[clamp(2rem,6vw,3.75rem)] font-normal text-[#F4F0E6]">
            The Noble Families
          </h2>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#B59A65] to-transparent mx-auto mt-4" />
          <p className="editorial-quote text-base sm:text-lg text-[#E9E1D1]/90 max-w-lg mx-auto mt-4">
            Two esteemed families united under the divine blessing of Allah, bound by affection, faith, and shared traditions.
          </p>
        </div>

        {/* Balanced Two-Column Composition with Arched Royal Stationery Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* ============================================================ */}
          {/* GROOM'S FAMILY CARD                                          */}
          {/* ============================================================ */}
          <div
            ref={groomCardRef}
            data-section-reveal
            className="group relative flex flex-col items-center rounded-b-lg rounded-t-[64px] border border-[#B59A65]/60 bg-gradient-to-b from-[#344127]/95 via-[#2C3720]/98 to-[#202916]/98 p-5 text-center shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-[border-color,box-shadow] duration-300 hover:border-[#B59A65] hover:shadow-[0_30px_70px_rgba(181,154,101,0.2)] sm:rounded-t-[124px] sm:p-10 lg:p-12"
          >
            {/* Outer Subtle Gold Foil Outline Accent */}
            <div className="pointer-events-none absolute -inset-1 rounded-b-xl rounded-t-[68px] border border-[#B59A65]/20 sm:rounded-t-[128px]" />

            {/* Inner Arched Hairline Frame */}
            <div className="pointer-events-none absolute inset-3 rounded-b-md rounded-t-[58px] border border-[#B59A65]/35 transition-colors group-hover:border-[#B59A65]/60 sm:inset-4 sm:rounded-t-[112px]" />

            {/* Corner Ornaments */}
            <CornerOrnament className="absolute top-4 left-4 w-7 h-7 text-[#B59A65]/70" />
            <CornerOrnament className="absolute top-4 right-4 w-7 h-7 text-[#B59A65]/70 -scale-x-100" />
            <CornerOrnament className="absolute bottom-4 left-4 w-7 h-7 text-[#B59A65]/70 -scale-y-100" />
            <CornerOrnament className="absolute bottom-4 right-4 w-7 h-7 text-[#B59A65]/70 -scale-100" />

            {/* Top Royal Calligraphy Seal Medallion (Crisp Cropped Monogram) */}
            <div className="mb-4 pt-2">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#B59A65] p-2.5 bg-gradient-to-b from-[#FAF7F0] to-[#E9E1D1] ring-4 ring-[#B59A65]/25 shadow-[0_6px_20px_rgba(0,0,0,0.4)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/assets/aistudio/logo_cropped_olive.png"
                  alt="Groom Lineage Monogram Crest"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Family Title Banner */}
            <div className="flex items-center gap-3 my-1">
              <div className="w-8 h-[1px] bg-[#B59A65]/60" />
              <span className="editorial-kicker text-xs sm:text-sm text-[#B59A65] font-semibold tracking-[0.25em]">
                Groom&apos;s Family
              </span>
              <div className="w-8 h-[1px] bg-[#B59A65]/60" />
            </div>

            {/* Groom Name */}
            <h3 className="my-2 max-w-full break-words font-script text-[clamp(2rem,7vw,3.8rem)] font-normal leading-[1.1] text-[#F4F0E6] gold-foil-text drop-shadow-md sm:my-3">
              {weddingData.groom.name}
            </h3>

            {/* Kinship Separator */}
            <div className="my-2 sm:my-3 flex items-center justify-center gap-3">
              <div className="w-10 h-[1px] bg-[#B59A65]/40" />
              <span className="editorial-kicker text-[11px] sm:text-xs text-[#E9E1D1]/80 font-medium tracking-[0.2em]">
                Son of
              </span>
              <div className="w-10 h-[1px] bg-[#B59A65]/40" />
            </div>

            {/* Parents */}
            <div className="space-y-1.5 editorial-h3 text-xl sm:text-2xl text-[#F4F0E6]">
              <p className="font-medium tracking-wide">{weddingData.groom.mother}</p>
              <p className="editorial-quote text-sm text-[#B59A65]">&amp;</p>
              <p className="font-medium tracking-wide">{weddingData.groom.father}</p>
            </div>

            {/* Ornamental Divider */}
            <div className="my-6 w-full max-w-[220px]">
              <OrnamentalDivider className="text-[#B59A65]/60 mx-auto" />
            </div>

            <div className="my-2 w-full rounded-xl border border-[#B59A65]/35 bg-[#1F2715]/75 p-4 text-center shadow-inner sm:p-5">
              <div className="mb-3 flex items-center justify-center gap-2">
                <Heart className="h-3.5 w-3.5 fill-current text-[#B59A65]" />
                <span className="editorial-kicker text-[10px] font-semibold tracking-[0.16em] text-[#B59A65] sm:text-xs sm:tracking-[0.22em]">
                  Groom&apos;s Cherished Sibling
                </span>
                <Heart className="h-3.5 w-3.5 fill-current text-[#B59A65]" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {weddingData.groom.siblings.map((sibling) => (
                  <span
                    key={`groom-sibling-${sibling}`}
                    className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-[#B59A65]/50 bg-gradient-to-b from-[#2F3A22] to-[#222B18] px-4 py-1.5 font-serif text-xs font-medium tracking-wide text-[#F4F0E6] shadow-xs sm:text-sm"
                  >
                    <span aria-hidden="true" className="text-[10px] text-[#B59A65]">✦</span>
                    {sibling}
                  </span>
                ))}
              </div>
            </div>

            {/* Groom Lineage Honor & Blessing Cartouche (Balances card height with Bride's side) */}
            <div className="w-full bg-[#1F2715]/75 border border-[#B59A65]/35 rounded-xl p-5 my-2 shadow-inner flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#B59A65]" />
                <span className="editorial-kicker text-[11px] sm:text-xs text-[#B59A65] font-semibold tracking-[0.22em]">
                  Filial Blessing &amp; Gratitude
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#B59A65]" />
              </div>
              <p className="editorial-quote text-xs sm:text-sm text-[#E9E1D1]/90 max-w-xs leading-relaxed">
                Walking forward with the continuous prayers, honour, and loving blessings of his esteemed parents.
              </p>
            </div>

            {/* Residence Heritage Tag */}
            <div className="mt-auto pt-6 border-t border-[#B59A65]/30 w-full flex items-center justify-center gap-2.5 editorial-kicker text-xs sm:text-sm text-[#B59A65] tracking-[0.22em]">
              <Home className="w-4 h-4 text-[#B59A65]" />
              <span className="font-medium">{weddingData.groom.residence}</span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* BRIDE'S FAMILY CARD (Featuring Bride's Cherished Siblings)   */}
          {/* ============================================================ */}
          <div
            ref={brideCardRef}
            data-section-reveal
            className="group relative flex flex-col items-center rounded-b-lg rounded-t-[64px] border border-[#B59A65]/60 bg-gradient-to-b from-[#344127]/95 via-[#2C3720]/98 to-[#202916]/98 p-5 text-center shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-[border-color,box-shadow] duration-300 hover:border-[#B59A65] hover:shadow-[0_30px_70px_rgba(181,154,101,0.2)] sm:rounded-t-[124px] sm:p-10 lg:p-12"
          >
            {/* Outer Subtle Gold Foil Outline Accent */}
            <div className="pointer-events-none absolute -inset-1 rounded-b-xl rounded-t-[68px] border border-[#B59A65]/20 sm:rounded-t-[128px]" />

            {/* Inner Arched Hairline Frame */}
            <div className="pointer-events-none absolute inset-3 rounded-b-md rounded-t-[58px] border border-[#B59A65]/35 transition-colors group-hover:border-[#B59A65]/60 sm:inset-4 sm:rounded-t-[112px]" />

            {/* Corner Ornaments */}
            <CornerOrnament className="absolute top-4 left-4 w-7 h-7 text-[#B59A65]/70" />
            <CornerOrnament className="absolute top-4 right-4 w-7 h-7 text-[#B59A65]/70 -scale-x-100" />
            <CornerOrnament className="absolute bottom-4 left-4 w-7 h-7 text-[#B59A65]/70 -scale-y-100" />
            <CornerOrnament className="absolute bottom-4 right-4 w-7 h-7 text-[#B59A65]/70 -scale-100" />

            {/* Top Royal Calligraphy Seal Medallion (Crisp Cropped Monogram) */}
            <div className="mb-4 pt-2">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#B59A65] p-2.5 bg-gradient-to-b from-[#FAF7F0] to-[#E9E1D1] ring-4 ring-[#B59A65]/25 shadow-[0_6px_20px_rgba(0,0,0,0.4)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/assets/aistudio/logo_cropped_olive.png"
                  alt="Bride Lineage Monogram Crest"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Family Title Banner */}
            <div className="flex items-center gap-3 my-1">
              <div className="w-8 h-[1px] bg-[#B59A65]/60" />
              <span className="editorial-kicker text-xs sm:text-sm text-[#B59A65] font-semibold tracking-[0.25em]">
                Bride&apos;s Family
              </span>
              <div className="w-8 h-[1px] bg-[#B59A65]/60" />
            </div>

            {/* Bride Name */}
            <h3 className="my-2 max-w-full break-words font-script text-[clamp(2rem,7vw,3.8rem)] font-normal leading-[1.1] text-[#F4F0E6] gold-foil-text drop-shadow-md sm:my-3">
              {weddingData.bride.name}
            </h3>

            {/* Kinship Separator */}
            <div className="my-2 sm:my-3 flex items-center justify-center gap-3">
              <div className="w-10 h-[1px] bg-[#B59A65]/40" />
              <span className="editorial-kicker text-[11px] sm:text-xs text-[#E9E1D1]/80 font-medium tracking-[0.2em]">
                Daughter of
              </span>
              <div className="w-10 h-[1px] bg-[#B59A65]/40" />
            </div>

            {/* Parents */}
            <div className="space-y-1.5 editorial-h3 text-xl sm:text-2xl text-[#F4F0E6]">
              <p className="font-medium tracking-wide">{weddingData.bride.mother}</p>
              <p className="editorial-quote text-sm text-[#B59A65]">&amp;</p>
              <p className="font-medium tracking-wide">{weddingData.bride.father}</p>
            </div>

            {/* Ornamental Divider */}
            <div className="my-5 w-full max-w-[220px]">
              <OrnamentalDivider className="text-[#B59A65]/60 mx-auto" />
            </div>

            {/* BRIDE'S CHERISHED SISTERS */}
            <div className="w-full bg-[#1F2715]/75 border border-[#B59A65]/35 rounded-xl p-4 sm:p-5 my-2 shadow-inner">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Heart className="w-3.5 h-3.5 text-[#B59A65] fill-current" />
                <span className="editorial-kicker text-[11px] sm:text-xs text-[#B59A65] font-semibold tracking-[0.22em]">
                  Bride&apos;s Cherished Sisters
                </span>
                <Heart className="w-3.5 h-3.5 text-[#B59A65] fill-current" />
              </div>
              
              {/* Dignified Royal Sister Button Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                {weddingData.bride.sisters.map((sister) => (
                  <div
                    key={`bride-sister-${sister}`}
                    className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-b from-[#2F3A22] to-[#222B18] border border-[#B59A65]/50 text-[#F4F0E6] text-xs sm:text-sm font-serif font-medium tracking-wide hover:border-[#B59A65] hover:shadow-[0_4px_12px_rgba(181,154,101,0.25)] hover:scale-105 transition-all shadow-xs cursor-default"
                  >
                    <span className="text-[#B59A65] mr-1.5 text-[10px]">✦</span>
                    <span>{sister}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Residence Heritage Tag */}
            <div className="mt-auto pt-6 border-t border-[#B59A65]/30 w-full flex items-center justify-center gap-2.5 editorial-kicker text-xs sm:text-sm text-[#B59A65] tracking-[0.22em]">
              <Home className="w-4 h-4 text-[#B59A65]" />
              <span className="font-medium">{weddingData.bride.residence}</span>
            </div>
          </div>

        </div>

        {/* Unifying Blessing Plaque */}
        <div className="mt-14 sm:mt-16 text-center max-w-xl mx-auto px-6 py-5 rounded-lg border border-[#B59A65]/35 bg-[#1D2414]/75 shadow-lg backdrop-blur-xs">
          <div className="flex items-center justify-center gap-2 text-[#B59A65] text-xs mb-1.5">
            <span>✦</span>
            <span className="editorial-kicker tracking-[0.25em]">United In Devotion</span>
            <span>✦</span>
          </div>
          <p className="editorial-quote text-sm sm:text-base text-[#E9E1D1]/90 leading-relaxed">
            &ldquo;And of His signs is that He created for you mates from among yourselves, that you may find peace in them, and He placed between you love and compassion.&rdquo;
          </p>
          <span className="block editorial-kicker text-[10px] sm:text-[11px] text-[#B59A65] mt-2 font-medium tracking-widest">
            Surah Ar-Rum · 30:21
          </span>
        </div>
      </div>
    </section>
  );
};
