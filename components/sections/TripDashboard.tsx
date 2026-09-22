import { Card } from "@/components/ui/Card";

interface StatTile {
  icon: string;
  value: string;
  label: string;
  sublabel?: string;
}

const statTiles: StatTile[] = [
  { icon: "👥", value: "4", label: "Viajeros", sublabel: "2 parejas" },
  { icon: "🌍", value: "5", label: "Países", sublabel: "CZ · AT · HU · SI · IT" },
  { icon: "🚗", value: "1.805 km", label: "En carretera", sublabel: "~22h de conducción" },
  { icon: "🏨", value: "13", label: "Noches", sublabel: "8 destinos" },
  { icon: "📅", value: "14", label: "Días", sublabel: "1-14 septiembre 2027" },
  { icon: "💶", value: "~€1.669", label: "Por persona", sublabel: "~€3.337 por pareja" },
];

export function TripDashboard() {
  return (
    <section id="dashboard" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          El viaje en números
        </h2>
        <p className="text-[var(--color-text-secondary)] text-lg">
          De Praga a Venecia · Septiembre 2027
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {statTiles.map((stat) => (
          <Card
            key={stat.label}
            elevated
            className="p-5 text-center flex flex-col items-center gap-2 hover:border-[var(--color-accent)]/30 transition-colors"
          >
            <span className="text-3xl" aria-hidden="true">
              {stat.icon}
            </span>
            <span className="text-xl sm:text-2xl font-bold text-[var(--color-accent)]">{stat.value}</span>
            <span className="text-sm font-medium text-[var(--color-text-primary)]">{stat.label}</span>
            {stat.sublabel && (
              <span className="text-xs text-[var(--color-text-muted)]">{stat.sublabel}</span>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
