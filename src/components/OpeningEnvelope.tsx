import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { WeddingData } from '../data/weddingConfig';
import { CornerOrnament, WaxSealEmblem } from './FloralDecorations';
import confetti from 'canvas-confetti';
import { ChevronDown, Sparkles } from 'lucide-react';

interface OpeningEnvelopeProps {
  weddingData: WeddingData;
  isOpen: boolean;
  onOpen: () => void;
  onRevealContent: () => void;
  onScrollToContent: () => void;
}

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({
  weddingData,
  isOpen,
  onOpen,
  onRevealContent,
  onScrollToContent,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const envelopeFlapRef = useRef<HTMLDivElement>(null);
  const waxSealRef = useRef<HTMLButtonElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentFadeRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.envelope-wrapper',
        { opacity: 0, y: 30, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: reduceMotion ? 0 : 1.2, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.envelope-hint',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.5, ease: 'power2.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isOpen) return;

    gsap.set(envelopeFlapRef.current, { clearProps: 'transform' });
    gsap.set(cardRef.current, { clearProps: 'transform' });
    gsap.set(contentFadeRef.current, { opacity: 0 });
    gsap.set(containerRef.current, { clearProps: 'opacity,transform' });
    isAnimatingRef.current = false;
    setHasInteracted(false);
  }, [isOpen]);

  const handleOpenEnvelope = () => {
    if (isAnimatingRef.current) return;

    if (hasInteracted) {
      onScrollToContent();
      return;
    }

    isAnimatingRef.current = true;
    onOpen();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reduceMotion) {
      confetti({
        particleCount: 32,
        spread: 48,
        startVelocity: 22,
        origin: { y: 0.62 },
        colors: ['#B59A65', '#E9E1D1', '#414B2E', '#F4F0E6'],
        disableForReducedMotion: true,
      });
    }

    gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => {
        isAnimatingRef.current = false;
        setHasInteracted(true);
        onRevealContent();
      },
    })
      .to(waxSealRef.current, {
        scale: 1.25,
        opacity: 0,
        y: -18,
        duration: reduceMotion ? 0 : 0.4,
      })
      .to(
        envelopeFlapRef.current,
        {
          rotateX: 180,
          duration: reduceMotion ? 0 : 0.75,
          transformOrigin: 'top center',
          ease: 'power2.inOut',
        },
        reduceMotion ? 0 : '-=0.15'
      )
      .to(
        cardRef.current,
        {
          y: () => -Math.min(150, (envelopeFlapRef.current?.parentElement?.getBoundingClientRect().height ?? 260) * 0.5),
          rotationZ: -1.2,
          scale: 1.025,
          duration: reduceMotion ? 0 : 0.95,
          ease: 'power2.out',
        },
        reduceMotion ? 0 : '-=0.35'
      )
      .to(
        cardRef.current,
        {
          rotationZ: 0,
          scale: 1.02,
          duration: reduceMotion ? 0 : 0.3,
          ease: 'power2.out',
        },
        reduceMotion ? 0 : '-=0.22'
      )
      .to(
        contentFadeRef.current,
        {
          opacity: 1,
          duration: reduceMotion ? 0 : 0.55,
          ease: 'power2.out',
        },
        reduceMotion ? 0 : '-=0.45'
      )
      .to(
        envelopeFlapRef.current,
        {
          opacity: 0,
          duration: reduceMotion ? 0 : 0.3,
          ease: 'power1.out',
        },
        reduceMotion ? 0 : '+=0.08'
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          y: -16,
          duration: reduceMotion ? 0 : 0.45,
          ease: 'power2.inOut',
        },
        reduceMotion ? 0 : '+=0.12'
      );
  };

  return (
    <section
      ref={containerRef}
      className="opening-envelope-section relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-visible px-4 py-8 paper-grain sm:py-10"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,255,255,.82),transparent_65%),radial-gradient(rgba(65,75,46,.12)_1px,transparent_1px)] [background-size:auto,24px_24px]" />

      {/* Subtle top header badge */}
      <div className="opening-envelope-heading z-10 mb-5 max-w-full px-3 text-center sm:mb-8">
        <p className="mb-2 font-cinzel text-[10px] uppercase tracking-[0.22em] text-[#414B2E]/80 sm:text-xs sm:tracking-[0.3em]">
          Wedding Announcement
        </p>
        <p className="mb-1 font-arabic text-xl tracking-wide text-[#414B2E] sm:text-2xl">
          {weddingData.wording.basmala}
        </p>
        <p className="font-serif text-xs italic text-[#899477] sm:text-sm">
          {weddingData.wording.basmalaTranslation}
        </p>
      </div>

      {/* Main Envelope Presentation Container */}
      <div className="envelope-wrapper relative z-20 w-full max-w-[min(540px,92vw)] select-none perspective-1000">
        {/* Envelope Shell Container */}
        <div className="envelope-shell relative aspect-[1.32/1] w-full overflow-visible rounded-md bg-gradient-to-br from-[#687650] via-[#465436] to-[#303A25] shadow-[0_30px_75px_-24px_rgba(53,67,43,0.42)]">
          
          {/* Textured olive-paper liner */}
          <div className="absolute inset-0 overflow-hidden rounded-md border border-[#D8C493]/60 bg-gradient-to-br from-[#62714B] via-[#465436] to-[#303A25]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen"
              style={{
                backgroundImage: `url('/assets/aistudio/WhatsApp_Image_2026-10-31_at_2.30.28_PM_dbef1546.jpeg')`,
                backgroundSize: '280px auto',
                backgroundPosition: 'center',
              }}
            />
            {/* Subtle vintage gold rim */}
            <div className="absolute inset-0 border border-[#B59A65]/40 rounded-md" />
          </div>

          {/* Emerging Invitation Card Inside Envelope */}
          <div
            ref={cardRef}
            className="absolute inset-2 z-10 flex flex-col items-center justify-center rounded border border-[#B59A65]/50 bg-[#F4F0E6] p-3 text-center shadow-2xl paper-grain sm:inset-4 sm:p-6"
            style={{
              boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
            }}
          >
            {/* Double decorative border */}
            <div className="absolute inset-2 border border-[#B59A65]/40 pointer-events-none rounded-sm" />
            <div className="absolute inset-3 border border-[#414B2E]/20 pointer-events-none rounded-sm" />

            <CornerOrnament className="absolute top-3 left-3 w-7 h-7 text-[#B59A65]" />
            <CornerOrnament className="absolute top-3 right-3 w-7 h-7 text-[#B59A65] -scale-x-100" />
            <CornerOrnament className="absolute bottom-3 left-3 w-7 h-7 text-[#B59A65] -scale-y-100" />
            <CornerOrnament className="absolute bottom-3 right-3 w-7 h-7 text-[#B59A65] -scale-100" />

            <div ref={contentFadeRef} className="flex w-full flex-col items-center justify-center py-2 opacity-0">
              {/* Couple's Calligraphy Monogram Logo */}
              <div className="mb-1 flex h-10 w-9 items-center justify-center sm:h-16 sm:w-14">
                <img
                  src="/assets/aistudio/logo_cropped_olive.png"
                  alt="Jalaludheen & Najah Monogram"
                  className="w-full h-full object-contain drop-shadow-xs"
                />
              </div>

              <span className="mb-0.5 font-cinzel text-[8px] uppercase tracking-[0.17em] text-[#414B2E] sm:text-[10px] sm:tracking-[0.25em]">
                The Blessed Union Of
              </span>

              <h2 className="my-0.5 max-w-full break-words font-script text-[clamp(1.35rem,6vw,2.25rem)] font-normal leading-tight text-[#414B2E] gold-foil-text">
                {weddingData.groom.name}
              </h2>

              <div className="flex items-center gap-2 my-0.5">
                <div className="h-[1px] w-6 bg-[#B59A65]/60" />
                <span className="font-serif italic text-base text-[#542D3A] font-medium">&amp;</span>
                <div className="h-[1px] w-6 bg-[#B59A65]/60" />
              </div>

              <h2 className="my-0.5 max-w-full break-words font-script text-[clamp(1.35rem,6vw,2.25rem)] font-normal leading-tight text-[#414B2E] gold-foil-text">
                {weddingData.bride.name}
              </h2>

              <div className="mt-1 flex max-w-full items-center gap-1 border-t border-[#B59A65]/30 pt-1.5 sm:mt-2 sm:gap-2 sm:pt-2">
                <span className="break-words font-cinzel text-[8px] font-medium uppercase tracking-[0.08em] text-[#414B2E] sm:text-xs sm:tracking-[0.2em]">
                  {weddingData.details.dateDisplay} · {weddingData.details.time}
                </span>
              </div>

              {hasInteracted && (
                <button
                  onClick={onScrollToContent}
                  className="group mt-2 flex items-center gap-2 rounded bg-[#414B2E] px-4 py-1.5 font-cinzel text-[9px] uppercase tracking-[0.16em] text-[#F4F0E6] shadow transition-all duration-200 hover:bg-[#35432B] sm:mt-3 sm:px-5 sm:text-[11px] sm:tracking-widest"
                >
                  <span>Enter Invitation</span>
                  <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                </button>
              )}
            </div>
          </div>

          {/* Front Pocket of Envelope (Deep Olive Paper with Texture) */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Left flap triangle */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#687650] via-[#465436] to-[#34402A]"
              style={{
                clipPath: 'polygon(0% 0%, 50% 50%, 0% 100%)',
                boxShadow: 'inset -12px 0 28px rgba(23,31,16,0.2)',
              }}
            />
            {/* Right flap triangle */}
            <div
              className="absolute inset-0 bg-gradient-to-bl from-[#687650] via-[#465436] to-[#34402A]"
              style={{
                clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)',
                boxShadow: 'inset 12px 0 28px rgba(23,31,16,0.2)',
              }}
            />
            {/* Bottom flap triangle */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#697751] via-[#4A5837] to-[#34402A]"
              style={{
                clipPath: 'polygon(0% 100%, 50% 48%, 100% 100%)',
                boxShadow: '0 -4px 15px rgba(0,0,0,0.25)',
              }}
            >
              {/* Subtle gold line along bottom flap rim */}
              <div
                className="absolute inset-0 border-t border-[#B59A65]/30 pointer-events-none"
                style={{
                  clipPath: 'polygon(0% 100%, 50% 48%, 100% 100%)',
                }}
              />
            </div>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-45"
              viewBox="0 0 100 76"
              preserveAspectRatio="none"
            >
              <path d="M0 0L50 49L100 0" fill="none" stroke="#B59A65" strokeOpacity=".42" strokeWidth=".24" />
              <path d="M0 76L50 48L100 76" fill="none" stroke="#D8C493" strokeOpacity=".48" strokeWidth=".28" />
              <path d="M1 1L49 48M99 1L51 48" fill="none" stroke="#F4F0E6" strokeOpacity=".12" strokeWidth=".35" />
            </svg>
          </div>

          {/* Top Flap with 3D Flip */}
          <div
            ref={envelopeFlapRef}
            className="absolute top-0 left-0 right-0 h-1/2 z-30 preserve-3d"
            style={{ transformOrigin: 'top center', pointerEvents: isOpen ? 'none' : 'auto' }}
          >
            {/* Outside of Top Flap */}
            <button
              type="button"
              className="absolute inset-0 flex w-full cursor-pointer items-end justify-center border-0 bg-gradient-to-b from-[#76835D] via-[#52613E] to-[#3D4A2D] p-0 pb-2 shadow-[0_10px_18px_rgba(20,25,15,0.28)]"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                backfaceVisibility: 'hidden',
              }}
              onClick={handleOpenEnvelope}
              disabled={isOpen}
              aria-label="Open the wedding invitation"
            >
              {/* Gold foil hairline along flap angle */}
              <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 100 50" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="50" y2="100" stroke="#B59A65" strokeWidth="0.5" strokeOpacity="0.5" />
                <line x1="100" y1="0" x2="50" y2="100" stroke="#B59A65" strokeWidth="0.5" strokeOpacity="0.5" />
              </svg>
            </button>

            {/* Inside of Top Flap (Revealed when opened) */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#687650] to-[#35432B]"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                transform: 'rotateX(180deg)',
                backfaceVisibility: 'hidden',
              }}
            >
              <div
                className="absolute inset-0 opacity-75 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/assets/aistudio/WhatsApp_Image_2026-10-31_at_2.30.28_PM_dbef1546.jpeg')`,
                  backgroundSize: '220px auto',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>

          {/* Wax Seal placed at the center of the flap meeting point */}
          {!hasInteracted && (
            <button
              ref={waxSealRef}
              type="button"
              className={`absolute left-1/2 top-[48%] z-40 -translate-x-1/2 -translate-y-1/2 border-0 bg-transparent p-0 ${isOpen ? '' : 'wax-seal-pulse'}`}
              onClick={handleOpenEnvelope}
              disabled={isOpen}
              aria-label="Open the wedding invitation"
            >
              <WaxSealEmblem
                monogram="M & N"
                variant="burgundy"
                size="md"
              />
            </button>
          )}
        </div>
      </div>

      {/* Interactive Helper Text */}
      <div className="envelope-hint relative z-20 mt-7 max-w-full px-3 text-center sm:mt-10">
        {!isOpen ? (
          <button
            onClick={handleOpenEnvelope}
            className="group inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-[#414B2E] px-5 py-2.5 font-cinzel text-[10px] uppercase tracking-[0.14em] text-[#F4F0E6] shadow-md transition-all duration-300 hover:bg-[#35432B] hover:shadow-lg sm:px-6 sm:text-xs sm:tracking-[0.2em]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B59A65] group-hover:rotate-12 transition-transform" />
            <span>Open your invitation</span>
          </button>
        ) : hasInteracted ? (
          <button
            onClick={onScrollToContent}
            className="group inline-flex items-center gap-2 rounded-full border border-[#B59A65]/40 bg-[#E9E1D1] px-5 py-2.5 font-cinzel text-[10px] uppercase tracking-[0.14em] text-[#414B2E] shadow-sm transition-all duration-300 hover:bg-[#F4F0E6] sm:px-6 sm:text-xs sm:tracking-[0.2em]"
          >
            <span>Scroll to Experience</span>
            <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </button>
        ) : (
          <p className="font-cinzel text-[10px] uppercase tracking-[0.18em] text-[#899477]">
            Unfolding your invitation…
          </p>
        )}
        <p className="mt-3 font-serif text-xs italic text-[#899477]">
          A bespoke digital stationery experience
        </p>
      </div>
    </section>
  );
};
