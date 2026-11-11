import React, { useState } from 'react';
import { CornerOrnament, OrnamentalDivider } from './FloralDecorations';
import { WeddingData } from '../data/weddingConfig';
import { Check, Heart, Send, MessageCircle, Copy, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RSVPFormProps {
  weddingData: WeddingData;
}

export const RSVPForm: React.FC<RSVPFormProps> = ({ weddingData }) => {
  const [formData, setFormData] = useState({
    guestName: '',
    guestCount: '1',
    attendance: 'accepts' as 'accepts' | 'declines',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.guestName.trim()) {
      setErrorMessage('Please enter your esteemed name.');
      return;
    }

    setErrorMessage('');
    setSubmitted(true);

    // Save to local storage for user's session review
    try {
      const existing = JSON.parse(localStorage.getItem('wedding_rsvp_entries') || '[]');
      existing.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('wedding_rsvp_entries', JSON.stringify(existing));
    } catch {
      // safe fallback
    }

    // Gentle confetti celebration
    try {
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#414B2E', '#B59A65', '#542D3A'],
        disableForReducedMotion: true,
      });
    } catch {
      // safe fallback
    }
  };

  // WhatsApp formatted message link
  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `*Wedding RSVP for ${weddingData.groom.name} & ${weddingData.bride.name}*\n` +
      `• Guest Name: ${formData.guestName}\n` +
      `• Attendance: ${formData.attendance === 'accepts' ? 'Joyfully Accepts' : 'Regretfully Declines'}\n` +
      `• Number of Guests: ${formData.guestCount}\n` +
      (formData.message ? `• Du'a / Message: "${formData.message}"\n` : '')
    );
    const phone = weddingData.details.rsvpContactNumber?.replace(/[^0-9]/g, '') || '';
    return phone ? `https://wa.me/${phone}?text=${text}` : `https://wa.me/?text=${text}`;
  };

  const handleCopyRSVP = () => {
    const text =
      `Wedding RSVP for ${weddingData.groom.name} & ${weddingData.bride.name}\n` +
      `Guest Name: ${formData.guestName}\n` +
      `Attendance: ${formData.attendance === 'accepts' ? 'Joyfully Accepts' : 'Regretfully Declines'}\n` +
      `Number of Guests: ${formData.guestCount}\n` +
      (formData.message ? `Message: "${formData.message}"` : '');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="rsvp" className="relative bg-[#F4F0E6] px-4 py-16 paper-grain sm:py-24">
      <div className="max-w-2xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-9 px-2 text-center sm:mb-12">
          <span className="font-cinzel text-[10px] font-semibold uppercase tracking-[0.2em] text-[#414B2E] sm:text-xs sm:tracking-[0.3em]">
            Kindly Respond
          </span>
          <h2 className="mt-2 font-serif text-[clamp(1.9rem,5vw,3rem)] font-normal text-[#35432B]">
            RSVP Card
          </h2>
          <div className="w-16 h-[1px] bg-[#B59A65] mx-auto mt-4" />
          <p className="font-serif italic text-sm text-[#37352F]/80 max-w-sm mx-auto mt-3">
            Please let us know if you will be celebrating with us in person or in spirit and prayer.
          </p>
        </div>

        {/* Card Frame */}
        <div className="relative rounded-sm border border-[#B59A65]/50 bg-[#E9E1D1]/60 p-5 shadow-lg paper-grain-cream sm:p-10 md:p-12">
          {/* Inner hairline */}
          <div className="absolute inset-3 border border-[#414B2E]/20 pointer-events-none rounded-xs" />

          {/* Corners */}
          <CornerOrnament className="absolute top-3 left-3 w-7 h-7 text-[#B59A65]" />
          <CornerOrnament className="absolute top-3 right-3 w-7 h-7 text-[#B59A65] -scale-x-100" />
          <CornerOrnament className="absolute bottom-3 left-3 w-7 h-7 text-[#B59A65] -scale-y-100" />
          <CornerOrnament className="absolute bottom-3 right-3 w-7 h-7 text-[#B59A65] -scale-100" />

          {!submitted ? (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-5 sm:space-y-6">
              {/* Guest Name */}
              <div>
                <label className="block font-cinzel text-xs tracking-wider uppercase text-[#414B2E] font-medium mb-1.5">
                  Guest Name(s) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Salman & Family"
                  value={formData.guestName}
                  onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                  className="w-full min-w-0 rounded-xs border border-[#B59A65]/60 bg-[#F4F0E6] px-3 py-2.5 font-serif text-[#37352F] transition-colors focus:border-[#414B2E] focus:outline-none sm:px-4"
                />
              </div>

              {/* Attendance Options */}
              <div>
                <label className="block font-cinzel text-xs tracking-wider uppercase text-[#414B2E] font-medium mb-2">
                  Will You Attend?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'accepts' })}
                    className={`py-3 px-4 rounded-xs border text-xs font-cinzel tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      formData.attendance === 'accepts'
                        ? 'bg-[#414B2E] text-[#F4F0E6] border-[#414B2E] shadow-xs'
                        : 'bg-[#F4F0E6] text-[#414B2E] border-[#B59A65]/50 hover:bg-[#F4F0E6]/90'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    <span>Joyfully Accepts</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'declines' })}
                    className={`py-3 px-4 rounded-xs border text-xs font-cinzel tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      formData.attendance === 'declines'
                        ? 'bg-[#542D3A] text-[#F4F0E6] border-[#542D3A] shadow-xs'
                        : 'bg-[#F4F0E6] text-[#414B2E] border-[#B59A65]/50 hover:bg-[#F4F0E6]/90'
                    }`}
                  >
                    <Heart className="w-3.5 h-3.5" />
                    <span>Regretfully Declines</span>
                  </button>
                </div>
              </div>

              {/* Number of Guests */}
              {formData.attendance === 'accepts' && (
                <div>
                  <label className="block font-cinzel text-xs tracking-wider uppercase text-[#414B2E] font-medium mb-1.5">
                    Total Attendees
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full min-w-0 rounded-xs border border-[#B59A65]/60 bg-[#F4F0E6] px-3 py-2.5 font-serif text-[#37352F] focus:border-[#414B2E] focus:outline-none sm:px-4"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5">5+ (Family)</option>
                  </select>
                </div>
              )}

              {/* Message / Du'a */}
              <div>
                <label className="block font-cinzel text-xs tracking-wider uppercase text-[#414B2E] font-medium mb-1.5">
                  Heartfelt Du&apos;a / Warm Wishes
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a prayer or blessing for Muhammed & Najah..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-w-0 resize-none rounded-xs border border-[#B59A65]/60 bg-[#F4F0E6] px-3 py-2.5 font-serif text-[#37352F] transition-colors focus:border-[#414B2E] focus:outline-none sm:px-4"
                />
              </div>

              {errorMessage && (
                <p className="text-xs text-[#542D3A] font-serif italic text-center">
                  {errorMessage}
                </p>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xs bg-[#414B2E] py-3.5 font-cinzel text-[10px] uppercase tracking-[0.18em] text-[#F4F0E6] shadow transition-all duration-200 hover:bg-[#35432B] sm:text-xs sm:tracking-[0.25em]"
              >
                <Send className="w-3.5 h-3.5 text-[#B59A65]" />
                <span>Confirm RSVP</span>
              </button>
            </form>
          ) : (
            /* Submission Confirmation Card */
            <div className="relative z-10 text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#414B2E] text-[#B59A65] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <span className="font-cinzel text-xs tracking-[0.25em] uppercase text-[#B59A65] font-semibold">
                JazakAllah Khair
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#414B2E]">
                Thank You, {formData.guestName}!
              </h3>

              <p className="font-serif italic text-sm text-[#37352F]/85 max-w-md mx-auto leading-relaxed">
                {formData.attendance === 'accepts'
                  ? `Your confirmation for ${formData.guestCount} attendee(s) has been joyfully recorded. We eagerly anticipate celebrating together.`
                  : "Thank you for letting us know. Your heartfelt prayers and warm thoughts are deeply cherished."}
              </p>

              {/* Action Buttons: WhatsApp Share & Copy */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#414B2E] hover:bg-[#35432B] text-[#F4F0E6] font-cinzel text-xs tracking-wider uppercase rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#B59A65]" />
                  <span>Send via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyRSVP}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#F4F0E6] hover:bg-[#E9E1D1] text-[#414B2E] border border-[#B59A65]/50 font-cinzel text-xs tracking-wider uppercase rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied Details!' : 'Copy Summary'}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-serif italic text-[#899477] hover:text-[#414B2E] transition-colors mt-4 inline-block cursor-pointer"
              >
                Need to amend your response? Click here
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
