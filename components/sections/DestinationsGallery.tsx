"use client";

import { getUnsplashUrl, getPhotosByDestination } from "@/lib/data/photos";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useTrip } from "@/lib/trip-context";

export function DestinationsGallery() {
  const trip = useTrip();

  return (
    <section id="galeria" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Destinos
        </h2>
        <p className="text-[var(--color-text-secondary)]">
          {trip.destinations.length} destinos, cada uno con su personalidad única
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trip.destinations.map((destination) => {
          const photos = getPhotosByDestination(trip.photos, destination.id);
          const primaryPhotoUrl = photos[0] ? getUnsplashUrl(photos[0].unsplashId) : undefined;

          return (
            <Card key={destination.id} elevated hoverable className="overflow-hidden">
              {/* Foto del destino */}
              <div className="relative h-48 overflow-hidden">
                {primaryPhotoUrl && (
                  <img
                    src={primaryPhotoUrl}
                    alt={`${destination.name}, ${destination.country}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-elevated)]/80 to-transparent" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <Badge variant="accent">{destination.days}</Badge>
                  <Badge variant="default">
                    {destination.nights === 1 ? "1 noche" : `${destination.nights} noches`}
                  </Badge>
                </div>
              </div>

              {/* Info del destino */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl" aria-hidden="true">{destination.countryFlag}</span>
                  <div>
                    <h3
                      className="text-lg font-bold text-[var(--color-text-primary)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {destination.name}
                    </h3>
                    <p className="text-xs text-[var(--color-text-muted)]">{destination.country}</p>
                  </div>
                </div>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {destination.description}
                </p>

                {destination.highlights.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                      Imprescindibles
                    </p>
                    <ul className="space-y-1">
                      {destination.highlights.slice(0, 4).map((highlight) => (
                        <li
                          key={highlight}
                          className="text-xs text-[var(--color-text-secondary)] flex items-start gap-2"
                        >
                          <span className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" aria-hidden="true">
                            ✦
                          </span>
                          {highlight}
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
