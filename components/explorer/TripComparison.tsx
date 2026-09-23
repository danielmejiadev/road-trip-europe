"use client";

import { Card } from "@/components/ui/Card";
import { COMPARISON_ROWS } from "@/lib/trip-comparison";
import type { Trip } from "@/lib/types";

interface TripComparisonProps {
  trips: Trip[];
}

export function TripComparison({ trips }: TripComparisonProps) {
  if (trips.length < 2) {
    return (
      <Card className="p-8 text-center">
        <p className="text-[var(--color-text-secondary)]">
          Selecciona al menos 2 road trips arriba para compararlos lado a lado.
        </p>
      </Card>
    );
  }

  return (
    <div>
      <p className="text-xs text-[var(--color-text-muted)] mb-4">
        Comparación descriptiva — no hay un viaje "ganador", cada fila explica una característica de cada ruta.
      </p>
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left px-4 py-3 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider sticky left-0 bg-[var(--color-surface)]">
                  Característica
                </th>
                {trips.map((trip) => (
                  <th
                    key={trip.meta.id}
                    className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider whitespace-nowrap"
                    style={{ color: trip.meta.colorTheme.accent }}
                  >
                    {trip.meta.countryFlags} {trip.meta.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, index) => (
                <tr
                  key={row.label}
                  className={index % 2 === 0 ? "bg-[var(--color-surface)]" : "bg-[var(--color-surface-elevated)]"}
                >
                  <td className="px-4 py-3 sticky left-0 bg-inherit">
                    <p className="text-sm font-medium text-[var(--color-text-primary)]">{row.label}</p>
                    {row.explanation && (
                      <p className="text-[10px] text-[var(--color-text-muted)] mt-0.5 max-w-[200px]">
                        {row.explanation}
                      </p>
                    )}
                  </td>
                  {trips.map((trip) => (
                    <td key={trip.meta.id} className="px-4 py-3 text-sm text-[var(--color-text-secondary)] whitespace-nowrap">
                      {row.values(trip)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
