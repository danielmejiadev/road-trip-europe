"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { trips } from "@/lib/data/trips";
import { TripCard } from "@/components/explorer/TripCard";
import { TripFilters } from "@/components/explorer/TripFilters";
import { TripComparison } from "@/components/explorer/TripComparison";
import { Button } from "@/components/ui/Button";
import type { TripTagKey } from "@/lib/types";

export default function ExplorerHomePage() {
  const [selectedTags, setSelectedTags] = useState<TripTagKey[]>([]);
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [compareSelection, setCompareSelection] = useState<string[]>([]);

  const visibleTrips = useMemo(() => {
    if (selectedTags.length === 0) {
      return trips;
    }

    return trips
      .map((trip) => ({
        trip,
        matchCount: selectedTags.filter((tag) => trip.meta.tags.some((tripTag) => tripTag.key === tag)).length,
      }))
      .filter(({ matchCount }) => matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount)
      .map(({ trip }) => trip);
  }, [selectedTags]);

  function toggleTag(tag: TripTagKey) {
    setSelectedTags((current) => (current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag]));
  }

  function toggleCompareSelection(tripId: string) {
    setCompareSelection((current) => {
      if (current.includes(tripId)) {
        return current.filter((id) => id !== tripId);
      }
      if (current.length >= 6) {
        return current;
      }
      return [...current, tripId];
    });
  }

  const selectedTripsForComparison = trips.filter((trip) => compareSelection.includes(trip.meta.id));

  return (
    <>
      <header className="border-b border-[var(--color-border)] sticky top-0 z-40 bg-[var(--color-bg)]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <span className="flex items-center gap-2 text-sm font-semibold tracking-wide text-[var(--color-text-primary)]">
            <span className="text-[var(--color-accent)] text-xl" aria-hidden="true">🌍</span>
            Europe Road Trip Explorer
          </span>
          <Button
            variant={isCompareMode ? "primary" : "secondary"}
            size="sm"
            onClick={() => setIsCompareMode((value) => !value)}
          >
            {isCompareMode ? "✕ Salir de comparar" : "⚖️ Comparar viajes"}
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-10 max-w-3xl">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Siete formas de <span className="text-gold-gradient">recorrer Europa</span> en carro
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Elige una ruta. Explora el mapa. Descubre el recorrido día a día. Abre el itinerario completo.
          </p>
        </div>

        {isCompareMode ? (
          <div>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Selecciona entre 2 y 6 road trips para comparar ({compareSelection.length} seleccionados)
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {trips.map((trip) => (
                <TripCard
                  key={trip.meta.id}
                  trip={trip}
                  selectable
                  selected={compareSelection.includes(trip.meta.id)}
                  onToggleSelect={toggleCompareSelection}
                />
              ))}
            </div>
            <TripComparison trips={selectedTripsForComparison} />
          </div>
        ) : (
          <>
            <div className="mb-10">
              <TripFilters selectedTags={selectedTags} onToggleTag={toggleTag} onClear={() => setSelectedTags([])} />
            </div>

            {visibleTrips.length === 0 ? (
              <p className="text-[var(--color-text-secondary)] text-center py-16">
                Ningún road trip coincide con esos filtros — prueba quitando alguno.
              </p>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {visibleTrips.map((trip) => (
                  <TripCard key={trip.meta.id} trip={trip} />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <footer className="border-t border-[var(--color-border)] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">
          <span>Europe Road Trip Explorer · {trips.length} rutas</span>
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">
            ↑ Volver arriba
          </Link>
        </div>
      </footer>
    </>
  );
}
