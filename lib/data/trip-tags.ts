import type { TripTag, TripTagKey } from "@/lib/types";

// Canonical emoji/label per tag key, used for the explorer's filter chips —
// independent of whatever label wording each trip used for its own `meta.tags`.
export const ALL_TRIP_TAGS: TripTag[] = [
  { key: "mountains", emoji: "🏔️", label: "Montañas" },
  { key: "medieval", emoji: "🏰", label: "Pueblos medievales" },
  { key: "history", emoji: "⚔️", label: "Historia" },
  { key: "coast", emoji: "🌊", label: "Costa" },
  { key: "food-wine", emoji: "🍷", label: "Comida y vino" },
  { key: "scenic-driving", emoji: "🚗", label: "Carreteras escénicas" },
  { key: "photography", emoji: "📸", label: "Fotografía" },
  { key: "beaches", emoji: "🏖️", label: "Playas" },
  { key: "countryside", emoji: "🚲", label: "Campiña" },
  { key: "lower-budget", emoji: "💰", label: "Presupuesto bajo" },
  { key: "romantic", emoji: "❤️", label: "Romántico" },
];

export function getTagMeta(key: TripTagKey): TripTag {
  return ALL_TRIP_TAGS.find((tag) => tag.key === key) ?? { key, emoji: "✦", label: key };
}
