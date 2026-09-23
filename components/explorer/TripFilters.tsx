"use client";

import { clsx } from "clsx";
import { ALL_TRIP_TAGS } from "@/lib/data/trip-tags";
import type { TripTagKey } from "@/lib/types";

interface TripFiltersProps {
  selectedTags: TripTagKey[];
  onToggleTag: (tag: TripTagKey) => void;
  onClear: () => void;
}

export function TripFilters({ selectedTags, onToggleTag, onClear }: TripFiltersProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
          ¿Qué tipo de viaje buscas?
        </h3>
        {selectedTags.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            Limpiar filtros
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {ALL_TRIP_TAGS.map((tag) => {
          const isSelected = selectedTags.includes(tag.key);
          return (
            <button
              key={tag.key}
              type="button"
              onClick={() => onToggleTag(tag.key)}
              aria-pressed={isSelected}
              className={clsx(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all",
                isSelected
                  ? "bg-[var(--color-accent-soft)] border-[var(--color-accent)]/50 text-[var(--color-accent)]"
                  : "bg-[var(--color-surface-elevated)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/30",
              )}
            >
              <span aria-hidden="true">{tag.emoji}</span>
              {tag.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
