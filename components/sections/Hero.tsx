"use client";

import { useTrip } from "@/lib/trip-context";
import { getUnsplashUrl } from "@/lib/data/photos";

export function Hero() {
  const trip = useTrip();
  const heroPhoto = trip.photos.find((photo) => photo.id === trip.meta.heroPhotoId) ?? trip.photos[0];
  const heroPhotoUrl = heroPhoto ? getUnsplashUrl(heroPhoto.unsplashId) : undefined;
  const couples = Math.round(trip.meta.travelers / 2);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Fondo cinematic con la foto hero del viaje */}
      <div className="absolute inset-0">
        {heroPhotoUrl && (
          <img
            src={heroPhotoUrl}
            alt={heroPhoto?.caption ?? trip.meta.title}
            loading="eager"
            className="w-full h-full object-cover"
          />
        )}
        <div className="photo-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-[var(--color-bg)]/20" />
      </div>

      {/* Contenido principal del hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 pt-24 sm:pt-32">
        <div className="max-w-3xl">
          <p className="text-[var(--color-accent)] text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
            Road Trip · {trip.meta.season}
          </p>
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold italic mb-4 sm:mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gold-gradient">De {trip.meta.startCity}</span>
            <br />
            <span className="text-[var(--color-text-primary)]">a {trip.meta.endCity}</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-[var(--color-text-secondary)] mb-6 sm:mb-8 leading-relaxed">
            {trip.meta.days} días por Europa · {trip.meta.countries.length}{" "}
            {trip.meta.countries.length === 1 ? "país" : "países"} · ~{trip.meta.approxDistanceKm.toLocaleString("es-ES")} km
            <br />
            <span className="text-[var(--color-text-muted)] text-sm sm:text-lg">
              {trip.meta.travelers} viajeros · {couples} parejas
            </span>
          </p>

          {/* Ruta de destinos */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 mb-8 sm:mb-10">
            {trip.destinations.map((destination, index) => (
              <span key={destination.id} className="flex items-center gap-1">
                <span className="text-[var(--color-text-secondary)] text-sm">
                  {destination.countryFlag} {destination.name}
                </span>
                {index < trip.destinations.length - 1 && (
                  <span className="text-[var(--color-text-muted)] text-xs ml-1">→</span>
                )}
              </span>
            ))}
          </div>

          <a
            href="#itinerario"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[#0a0a0f] px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all"
          >
            Ver itinerario completo
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--color-text-muted)] to-transparent" />
      </div>
    </section>
  );
}
