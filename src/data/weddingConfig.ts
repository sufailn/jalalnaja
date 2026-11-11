export interface WeddingDetails {
  date: string; // ISO format "2026-12-24"
  dateDisplay: string; // "24th December 2026"
  day: string;  // "Thursday"
  time: string; // "04:00 PM evening"
  venue: string; // "Wedding Venue"
  address: string; // "Venue Location (Click for Google Maps Directions)"
  googleMapsUrl: string;
  rsvpContactNumber?: string | null;
  additionalNotes?: string;
  logoUrl: string;
}

export interface WeddingData {
  groom: {
    name: string;
    father: string;
    mother: string;
    residence: string;
    siblings: string[];
    title?: string;
  };
  bride: {
    name: string;
    father: string;
    mother: string;
    residence: string;
    sisters: string[];
    title?: string;
  };
  details: WeddingDetails;
  wording: {
    basmala: string;
    basmalaTranslation: string;
    quranVerseArabic: string;
    quranVerseTranslation: string;
    quranVerseReference: string;
    subtitle: string;
    invitationPreamble: string;
    invitationClosing: string;
    closingGratitude: string;
    presenceQuote: string;
  };
}

export const initialWeddingData: WeddingData = {
  groom: {
    name: "Muhammed Jalaludheen",
    father: "Yahiya T T",
    mother: "Shameen T",
    residence: "T T House",
    siblings: ["Ayisha Misiri"],
  },
  bride: {
    name: "Najah Fathima K",
    father: "Saidalavi K",
    mother: "Noorjahan T",
    residence: "Karuthon House",
    sisters: ["Nasoora", "Fahma", "Riya"],
  },
  details: {
    date: "2026-12-24",
    dateDisplay: "24th December 2026",
    day: "Thursday",
    time: "04:00 PM Evening",
    venue: "Celebration Venue",
    address: "Tap below for live navigation and directions via Google Maps",
    googleMapsUrl: "https://maps.app.goo.gl/tDwyKHedXMk7uHmv6?g_st=iw",
    rsvpContactNumber: null,
    additionalNotes: "Your esteemed presence and prayers are our greatest honour.",
    logoUrl: "/assets/aistudio/logo_cropped_olive.png",
  },
  wording: {
    basmala: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    basmalaTranslation: "In the name of Allah, the Most Gracious, the Most Merciful",
    quranVerseArabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    quranVerseTranslation: "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them; and He placed between you affection and mercy.",
    quranVerseReference: "Surah Ar-Rum · 30:21",
    subtitle: "Two souls, one journey, and a lifetime of beautiful moments.",
    invitationPreamble: "With the blessings of Allah and the love and prayers of our families, we joyfully invite you to celebrate the wedding of",
    invitationClosing: "Your presence and prayers will make our special day even more meaningful.",
    closingGratitude: "With love, gratitude, and the blessings of our families, we look forward to celebrating this beautiful beginning with you.",
    presenceQuote: "Your presence is our greatest gift.",
  },
};
