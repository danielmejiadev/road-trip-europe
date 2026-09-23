import type { Trip } from "@/lib/types";
import { destinations } from "@/lib/data/destinations";
import { itinerary, scenicDrives } from "@/lib/data/itinerary";
import { hotels } from "@/lib/data/hotels";
import { budgetCategories, vignettes, drivingLegs } from "@/lib/data/budget";
import { tripPhotos } from "@/lib/data/photos";

// The original road trip this app was built around — content untouched,
// just wrapped in the multi-trip `Trip` shape so it can live alongside the
// other six routes in the explorer.
export const bohemiaAlpsAdriaticTrip: Trip = {
  meta: {
    id: "bohemia-alps-adriatic",
    title: "Bohemia, Alps & the Adriatic",
    subtitle: "Castillos medievales, lagos alpinos y el paso de montaña más espectacular de Eslovenia",
    countryFlags: "🇨🇿🇦🇹🇭🇺🇸🇮🇮🇹",
    countries: ["República Checa", "Austria", "Hungría", "Eslovenia", "Italia"],
    routeSummary: "Praga → Český Krumlov → Salzkammergut → Budapest → Bled → Valle del Soča → Dolomitas → Venecia",
    startCity: "Praga",
    endCity: "Venecia",
    days: 14,
    nights: 14,
    approxDistanceKm: 1805,
    approxDrivingHours: 22,
    tripStyle: "Clásico centroeuropeo",
    budgetTier: "moderate",
    colorTheme: { accent: "#e8b86d", accentSoft: "rgba(232, 184, 109, 0.13)" },
    season: "Septiembre 2027",
    travelers: 4,
    heroPhotoId: "prague-panorama",
    tags: [
      { key: "medieval", emoji: "🏰", label: "Pueblos medievales" },
      { key: "mountains", emoji: "🏔️", label: "Alpes" },
      { key: "scenic-driving", emoji: "🚗", label: "Carreteras escénicas" },
      { key: "photography", emoji: "📸", label: "Fotografía" },
      { key: "romantic", emoji: "❤️", label: "Romántico" },
    ],
  },
  destinations,
  itinerary,
  hotels,
  budgetCategories,
  vignettes,
  drivingLegs: drivingLegs.map((leg) => ({ ...leg })),
  photos: tripPhotos,
  scenicDrives,
};
