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
  /** Why this place/activity matters — history or practical reasons to go, shown in the detail view. */
  context?: string;
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
  /** Where it sits geographically relative to the rest of the route. */
  locationDescription: string;
  /** Why this stop made the cut over other nearby options. */
  whyThisPlace: string;
}

/** How confident we are in a hand-entered real-world value (price, hours, toll cost, etc.). */
export type VerificationStatus = "confirmed" | "estimated" | "needs-verification";

export interface Hotel {
  destinationId: string;
  name: string;
  neighborhood: string;
  pricePerRoom: number;
  notes: string;
  bookingTip?: string;
  verificationStatus?: VerificationStatus;
}

export interface BudgetCategory {
  category: string;
  icon: string;
  unitLabel: string;
  unitCount: number;
  unitCost: number;
  total: number;
  notes?: string;
  verificationStatus?: VerificationStatus;
}

export interface BudgetSummary {
  categories: BudgetCategory[];
  subtotalFourPeople: number;
  safetyMarginAmount: number;
  totalFourPeople: number;
  totalPerPerson: number;
  totalPerCouple: number;
}

export interface DayCostLineItem {
  label: string;
  icon: string;
  unitLabel: "persona" | "habitación";
  unitPrice: number;
  units: number;
  total: number;
}

export interface DayCostSummary {
  dayNumber: number;
  location: string;
  items: DayCostLineItem[];
  dayTotal: number;
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

/**
 * Fixed vocabulary for trip-personality filters/tags. Descriptive only —
 * never used to score or rank trips against each other.
 */
export type TripTagKey =
  | "mountains"
  | "medieval"
  | "history"
  | "coast"
  | "food-wine"
  | "scenic-driving"
  | "photography"
  | "beaches"
  | "countryside"
  | "lower-budget"
  | "romantic";

export interface TripTag {
  key: TripTagKey;
  emoji: string;
  label: string;
}

/** Distinct visual identity per trip — overrides the global accent CSS vars within that trip's subtree. */
export interface TripColorTheme {
  accent: string;
  accentSoft: string;
}

export interface DrivingLegSummary {
  from: string;
  to: string;
  distanceKm: number;
  driveTime: string;
}

export interface TripMeta {
  id: string;
  title: string;
  subtitle: string;
  countryFlags: string;
  countries: string[];
  routeSummary: string;
  startCity: string;
  endCity: string;
  days: number;
  nights: number;
  approxDistanceKm: number;
  approxDrivingHours: number;
  tripStyle: string;
  tags: TripTag[];
  /** Relative cost bracket vs. the other trips in the explorer — descriptive, never a ranking. */
  budgetTier: "lower" | "moderate" | "higher";
  colorTheme: TripColorTheme;
  season: string;
  travelers: number;
  heroPhotoId: string;
}

export interface Trip {
  meta: TripMeta;
  destinations: Destination[];
  itinerary: DayItinerary[];
  hotels: Hotel[];
  budgetCategories: BudgetCategory[];
  vignettes: Vignette[];
  drivingLegs: DrivingLegSummary[];
  photos: TripPhoto[];
  scenicDrives: ScenicDrive[];
}
