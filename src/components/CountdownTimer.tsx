import React, { useState, useEffect } from 'react';
import { Clock, Heart } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: string | null;
  targetTime?: string | null;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  targetTime,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    if (!targetDate) {
      setTimeLeft(null);
      return;
    }

    const calculateTime = () => {
      // Parse ISO or standard date string
      const dateString = targetTime ? `${targetDate} ${targetTime}` : `${targetDate}T12:00:00`;
      const target = new Date(dateString).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (isNaN(difference)) {
        setTimeLeft(null);
        return;
      }

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate, targetTime]);

  if (!targetDate || !timeLeft) {
    return (
      <div className="w-full max-w-lg mx-auto p-6 sm:p-8 bg-[#F4F0E6] rounded border border-[#B59A65]/40 text-center paper-grain shadow-sm">
        <div className="w-10 h-10 rounded-full bg-[#E9E1D1] text-[#414B2E] mx-auto flex items-center justify-center mb-3">
          <Clock className="w-5 h-5 text-[#414B2E]" />
        </div>
        <span className="font-cinzel text-xs tracking-[0.25em] uppercase text-[#899477] font-semibold">
          Save the Date
        </span>
        <h4 className="font-serif text-2xl text-[#414B2E] my-1 font-normal">
          Anticipating the Blessed Day
        </h4>
        <p className="font-serif italic text-xs sm:text-sm text-[#37352F]/75 max-w-xs mx-auto leading-relaxed mt-2">
          The official wedding date will be announced here shortly. We look forward to celebrating with you!
        </p>
      </div>
    );
  }

  if (timeLeft.isPast) {
    return (
      <div className="w-full max-w-lg mx-auto p-6 sm:p-8 bg-[#414B2E] text-[#F4F0E6] rounded border border-[#B59A65]/40 text-center shadow-md">
        <Heart className="w-8 h-8 text-[#B59A65] mx-auto mb-2 fill-current" />
        <h4 className="font-serif text-2xl text-[#F4F0E6] my-1">
          Alhamdulillah, The Blessed Day Has Arrived!
        </h4>
        <p className="font-serif italic text-xs sm:text-sm text-[#E9E1D1]/80 mt-1">
          May Allah grant eternal barakah, harmony, and joy.
        </p>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-2xl border border-[#B59A65]/50 bg-[#F8F5EC] p-2 text-center shadow-[0_20px_55px_rgba(53,67,43,0.12)]">
      <div className="pointer-events-none absolute inset-2 border border-[#B59A65]/20" />
      <div className="relative px-3 py-6 paper-grain sm:px-8 sm:py-8">
      <span className="editorial-kicker text-[9px] font-semibold text-[#899477] sm:text-xs">
        Counting Down to the Beginning
      </span>
      <h4 className="editorial-h2 mt-2 mb-6 text-[clamp(1.45rem,5vw,2.1rem)] font-normal text-[#414B2E]">
        Until We Say &ldquo;Qubool Hai&rdquo;
      </h4>

      <div className="mx-auto grid max-w-md grid-cols-4 gap-1.5 sm:gap-3">
        {/* Days */}
        <div className="flex min-w-0 flex-col items-center border border-[#B59A65]/35 bg-[#E9E1D1]/75 px-1.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,.7)] sm:px-3 sm:py-4">
          <span className="editorial-display text-[clamp(1.35rem,5vw,2.4rem)] font-medium tabular-nums text-[#414B2E]">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="editorial-kicker mt-1 text-[8px] text-[#899477] sm:text-[10px]">
            Days
          </span>
        </div>

        {/* Hours */}
        <div className="flex min-w-0 flex-col items-center border border-[#B59A65]/35 bg-[#E9E1D1]/75 px-1.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,.7)] sm:px-3 sm:py-4">
          <span className="editorial-display text-[clamp(1.35rem,5vw,2.4rem)] font-medium tabular-nums text-[#414B2E]">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="editorial-kicker mt-1 text-[8px] text-[#899477] sm:text-[10px]">
            Hours
          </span>
        </div>

        {/* Minutes */}
        <div className="flex min-w-0 flex-col items-center border border-[#B59A65]/35 bg-[#E9E1D1]/75 px-1.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,.7)] sm:px-3 sm:py-4">
          <span className="editorial-display text-[clamp(1.35rem,5vw,2.4rem)] font-medium tabular-nums text-[#414B2E]">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="editorial-kicker mt-1 text-[8px] text-[#899477] sm:text-[10px]">
            Mins
          </span>
        </div>

        {/* Seconds */}
        <div className="flex min-w-0 flex-col items-center border border-[#B59A65]/35 bg-[#E9E1D1]/75 px-1.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,.7)] sm:px-3 sm:py-4">
          <span className="editorial-display text-[clamp(1.35rem,5vw,2.4rem)] font-medium tabular-nums text-[#542D3A]">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="editorial-kicker mt-1 text-[8px] text-[#899477] sm:text-[10px]">
            Secs
          </span>
        </div>
        </div>
      </div>
    </div>
  );
};
