import React, { useRef, useState } from 'react';
import { WeddingData } from '../data/weddingConfig';
import { MughalArchMotif, OrnamentalDivider, BackgroundBotanicals } from './FloralDecorations';
import { CalendarDays, CalendarPlus, Check, Clock, MapPin } from 'lucide-react';
import { useSectionReveal } from '../hooks/useSectionReveal';

interface WeddingDetailsProps {
  weddingData: WeddingData;
}

export const WeddingDetails: React.FC<WeddingDetailsProps> = ({ weddingData }) => {
  const { details, groom, bride } = weddingData;
  const [calendarSaved, setCalendarSaved] = useState(false);
  const timeMatch = details.time.match(/^(.*?)\s+(Evening|Morning|Afternoon|Night)$/i);
  const timePrimary = timeMatch ? timeMatch[1] : details.time;
  const timeNote = timeMatch ? timeMatch[2] : '';
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  // Generate iCalendar (.ics) download for confirmed date: 24th Dec 2026, 4:00 PM
  const handleDownloadIcs = () => {
    const title = `Wedding: ${groom.name} & ${bride.name}`;
    const description = `Wedding celebration of ${groom.name} and ${bride.name}. Wording: ${weddingData.wording.subtitle}`;
    const location = `${details.venue}, ${details.address}`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Jalaludheen & Najah Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      'DTSTART:20261224T103000Z', // 4:00 PM IST is 10:30 UTC
      'DTEND:20261224T153000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Wedding-Jalaludheen-Najah.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setCalendarSaved(true);
    setTimeout(() => setCalendarSaved(false), 4000);
  };

  return (
    <section id="details" ref={sectionRef} className="relative overflow-hidden bg-[#F4F0E6] px-4 py-16 paper-grain sm:py-24">
      {/* Living Background Botanical Ornaments with Graceful Pulse */}
      <BackgroundBotanicals variant="light" />
      <div
        aria-hidden="true"
        data-reveal-backdrop
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(255,255,255,.76),transparent_0px)]"
      />
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading with Arch */}
        <div data-section-reveal className="mb-10 px-2 text-center sm:mb-14">
          <MughalArchMotif className="w-28 h-12 text-[#899477] mx-auto opacity-75 mb-3" />
          <span className="editorial-kicker text-[10px] font-semibold text-[#414B2E] sm:text-xs">
            Save the Date
          </span>
          <h2 className="editorial-h1 mt-2 text-[clamp(1.9rem,5vw,3rem)] font-normal text-[#2A3420]">
            A Day to Remember
          </h2>
          <div className="w-16 h-[1px] bg-[#B59A65] mx-auto mt-4" />
          <p className="editorial-quote mx-auto mt-3 max-w-md text-base text-[#37352F]">
            We look forward to sharing this special day with you.
          </p>
        </div>

        {/* <div data-section-reveal className="mx-auto mb-8 grid w-full max-w-xl gap-3 sm:mb-10 sm:grid-cols-2">
          <div className="border border-[#B59A65]/45 bg-[#F8F5EC] px-4 py-4 text-center shadow-[0_8px_20px_rgba(53,67,43,0.06)]">
            <CalendarDays className="mx-auto mb-2 h-4 w-4 text-[#96783B]" aria-hidden="true" />
            <span className="block font-cinzel text-[10px] font-semibold uppercase tracking-[0.18em] text-[#899477]">Date</span>
            <span className="mt-1 block font-serif text-lg leading-tight text-[#2A3420]">{details.dateDisplay}</span>
            <span className="mt-0.5 block font-serif text-sm italic text-[#542D3A]">{details.day}</span>
          </div>
          <div className="border border-[#B59A65]/45 bg-[#F8F5EC] px-4 py-4 text-center shadow-[0_8px_20px_rgba(53,67,43,0.06)]">
            <Clock className="mx-auto mb-2 h-4 w-4 text-[#96783B]" aria-hidden="true" />
            <span className="block font-cinzel text-[10px] font-semibold uppercase tracking-[0.18em] text-[#899477]">Time</span>
            <span className="mt-1 block font-serif text-lg leading-tight text-[#2A3420]">{timePrimary}</span>
            {timeNote && <span className="mt-0.5 block font-serif text-sm italic text-[#542D3A]">{timeNote}</span>}
          </div>
          <a
            href={details.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border border-[#B59A65]/55 bg-gradient-to-br from-[#414B2E] to-[#2A3420] px-4 py-5 text-left text-[#F8F5EC] shadow-[0_10px_24px_rgba(42,52,32,0.16)] transition-transform duration-300 hover:-translate-y-0.5 sm:col-span-2"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4BF8E]/45 bg-[#F8F5EC]/10">
              <MapPin className="h-5 w-5 text-[#D4BF8E] transition-transform group-hover:scale-110" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block font-cinzel text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D4BF8E]">Location</span>
              <span className="mt-1 block font-serif text-[1.45rem] leading-tight">{details.venue}</span>
              <span className="mt-1 block font-serif text-sm leading-snug text-[#E9E1D1]">{details.address.replace(/Kerala\s+/, 'Kerala\u00A0')}</span>
              <span className="mt-2 inline-flex items-center gap-1.5 font-cinzel text-[10px] uppercase tracking-[0.16em] text-[#D4BF8E]">
                Open in Google Maps
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </span>
            </span>
          </a>
        </div> */}

        <div data-section-reveal className="relative mx-auto w-full max-w-xl border border-[#B59A65]/50 bg-[#E9E1D1]/70 p-2 shadow-[0_18px_48px_rgba(53,67,43,0.13)]">
          <div className="border border-[#B59A65]/25 bg-[#F8F5EC]/80 px-4 py-6 text-center paper-grain sm:px-8 sm:py-8">
            <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#B59A65]/40 bg-[#E9E1D1]/70 text-[#96783B]">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
            </span>
            <h3 className="editorial-h2 text-xl text-[#414B2E] sm:text-2xl">Keep the date close</h3>
            <p className="editorial-quote mx-auto mt-1 max-w-sm text-sm text-[#37352F]/75">
              Add our celebration to your calendar so we can share this day together.
            </p>
            <OrnamentalDivider className="mx-auto mt-5 max-w-sm text-[#B59A65]" />
            <div className="mt-5 flex justify-center">
            <button
              onClick={handleDownloadIcs}
              className="group flex min-h-12 w-full items-center justify-center gap-2.5 border border-[#96783B]/70 bg-[#414B2E] px-5 py-3.5 text-center font-cinzel text-[10px] uppercase leading-relaxed tracking-[0.12em] text-[#F8F5EC] shadow-[0_6px_18px_rgba(53,67,43,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#35432B] sm:w-auto sm:px-7 sm:text-xs sm:tracking-[0.2em]"
            >
              {calendarSaved ? (
                <>
                  <Check className="h-4 w-4 text-[#D4BF8E]" />
                  <span>Calendar File Saved!</span>
                </>
              ) : (
                <>
                  <CalendarPlus className="h-4 w-4 text-[#D4BF8E] transition-transform group-hover:scale-110" />
                  <span>Save the Date</span>
                </>
              )}
            </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
