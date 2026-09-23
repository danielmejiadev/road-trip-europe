import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { TripDashboard } from "@/components/sections/TripDashboard";
import { PhotoJourney } from "@/components/sections/PhotoJourney";
import { DayByDay } from "@/components/sections/DayByDay";
import { MapSection } from "@/components/sections/MapSection";
import { ScenicDrives } from "@/components/sections/ScenicDrives";
import { BudgetSection } from "@/components/sections/BudgetSection";
import { TripProvider } from "@/lib/trip-context";
import { trips, getTripById } from "@/lib/data/trips";
import { getBudgetSummary } from "@/utils/budget";
import { formatEur } from "@/utils/format";

export function generateStaticParams() {
  return trips.map((trip) => ({ tripId: trip.meta.id }));
}

export const dynamicParams = false;

interface TripPageProps {
  params: Promise<{ tripId: string }>;
}

export default async function TripPage({ params }: TripPageProps) {
  const { tripId } = await params;
  const trip = getTripById(tripId);

  if (!trip) {
    notFound();
  }

  const budgetSummary = getBudgetSummary(trip.budgetCategories);

  return (
    <TripProvider trip={trip}>
      <a href="#itinerario" className="sr-only focus:not-sr-only fixed top-4 left-4 z-[9999] bg-[var(--color-accent)] text-[#0a0a0f] px-4 py-2 rounded-lg font-medium text-sm">
        Ir al contenido principal
      </a>

      <Header />
      <Navigation />

      <main>
        <Hero />
        <TripDashboard />
        <PhotoJourney />
        <DayByDay />
        <MapSection />
        <ScenicDrives />
        <BudgetSection />
      </main>

      <footer className="border-t border-[var(--color-border)] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">
          <div className="flex items-center gap-2">
            <span aria-hidden="true">🚗</span>
            <span>De {trip.meta.startCity} a {trip.meta.endCity} · {trip.meta.season}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>{trip.meta.countryFlags}</span>
            <span>
              {trip.meta.days} días · {trip.meta.travelers} viajeros · ~{formatEur(budgetSummary.totalPerPerson)}/persona
            </span>
          </div>
        </div>
      </footer>
    </TripProvider>
  );
}
