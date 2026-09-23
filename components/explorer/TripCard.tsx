"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { getUnsplashUrl, getPhotosByDestination } from "@/lib/data/photos";
import { getBudgetSummary } from "@/utils/budget";
import { formatEur } from "@/utils/format";
import type { Trip } from "@/lib/types";

interface TripCardProps {
  trip: Trip;
  selectable?: boolean;
  selected?: boolean;
  onToggleSelect?: (tripId: string) => void;
}

const BUDGET_TIER_LABEL: Record<Trip["meta"]["budgetTier"], string> = {
  lower: "💰 Presupuesto accesible",
  moderate: "💶 Presupuesto moderado",
  higher: "💎 Presupuesto más alto",
};

export function TripCard({ trip, selectable = false, selected = false, onToggleSelect }: TripCardProps) {
  const heroPhoto = trip.photos.find((photo) => photo.id === trip.meta.heroPhotoId) ?? trip.photos[0];
  const heroUrl = heroPhoto ? getUnsplashUrl(heroPhoto.unsplashId) : undefined;
  const galleryPhotos = trip.destinations
    .flatMap((destination) => getPhotosByDestination(trip.photos, destination.id))
    .filter((photo) => photo.id !== heroPhoto?.id)
    .slice(0, 5);
  const budgetSummary = getBudgetSummary(trip.budgetCategories);

  const cardInner = (
    <div
      className="group relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1"
      style={
        {
          "--color-accent": trip.meta.colorTheme.accent,
          "--color-accent-soft": trip.meta.colorTheme.accentSoft,
        } as React.CSSProperties
      }
    >
      {/* Foto hero */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        {heroUrl && (
          <img
            src={heroUrl}
            alt={trip.meta.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/10 to-transparent" />

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="text-2xl" aria-hidden="true">{trip.meta.countryFlags}</span>
        </div>

        {selectable && (
          <div
            className="absolute top-3 right-3 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors"
            style={{
              borderColor: selected ? trip.meta.colorTheme.accent : "rgba(255,255,255,0.6)",
              backgroundColor: selected ? trip.meta.colorTheme.accent : "rgba(0,0,0,0.4)",
              color: selected ? "#0a0a0f" : "#fff",
            }}
            aria-hidden="true"
          >
            {selected ? "✓" : ""}
          </div>
        )}

        <div className="absolute bottom-3 left-4 right-4">
          <p className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-widest mb-1">
            {trip.meta.tripStyle}
          </p>
          <h3
            className="text-xl sm:text-2xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)", textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
          >
            {trip.meta.title}
          </h3>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{trip.meta.subtitle}</p>

        <p className="text-xs text-[var(--color-text-muted)] mb-4 leading-relaxed">
          {trip.meta.routeSummary}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="accent">{trip.meta.days} días · {trip.meta.nights} noches</Badge>
          <Badge variant="muted">~{trip.meta.approxDistanceKm.toLocaleString("es-ES")} km</Badge>
          <Badge variant="muted">~{trip.meta.approxDrivingHours}h conduciendo</Badge>
        </div>

        {/* Mini ruta de destinos */}
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 mb-4">
          {trip.destinations.map((destination, index) => (
            <span key={destination.id} className="flex items-center gap-1">
              <span className="text-[10px] text-[var(--color-text-muted)]">{destination.name}</span>
              {index < trip.destinations.length - 1 && (
                <span className="text-[9px] text-[var(--color-text-muted)]">→</span>
              )}
            </span>
          ))}
        </div>

        {/* Galería mini */}
        {galleryPhotos.length > 0 && (
          <div className="grid grid-cols-5 gap-1 mb-4">
            {galleryPhotos.map((photo) => (
              <div key={photo.id} className="aspect-square rounded-md overflow-hidden">
                <img
                  src={getUnsplashUrl(photo.unsplashId)}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Tags de personalidad */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {trip.meta.tags.map((tag) => (
            <span
              key={tag.key}
              className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-text-secondary)]"
            >
              <span aria-hidden="true">{tag.emoji}</span>
              {tag.label}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border)]">
          <div>
            <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">
              {BUDGET_TIER_LABEL[trip.meta.budgetTier]}
            </p>
            <p className="text-sm font-bold text-[var(--color-accent)]">
              ~{formatEur(budgetSummary.totalPerPerson)}<span className="text-[var(--color-text-muted)] font-normal">/persona</span>
            </p>
          </div>
          {!selectable && (
            <span className="text-xs font-medium text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              Explorar
              <span aria-hidden="true">→</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (selectable) {
    return (
      <button
        type="button"
        onClick={() => onToggleSelect?.(trip.meta.id)}
        className="text-left w-full"
        aria-pressed={selected}
        aria-label={`${selected ? "Quitar de" : "Añadir a"} la comparación: ${trip.meta.title}`}
      >
        {cardInner}
      </button>
    );
  }

  return (
    <Link href={`/trip/${trip.meta.id}`} className="block no-underline">
      {cardInner}
    </Link>
  );
}
