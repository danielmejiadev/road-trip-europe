import { destinations } from "@/lib/data/destinations";
import { getUnsplashUrl, getPrimaryPhoto } from "@/lib/data/photos";
import { Badge } from "@/components/ui/Badge";

export function PhotoJourney() {
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
          8 destinos · 5 países · Una ruta de ensueño por el corazón de Europa
        </p>
      </div>

      {/* Scroll horizontal de destinos */}
      <div className="overflow-x-auto scroll-x pb-4">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8" style={{ width: "max-content" }}>
          {destinations.map((destination, index) => {
            const primaryPhoto = getPrimaryPhoto(destination.id);
            const photoUrl = primaryPhoto
              ? getUnsplashUrl(primaryPhoto.unsplashId)
              : getUnsplashUrl("1541849546-216549ae216d");

            return (
              <article
                key={destination.id}
                className="relative w-64 h-96 rounded-2xl overflow-hidden flex-shrink-0 group cursor-pointer"
                style={{ minWidth: "256px" }}
              >
                {/* Foto de fondo */}
                <img
                  src={photoUrl}
                  alt={`${destination.name}, ${destination.country}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

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
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="accent">{destination.days}</Badge>
                    <Badge variant="default">
                      {destination.nights === 1
                        ? "1 noche"
                        : `${destination.nights} noches`}
                    </Badge>
                  </div>
                </div>

                {/* Separador de flecha entre destinos (excepto en el último) */}
                {index < destinations.length - 1 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] text-xs">
                    →
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
