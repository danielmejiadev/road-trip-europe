// Core trip data types

export type FatigueLevel = "relaxed" | "moderate" | "active" | "demanding";

export type ActivityType =
  | "arrival"
  | "departure"
  | "sightseeing"
  | "driving"
  | "dining"
  | "accommodation"
  | "hike"
  | "cable-car"
  | "boat"
  | "thermal"
  | "cruise"
  | "free";

export interface TimelineActivity {
  time: string;
  type: ActivityType;
  title: string;
  description: string;
  durationMinutes?: number;
  pricePerPerson?: number;
  crowdLevel?: "low" | "moderate" | "high";
  reservationRequired?: boolean;
  weatherBackup?: string;
  isHighlight?: boolean;
  /** Curated photo ids from `tripPhotos`. Falls back to the destination gallery when empty. */
  photoIds?: string[];
}

export interface DrivingLeg {
  from: string;
  to: string;
  distanceKm: number;
  driveTimeMinutes: number;
  stops?: string[];
  notes?: string;
}

export interface DayItinerary {
  dayNumber: number;
  date: string;
  location: string;
  country: string;
  countryCode: string;
  title: string;
  summary: string;
  fatigueLevel: FatigueLevel;
  hasDriving: boolean;
  drivingLeg?: DrivingLeg;
  activities: TimelineActivity[];
  hotel?: string;
  hotelPricePerRoom?: number;
  tips?: string[];
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  nights: number;
  days: string;
  dayNumbers: number[];
  lat: number;
  lng: number;
  description: string;
  highlights: string[];
  photoId: string;
}

export interface Hotel {
  destinationId: string;
  name: string;
  neighborhood: string;
  pricePerRoom: number;
  notes: string;
  bookingTip?: string;
}

export interface BudgetCategory {
  category: string;
  icon: string;
  unitLabel: string;
  unitCount: number;
  unitCost: number;
  total: number;
  notes?: string;
}

export interface BudgetSummary {
  categories: BudgetCategory[];
  totalFourPeople: number;
  totalPerPerson: number;
  totalPerCouple: number;
}

export interface ScenicDrive {
  id: string;
  name: string;
  subtitle: string;
  distanceKm: number;
  durationMinutes: number;
  description: string;
  bestStops: string[];
  photoId: string;
  difficulty: "easy" | "moderate" | "challenging";
}

export interface TripPhoto {
  id: string;
  destinationId: string;
  caption: string;
  unsplashId: string;
  status: "mock";
}

export interface TripStat {
  label: string;
  value: string;
  icon: string;
}

export interface Vignette {
  country: string;
  required: boolean;
  cost?: string;
  notes: string;
}

export interface MapMarker {
  id: string;
  name: string;
  lat: number;
  lng: number;
  dayNumbers: number[];
  nights: number;
  countryFlag: string;
}
