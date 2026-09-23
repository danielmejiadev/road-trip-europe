import type { Trip } from "@/lib/types";
import { bohemiaAlpsAdriaticTrip } from "./bohemia-alps-adriatic";
import { fairytaleEuropeTrip } from "./fairytale-europe";
import { portugalTrip } from "./portugal";
import { alpineEuropeTrip } from "./alpine-europe";
import { frenchAlpsItalyTrip } from "./french-alps-italy";
import { easternEuropeTrip } from "./eastern-europe";
import { franceBelgiumNetherlandsTrip } from "./france-belgium-netherlands";

// Registry of every road trip the explorer can show. Each trip's full detail
// experience (map, day-by-day, budget, photos) is rendered by the same
// components — this array is the only place that needs to grow when a new
// trip is added.
export const trips: Trip[] = [
  bohemiaAlpsAdriaticTrip,
  fairytaleEuropeTrip,
  franceBelgiumNetherlandsTrip,
  portugalTrip,
  easternEuropeTrip,
  alpineEuropeTrip,
  frenchAlpsItalyTrip,
];

export function getTripById(tripId: string): Trip | undefined {
  return trips.find((trip) => trip.meta.id === tripId);
}
