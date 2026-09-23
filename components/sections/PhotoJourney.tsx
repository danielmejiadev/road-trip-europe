"use client";

import { useState } from "react";
import { getUnsplashUrl, getPrimaryPhoto, getPhotosByDestination } from "@/lib/data/photos";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { PhotoCarousel } from "@/components/ui/PhotoCarousel";
import { useTrip } from "@/lib/trip-context";
import type { Destination, TripPhoto, DayItinerary } from "@/lib/types";

interface DestinationDetailModalProps {
  destination: Destination | null;
  photos: TripPhoto[];
  days: DayItinerary[];
  onClose: () => void;
}

function DestinationDetailModal({ destination, photos, days, onClose }: DestinationDetailModalProps) {
  return (
    <Modal isOpen={destination !== null} onClose={onClose}>
      {destination && (
        <div>
          <div className="relative">
            <PhotoCarousel photos={photos} />
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="p-4 sm:p-6">
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className="text-2xl" aria-hidden="true">{destination.countryFlag}</span>
              <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                {destination.country}
              </span>
              <Badge variant="accent">{destination.days}</Badge>
              <Badge variant="default">
                {destination.nights === 1 ? "1 noche" : `${destination.nights} noches`}
              </Badge>
            </div>

            <h3
              className="text-2xl font-bold text-[var(--color-text-primary)] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {destination.name}
            </h3>

            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {destination.description}
            </p>

            <div className="mb-4 p-3 bg-[var(--color-surface-elevated)] rounded-lg border border-[var(--color-border)]">
              <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-1">
                📍 Dónde está
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {destination.locationDescription}
              </p>
            </div>

            <div className="mb-4 p-3 bg-[var(--color-accent-soft)] rounded-lg border border-[var(--color-accent)]/20">
              <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-1">
                💡 Por qué este lugar (y no otro)
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {destination.whyThisPlace}
              </p>
            </div>

            {destination.highlights.length > 0 && (
              <div className="mb-4">
                <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                  Qué ver
                </p>
                <ul className="space-y-1.5">
                  {destination.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2"
                    >
                      <span className="text-[var(--color-accent)] mt-0.5 flex-shrink-0" aria-hidden="true">✦</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {days.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                  Tus días aquí
                </p>
                <div className="space-y-2">
                  {days.map((day) => (
                    <div
                      key={day.dayNumber}
                      className="p-3 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)]"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="muted">Día {day.dayNumber}</Badge>
                      </div>
                      <p className="text-sm font-medium text-[var(--color-text-primary)] mb-1">{day.title}</p>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{day.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}

export function PhotoJourney() {
  const trip = useTrip();
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const selectedPhotos = selectedDestination ? getPhotosByDestination(trip.photos, selectedDestination.id) : [];
  const selectedDays = selectedDestination
    ? trip.itinerary.filter((day) => selectedDestination.dayNumbers.includes(day.dayNumber))
    : [];

  return (
    <section id="destinos" className="py-16">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          El recorrido
        </h2>
        <p className="text-[var(--color-text-secondary)]">
          {trip.destinations.length} destinos · {trip.meta.countries.length}{" "}
          {trip.meta.countries.length === 1 ? "país" : "países"} · Toca una tarjeta para ver el detalle completo
        </p>
      </div>

      {/* Scroll horizontal de destinos */}
      <div className="overflow-x-auto scroll-x pb-4">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8" style={{ width: "max-content" }}>
          {trip.destinations.map((destination, index) => {
            const primaryPhoto = getPrimaryPhoto(trip.photos, destination.id);
            const photoUrl = primaryPhoto ? getUnsplashUrl(primaryPhoto.unsplashId) : undefined;

            return (
              <article
                key={destination.id}
                className="relative w-64 h-96 rounded-2xl overflow-hidden flex-shrink-0 group"
                style={{ minWidth: "256px" }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedDestination(destination)}
                  aria-label={`Ver detalle de ${destination.name}`}
                  className="absolute inset-0 w-full h-full text-left cursor-pointer"
                >
                  {/* Foto de fondo */}
                  {photoUrl && (
                    <img
                      src={photoUrl}
                      alt={`${destination.name}, ${destination.country}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Overlay degradado */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/30 to-transparent" />

                  {/* Número de etapa */}
                  <div className="absolute top-4 left-4">
                    <span className="w-8 h-8 rounded-full bg-[var(--color-accent)] text-[#0a0a0f] text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>

                  {/* Contenido inferior */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl" aria-hidden="true">{destination.countryFlag}</span>
                      <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                        {destination.country}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold text-white mb-3 leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {destination.name}
                    </h3>
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="accent">{destination.days}</Badge>
                        <Badge variant="default">
                          {destination.nights === 1
                            ? "1 noche"
                            : `${destination.nights} noches`}
                        </Badge>
                      </div>
                      <span className="text-xs text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                        Ver detalle →
                      </span>
                    </div>
                  </div>
                </button>

                {/* Separador de flecha entre destinos (excepto en el último) */}
                {index < trip.destinations.length - 1 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] text-xs">
                    →
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <DestinationDetailModal
        destination={selectedDestination}
        photos={selectedPhotos}
        days={selectedDays}
        onClose={() => setSelectedDestination(null)}
      />
    </section>
  );
}
