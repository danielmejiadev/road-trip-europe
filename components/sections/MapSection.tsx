"use client";

import dynamic from "next/dynamic";
import { destinations } from "@/lib/data/destinations";
import { Badge } from "@/components/ui/Badge";

// Leaflet requires the browser DOM — disable SSR completely.
const TripMap = dynamic(() => import("@/components/map/TripMap"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center h-[320px] sm:h-[420px] lg:h-[500px]">
      <div className="text-center">
        <div className="text-4xl mb-3" aria-hidden="true">🗺️</div>
        <p className="text-[var(--color-text-muted)] text-sm">Cargando mapa…</p>
      </div>
    </div>
  ),
});

export function MapSection() {
  return (
    <section id="mapa" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          La ruta en el mapa
        </h2>
        <p className="text-[var(--color-text-secondary)]">
          De Praga a Venecia · 5 países · ~1.805 km
        </p>
      </div>

      <div className="rounded-xl overflow-hidden border border-[var(--color-border)] h-[320px] sm:h-[420px] lg:h-[500px]">
        <TripMap />
      </div>

      {/* Leyenda de destinos */}
      <div className="mt-6 flex flex-wrap gap-3">
        {destinations.map((destination, index) => (
          <div
            key={destination.id}
            className="flex items-center gap-2 bg-[var(--color-surface-elevated)] px-3 py-1.5 rounded-full border border-[var(--color-border)]"
          >
            <span className="w-5 h-5 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[#0a0a0f] text-xs font-bold flex-shrink-0">
              {index + 1}
            </span>
            <span className="text-sm text-[var(--color-text-secondary)]">
              {destination.countryFlag} {destination.name}
            </span>
            <Badge variant="muted">{destination.days}</Badge>
          </div>
        ))}
      </div>
    </section>
  );
}
