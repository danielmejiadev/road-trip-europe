"use client";

import { getUnsplashUrl, getPhotoById } from "@/lib/data/photos";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatKm, formatDriveTime } from "@/utils/format";
import { useTrip } from "@/lib/trip-context";

const DIFFICULTY_LABELS = {
  easy: "Fácil",
  moderate: "Moderada",
  challenging: "Exigente",
} as const;

const DIFFICULTY_VARIANTS = {
  easy: "emerald",
  moderate: "accent",
  challenging: "crimson",
} as const;

export function ScenicDrives() {
  const trip = useTrip();

  return (
    <section id="carreteras" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Rutas escénicas
        </h2>
        <p className="text-[var(--color-text-secondary)]">
          Las carreteras más espectaculares del recorrido
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trip.scenicDrives.map((drive) => {
          const photo = getPhotoById(trip.photos, drive.photoId);
          const photoUrl = photo ? getUnsplashUrl(photo.unsplashId) : undefined;

          const difficultyVariant = DIFFICULTY_VARIANTS[drive.difficulty];

          return (
            <Card key={drive.id} elevated hoverable className="overflow-hidden">
              {/* Foto */}
              <div className="relative h-40 overflow-hidden">
                {photoUrl && (
                  <img
                    src={photoUrl}
                    alt={drive.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-elevated)] to-transparent" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <Badge variant={difficultyVariant as "emerald" | "accent" | "crimson"}>
                    {DIFFICULTY_LABELS[drive.difficulty]}
                  </Badge>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-5">
                <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1">
                  {drive.name}
                </h3>
                <p className="text-xs text-[var(--color-accent)] mb-3">{drive.subtitle}</p>

                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs text-[var(--color-text-muted)]">
                    📏 {formatKm(drive.distanceKm)}
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    ⏱ {formatDriveTime(drive.durationMinutes)}
                  </span>
                </div>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {drive.description}
                </p>

                {drive.bestStops.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                      Paradas recomendadas
                    </p>
                    <ul className="space-y-1">
                      {drive.bestStops.map((stop) => (
                        <li key={stop} className="text-xs text-[var(--color-text-secondary)] flex items-center gap-2">
                          <span className="text-[var(--color-accent)]" aria-hidden="true">·</span>
                          {stop}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
