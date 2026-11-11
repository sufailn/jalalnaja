import React, { useEffect, useRef, useState } from 'react';
import { WeddingData } from '../data/weddingConfig';

interface HeroSectionProps {
  weddingData: WeddingData;
  isInvitationOpen: boolean;
  onOpenInvitation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  weddingData,
  isInvitationOpen,
  onOpenInvitation,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.volume = 0;
  }, []);

  useEffect(() => {
    if (isInvitationOpen) return;

    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    setIsVideoPlaying(false);
  }, [isInvitationOpen]);

  const startVideo = () => {
    const video = videoRef.current;
    if (!video || isInvitationOpen || isVideoPlaying) return;

    video.muted = true;
    video.volume = 0;
    setIsVideoPlaying(true);
    video.play().catch((error: unknown) => {
      console.error('Unable to play the wedding video.', error);
      setIsVideoPlaying(false);
    });
  };

  const openInvitation = () => {
    if (isInvitationOpen) return;
    onOpenInvitation();
  };

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#28311F]"
    >
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
          isVideoPlaying ? 'opacity-100' : 'opacity-0'
        }`}
        src="/assets/video/jalalnaja.mp4"
        muted
        playsInline
        preload="none"
        aria-label={`Wedding film for ${weddingData.groom.name} and ${weddingData.bride.name}`}
        onEnded={openInvitation}
        onError={() => {
          console.error('Unable to load the wedding video.', videoRef.current?.error);
          setIsVideoPlaying(false);
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#172014]/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,25,16,.48)_0%,transparent_24%,transparent_68%,rgba(20,25,16,.56)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(17,22,14,.2)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-40 bg-[linear-gradient(to_top,#12180f_0%,rgba(18,24,15,.97)_24%,rgba(18,24,15,.78)_48%,transparent_100%)] sm:h-44"
      />

      {!isInvitationOpen && (
        <button
          type="button"
          onClick={startVideo}
          aria-hidden={isVideoPlaying}
          tabIndex={isVideoPlaying ? -1 : 0}
          className={`absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C5D4B0]/35 bg-[linear-gradient(90deg,rgba(65,75,46,.42)_0%,rgba(65,75,46,.16)_48%,transparent_100%)] px-8 py-3 font-cinzel text-[10px] uppercase tracking-[0.24em] text-[#FFF9E9] shadow-none backdrop-blur-[2px] transition-all duration-700 hover:border-[#C5D4B0]/55 hover:bg-[linear-gradient(90deg,rgba(65,75,46,.55)_0%,rgba(65,75,46,.22)_48%,transparent_100%)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5D4B0] sm:px-10 sm:py-3.5 sm:text-xs ${
            isVideoPlaying ? 'pointer-events-none scale-95 opacity-0' : 'opacity-100'
          }`}
        >
          Tap to open
        </button>
      )}
    </section>
  );
};
