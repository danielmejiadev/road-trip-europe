"use client";

import { createContext, useContext, type CSSProperties, type ReactNode } from "react";
import type { Trip } from "@/lib/types";

const TripContext = createContext<Trip | null>(null);

interface TripProviderProps {
  trip: Trip;
  children: ReactNode;
}

// Wraps a trip detail page with its data AND its color identity: overriding
// --color-accent/--color-accent-soft here means every existing component that
// already styles itself with var(--color-accent) picks up each trip's mood
// automatically, no component-level changes needed for theming.
export function TripProvider({ trip, children }: TripProviderProps) {
  const themeVars = {
    "--color-accent": trip.meta.colorTheme.accent,
    "--color-accent-soft": trip.meta.colorTheme.accentSoft,
  } as CSSProperties;

  return (
    <TripContext.Provider value={trip}>
      <div style={themeVars}>{children}</div>
    </TripContext.Provider>
  );
}

export function useTrip(): Trip {
  const trip = useContext(TripContext);
  if (!trip) {
    throw new Error("useTrip must be used within a TripProvider");
  }
  return trip;
}
