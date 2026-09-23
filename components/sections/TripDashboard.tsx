"use client";

import { Card } from "@/components/ui/Card";
import { formatEur } from "@/utils/format";
import { getBudgetSummary } from "@/utils/budget";
import { useTrip } from "@/lib/trip-context";

interface StatTile {
  icon: string;
  value: string;
  label: string;
  sublabel?: string;
}

export function TripDashboard() {
  const trip = useTrip();
  const budgetSummary = getBudgetSummary(trip.budgetCategories);

  const statTiles: StatTile[] = [
    { icon: "👥", value: String(trip.meta.travelers), label: "Viajeros", sublabel: `${Math.round(trip.meta.travelers / 2)} parejas` },
    {
      icon: "🌍",
      value: String(trip.meta.countries.length),
      label: trip.meta.countries.length === 1 ? "País" : "Países",
      sublabel: trip.meta.countryFlags,
    },
    {
      icon: "🚗",
      value: `${trip.meta.approxDistanceKm.toLocaleString("es-ES")} km`,
      label: "En carretera",
      sublabel: `~${trip.meta.approxDrivingHours}h de conducción`,
    },
    { icon: "🏨", value: String(trip.meta.nights), label: "Noches", sublabel: `${trip.destinations.length} destinos` },
    { icon: "📅", value: String(trip.meta.days), label: "Días", sublabel: trip.meta.season },
    {
      icon: "💶",
      value: `~${formatEur(budgetSummary.totalPerPerson)}`,
      label: "Por persona",
      sublabel: `~${formatEur(budgetSummary.totalPerCouple)} por pareja`,
    },
  ];

  return (
    <section id="dashboard" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          El viaje en números
        </h2>
        <p className="text-[var(--color-text-secondary)] text-lg">
          De {trip.meta.startCity} a {trip.meta.endCity} · {trip.meta.season}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {statTiles.map((stat) => (
          <Card
            key={stat.label}
            elevated
            className="p-5 text-center flex flex-col items-center gap-2 hover:border-[var(--color-accent)]/30 transition-colors"
          >
            <span className="text-3xl" aria-hidden="true">
              {stat.icon}
            </span>
            <span className="text-xl sm:text-2xl font-bold text-[var(--color-accent)]">{stat.value}</span>
            <span className="text-sm font-medium text-[var(--color-text-primary)]">{stat.label}</span>
            {stat.sublabel && (
              <span className="text-xs text-[var(--color-text-muted)]">{stat.sublabel}</span>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
