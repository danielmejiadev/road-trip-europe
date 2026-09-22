import { Header } from "@/components/layout/Header";
import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { TripDashboard } from "@/components/sections/TripDashboard";
import { PhotoJourney } from "@/components/sections/PhotoJourney";
import { DayByDay } from "@/components/sections/DayByDay";
import { MapSection } from "@/components/sections/MapSection";
import { ScenicDrives } from "@/components/sections/ScenicDrives";
import { BudgetSection } from "@/components/sections/BudgetSection";

export default function HomePage() {
  return (
    <>
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
            <span>De Praga a Venecia · Septiembre 2027</span>
          </div>
          <div className="flex items-center gap-4">
            <span>🇨🇿 🇦🇹 🇭🇺 🇸🇮 🇮🇹</span>
            <span>14 días · 4 viajeros · ~€1.669/persona</span>
          </div>
        </div>
      </footer>
    </>
  );
}
