"use client";

import { clsx } from "clsx";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { PhotoCarousel } from "@/components/ui/PhotoCarousel";
import { getDestinationIdForDay } from "@/lib/data/destinations";
import { itinerary } from "@/lib/data/itinerary";
import { getActivityPhotos } from "@/lib/data/photos";
import {
  formatDuration,
  formatEur,
  getFatigueLevelLabel,
  getFatigueLevelDot,
  getCrowdLevelLabel,
} from "@/utils/format";
import type { DayItinerary, TimelineActivity } from "@/lib/types";

const ACTIVITY_ICONS: Record<string, string> = {
  arrival: "✈️",
  departure: "🚗",
  sightseeing: "🏛️",
  driving: "🛣️",
  dining: "🍽️",
  accommodation: "🏨",
  hike: "🥾",
  "cable-car": "🚠",
  boat: "⛵",
  thermal: "♨️",
  cruise: "🚢",
  free: "☀️",
};

interface ActivityItemProps {
  activity: TimelineActivity;
  isLast: boolean;
  onSelect: (activity: TimelineActivity) => void;
}

function ActivityItem({ activity, isLast, onSelect }: ActivityItemProps) {
  const icon = ACTIVITY_ICONS[activity.type] ?? "📍";

  return (
    <div className="flex gap-4">
      {/* Timeline rail */}
      <div className="flex flex-col items-center">
        <div
          className={clsx(
            "w-9 h-9 rounded-full flex items-center justify-center text-base flex-shrink-0 border",
            activity.isHighlight
              ? "bg-[var(--color-accent-soft)] border-[var(--color-accent)]/40 text-[var(--color-accent)]"
              : "bg-[var(--color-surface-elevated)] border-[var(--color-border)]",
          )}
        >
          <span aria-hidden="true">{icon}</span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-1 bg-gradient-to-b from-[var(--color-border)] to-transparent min-h-4" />
        )}
      </div>

      {/* Fila compacta de la actividad — abre el detalle al hacer clic */}
      <button
        type="button"
        onClick={() => onSelect(activity)}
        className="pb-6 flex-1 min-w-0 text-left group"
      >
        <div className="flex items-start justify-between gap-2 mb-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono text-[var(--color-text-muted)]">{activity.time}</span>
            {activity.isHighlight && <Badge variant="accent">⭐ Destacado</Badge>}
            {activity.reservationRequired && <Badge variant="crimson">Reserva obligatoria</Badge>}
          </div>
          {activity.pricePerPerson !== undefined && activity.pricePerPerson > 0 && (
            <span className="text-xs text-[var(--color-accent)] font-medium flex-shrink-0">
              {formatEur(activity.pricePerPerson)}/pers.
            </span>
          )}
        </div>

        <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">
          {activity.title}
        </h4>

        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-1 mb-2">
          {activity.description}
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          {activity.durationMinutes && (
            <span className="text-xs text-[var(--color-text-muted)]">
              ⏱ {formatDuration(activity.durationMinutes)}
            </span>
          )}
          {activity.crowdLevel && (
            <span className="text-xs text-[var(--color-text-muted)]">
              👥 {getCrowdLevelLabel(activity.crowdLevel)}
            </span>
          )}
          <span className="text-xs text-[var(--color-accent)] ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
            Ver detalle →
          </span>
        </div>
      </button>
    </div>
  );
}

interface ActivityDetailModalProps {
  activity: TimelineActivity | null;
  destinationId: string | undefined;
  onClose: () => void;
}

function ActivityDetailModal({ activity, destinationId, onClose }: ActivityDetailModalProps) {
  const photos = activity ? getActivityPhotos(activity, destinationId) : [];

  return (
    <Modal isOpen={activity !== null} onClose={onClose}>
      {activity && (
        <div>
          {photos.length > 0 ? (
            <div className="relative">
              <PhotoCarousel key={activity.title} photos={photos} />
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-text-secondary)] flex items-center justify-center hover:text-[var(--color-accent)] transition-colors"
            >
              ✕
            </button>
          )}

          <div className="p-6 relative">
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className="text-xl" aria-hidden="true">
                {ACTIVITY_ICONS[activity.type] ?? "📍"}
              </span>
              <span className="text-xs font-mono text-[var(--color-text-muted)]">{activity.time}</span>
              {activity.isHighlight && <Badge variant="accent">⭐ Destacado</Badge>}
              {activity.reservationRequired && <Badge variant="crimson">Reserva obligatoria</Badge>}
            </div>

            <h3
              className="text-xl font-bold text-[var(--color-text-primary)] mb-3 pr-10"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {activity.title}
            </h3>

            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {activity.description}
            </p>

            <div className="flex items-center gap-4 flex-wrap mb-4">
              {activity.durationMinutes && (
                <span className="text-xs text-[var(--color-text-muted)]">
                  ⏱ {formatDuration(activity.durationMinutes)}
                </span>
              )}
              {activity.crowdLevel && (
                <span className="text-xs text-[var(--color-text-muted)]">
                  👥 {getCrowdLevelLabel(activity.crowdLevel)}
                </span>
              )}
              {activity.pricePerPerson !== undefined && activity.pricePerPerson > 0 && (
                <span className="text-xs text-[var(--color-accent)] font-medium">
                  {formatEur(activity.pricePerPerson)}/pers.
                </span>
              )}
            </div>

            {activity.context && (
              <div className="mb-4 p-3 bg-[var(--color-accent-soft)] rounded-lg border border-[var(--color-accent)]/20">
                <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-1">
                  💡 Por qué visitarlo
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{activity.context}</p>
              </div>
            )}

            {activity.weatherBackup && (
              <div className="p-3 bg-[var(--color-surface-elevated)] rounded-lg border border-[var(--color-border)]">
                <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-1">
                  🌧️ Plan alternativo por lluvia
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {activity.weatherBackup}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}

interface DayDetailProps {
  day: DayItinerary;
  onSelectActivity: (activity: TimelineActivity) => void;
}

function DayDetail({ day, onSelectActivity }: DayDetailProps) {
  return (
    <div className="flex-1 min-w-0">
      {/* Encabezado del día */}
      <div className="mb-6 pb-6 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <span className="text-2xl" aria-hidden="true">{day.countryCode === "CZ" ? "🇨🇿" : day.countryCode === "AT" ? "🇦🇹" : day.countryCode === "HU" ? "🇭🇺" : day.countryCode === "SI" ? "🇸🇮" : "🇮🇹"}</span>
          <Badge variant="accent">Día {day.dayNumber}</Badge>
          <Badge variant="default">
            {getFatigueLevelDot(day.fatigueLevel)} {getFatigueLevelLabel(day.fatigueLevel)}
          </Badge>
          {day.hasDriving && (
            <Badge variant="muted">
              🚗 {day.drivingLeg?.distanceKm} km
            </Badge>
          )}
        </div>
        <h3
          className="text-xl font-bold text-[var(--color-text-primary)] mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {day.title}
        </h3>
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{day.summary}</p>

        {/* Info de conducción */}
        {day.hasDriving && day.drivingLeg && (
          <div className="mt-4 p-3 bg-[var(--color-surface-elevated)] rounded-lg border border-[var(--color-border)]">
            <div className="flex items-center gap-2 mb-2">
              <span aria-hidden="true">🛣️</span>
              <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider">
                Etapa de conducción
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)]">
              <strong className="text-[var(--color-text-primary)]">{day.drivingLeg.from}</strong>
              {" → "}
              <strong className="text-[var(--color-text-primary)]">{day.drivingLeg.to}</strong>
            </p>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              {day.drivingLeg.distanceKm} km · {formatDuration(day.drivingLeg.driveTimeMinutes)}
            </p>
            {day.drivingLeg.notes && (
              <p className="text-xs text-[var(--color-text-muted)] mt-1 italic">{day.drivingLeg.notes}</p>
            )}
          </div>
        )}
      </div>

      {/* Timeline de actividades */}
      <div>
        {day.activities.map((activity, index) => (
          <ActivityItem
            key={`${activity.time}-${activity.title}`}
            activity={activity}
            isLast={index === day.activities.length - 1}
            onSelect={onSelectActivity}
          />
        ))}
      </div>

      {/* Alojamiento */}
      {day.hotel && (
        <div className="mt-4 p-3 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border)] flex items-center gap-3">
          <span className="text-xl" aria-hidden="true">🏨</span>
          <div>
            <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-0.5">Alojamiento</p>
            <p className="text-sm text-[var(--color-text-primary)]">{day.hotel}</p>
            {day.hotelPricePerRoom && (
              <p className="text-xs text-[var(--color-accent)]">~{formatEur(day.hotelPricePerRoom)}/hab./noche</p>
            )}
          </div>
        </div>
      )}

      {/* Consejos del día */}
      {day.tips && day.tips.length > 0 && (
        <div className="mt-4 p-3 bg-[var(--color-accent-soft)] rounded-lg border border-[var(--color-accent)]/20">
          <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
            💡 Consejos del día
          </p>
          <ul className="space-y-1">
            {day.tips.map((tip) => (
              <li key={tip} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-2">
                <span className="text-[var(--color-accent)] mt-0.5 flex-shrink-0" aria-hidden="true">·</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function DayByDay() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [activeActivity, setActiveActivity] = useState<TimelineActivity | null>(null);
  const currentDay = itinerary.find((day) => day.dayNumber === selectedDay) ?? itinerary[0];
  const destinationId = currentDay ? getDestinationIdForDay(currentDay.dayNumber) : undefined;

  return (
    <section id="itinerario" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Día a día
        </h2>
        <p className="text-[var(--color-text-secondary)]">
          14 días · Selecciona un día y toca una actividad para ver el detalle con fotos
        </p>
      </div>

      <div className="flex gap-6 lg:gap-10">
        {/* Selector de días — columna izquierda */}
        <aside className="hidden sm:flex flex-col gap-1 flex-shrink-0" style={{ minWidth: "120px" }}>
          {itinerary.map((day) => (
            <button
              key={day.dayNumber}
              type="button"
              onClick={() => setSelectedDay(day.dayNumber)}
              className={clsx(
                "text-left px-3 py-2 rounded-lg text-xs transition-all duration-200 border",
                selectedDay === day.dayNumber
                  ? "bg-[var(--color-accent-soft)] border-[var(--color-accent)]/40 text-[var(--color-accent)]"
                  : "border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-elevated)]",
              )}
            >
              <span className="font-bold">Día {day.dayNumber}</span>
              <span className="block truncate" style={{ maxWidth: "100px" }}>
                {day.location}
              </span>
            </button>
          ))}
        </aside>

        {/* Selector mobile: scroll horizontal de botones */}
        <div className="sm:hidden w-full">
          <div className="flex gap-2 overflow-x-auto pb-3 mb-4">
            {itinerary.map((day) => (
              <button
                key={day.dayNumber}
                type="button"
                onClick={() => setSelectedDay(day.dayNumber)}
                className={clsx(
                  "flex-shrink-0 px-3 py-2 rounded-lg text-xs border transition-all",
                  selectedDay === day.dayNumber
                    ? "bg-[var(--color-accent-soft)] border-[var(--color-accent)]/40 text-[var(--color-accent)]"
                    : "border-[var(--color-border)] text-[var(--color-text-muted)]",
                )}
              >
                Día {day.dayNumber}
              </button>
            ))}
          </div>
        </div>

        {/* Detalle del día seleccionado */}
        {currentDay && <DayDetail day={currentDay} onSelectActivity={setActiveActivity} />}
      </div>

      <ActivityDetailModal
        activity={activeActivity}
        destinationId={destinationId}
        onClose={() => setActiveActivity(null)}
      />
    </section>
  );
}
