"use client";

import { clsx } from "clsx";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 60);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 text-[var(--color-text-primary)] no-underline group"
          aria-label="Ir al inicio"
        >
          <span className="text-[var(--color-accent)] text-xl">🚗</span>
          <span className="font-semibold text-sm tracking-wide group-hover:text-[var(--color-accent)] transition-colors">
            De Praga a Venecia
          </span>
        </a>

        <nav aria-label="Navegación principal">
          <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
            {[
              { href: "#itinerario", label: "Itinerario" },
              { href: "#mapa", label: "Mapa" },
              { href: "#presupuesto", label: "Presupuesto" },
            ].map((navItem) => (
              <li key={navItem.href}>
                <a
                  href={navItem.href}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {navItem.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-xs text-[var(--color-text-muted)] hidden sm:block">
          Sept 2027 · 4 viajeros
        </div>
      </div>
    </header>
  );
}
