"use client";

import { clsx } from "clsx";
import { useEffect, useState } from "react";

interface NavSection {
  id: string;
  label: string;
  icon: string;
}

const navSections: NavSection[] = [
  { id: "hero", label: "Inicio", icon: "🏠" },
  { id: "itinerario", label: "Itinerario", icon: "📅" },
  { id: "mapa", label: "Mapa", icon: "🗺️" },
  { id: "carreteras", label: "Rutas", icon: "🛣️" },
  { id: "presupuesto", label: "Presupuesto", icon: "💶" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" },
    );

    navSections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2"
      aria-label="Navegación por secciones"
    >
      {navSections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-label={section.label}
          title={section.label}
          className={clsx(
            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 text-xs",
            activeSection === section.id
              ? "bg-[var(--color-accent)] text-[#0a0a0f] scale-110 shadow-lg shadow-[var(--color-accent)]/30"
              : "bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]",
          )}
        >
          <span aria-hidden="true">{section.icon}</span>
        </a>
      ))}
    </nav>
  );
}
