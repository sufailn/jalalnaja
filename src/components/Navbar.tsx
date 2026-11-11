import React, { useEffect, useState } from 'react';
import { Menu, Volume2, VolumeX, X } from 'lucide-react';

interface NavbarProps {
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
}

const links = [
  ['The Union', '#hero'],
  ['Invitation', '#invitation'],
  ['Families', '#families'],
  ['Details', '#details'],
];

export const Navbar: React.FC<NavbarProps> = ({
  isPlayingMusic,
  onToggleMusic,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'border-[#B59A65]/30 bg-[#F4F0E6]/95 py-2.5 shadow-sm backdrop-blur-md sm:py-3'
          : 'border-transparent bg-[#F4F0E6]/80 py-3 backdrop-blur-sm sm:py-4'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6">
        <a
          href="#hero"
          onClick={closeMenu}
          className="shrink-0 whitespace-nowrap font-script text-[1.3rem] font-normal tracking-wide text-[#414B2E] transition-colors hover:text-[#96783B] sm:text-2xl"
        >
          Jalaludheen &amp; Najah
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-4 font-cinzel text-[10px] uppercase tracking-[0.14em] text-[#414B2E]/90 lg:flex xl:gap-6"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap border-b border-transparent py-1 transition-colors hover:border-[#B59A65] hover:text-[#96783B]"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onToggleMusic}
            title={isPlayingMusic ? 'Mute Ambient Music' : 'Play Ambient Music'}
            className="rounded-full border border-[#B59A65]/40 p-2 text-[#414B2E] transition-colors hover:bg-[#E9E1D1]"
            aria-label={isPlayingMusic ? 'Mute ambient music' : 'Play ambient music'}
          >
            {isPlayingMusic ? (
              <Volume2 className="h-4 w-4 text-[#96783B]" />
            ) : (
              <VolumeX className="h-4 w-4 text-[#899477]" />
            )}
          </button>

          <a
            href="#rsvp"
            className="hidden whitespace-nowrap rounded-sm bg-[#414B2E] px-4 py-2 font-cinzel text-[10px] uppercase tracking-[0.16em] text-[#F4F0E6] shadow-sm transition-colors hover:bg-[#35432B] sm:inline-flex"
          >
            RSVP
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-full border border-[#B59A65]/40 p-2 text-[#414B2E] transition-colors hover:bg-[#E9E1D1] lg:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b border-[#B59A65]/30 bg-[#F4F0E6]/98 px-5 py-3 shadow-lg backdrop-blur-md lg:hidden"
        >
          {[...links, ['RSVP', '#rsvp']].map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="block border-b border-[#B59A65]/15 py-3 font-cinzel text-[11px] uppercase tracking-[0.18em] text-[#414B2E] last:border-0"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
