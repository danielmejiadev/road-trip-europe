"use client";

import { clsx } from "clsx";
import { useState } from "react";
import { getUnsplashUrl } from "@/lib/data/photos";
import type { TripPhoto } from "@/lib/types";

interface PhotoCarouselProps {
  photos: TripPhoto[];
  heightClassName?: string;
}

export function PhotoCarousel({ photos, heightClassName = "h-72 sm:h-[28rem]" }: PhotoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhoto = photos[activeIndex];

  function goToPrevious() {
    setActiveIndex((index) => (index === 0 ? photos.length - 1 : index - 1));
  }

  function goToNext() {
    setActiveIndex((index) => (index === photos.length - 1 ? 0 : index + 1));
  }

  if (!activePhoto) {
    return null;
  }

  return (
    <div className={clsx("relative overflow-hidden rounded-t-2xl bg-[var(--color-surface-elevated)]", heightClassName)}>
      <img
        key={activePhoto.id}
        src={getUnsplashUrl(activePhoto.unsplashId)}
        alt={activePhoto.caption}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-black/10" />

      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors text-lg"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Foto siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors text-lg"
          >
            ›
          </button>
          <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center gap-1.5">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver foto ${index + 1} de ${photos.length}`}
                className={clsx(
                  "h-1.5 rounded-full transition-all",
                  index === activeIndex ? "w-6 bg-[var(--color-accent)]" : "w-1.5 bg-white/50 hover:bg-white/70",
                )}
              />
            ))}
          </div>
        </>
      )}

      <p
        className="absolute bottom-3 left-4 right-16 text-xs text-white/90"
        style={{ textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}
      >
        {activePhoto.caption}
      </p>
    </div>
  );
}
