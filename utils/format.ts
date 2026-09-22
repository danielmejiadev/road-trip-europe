import type { FatigueLevel } from "@/lib/types";

export function formatEur(amount: number): string {
  return `€${amount.toLocaleString("es-ES")}`;
}

export function formatKm(km: number): string {
  return `${km.toLocaleString("es-ES")} km`;
}

export function formatDriveTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;

  if (remaining === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${remaining}m`;
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;

  if (remaining === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${remaining}m`;
}

export function getFatigueLevelLabel(level: FatigueLevel): string {
  const labels: Record<FatigueLevel, string> = {
    relaxed: "Relajado",
    moderate: "Moderado",
    active: "Activo",
    demanding: "Exigente",
  };

  return labels[level];
}

export function getFatigueLevelColor(level: FatigueLevel): string {
  const colors: Record<FatigueLevel, string> = {
    relaxed: "#4ecdc4",
    moderate: "#e8b86d",
    active: "#ff9a3c",
    demanding: "#ff6b6b",
  };

  return colors[level];
}

export function getFatigueLevelDot(level: FatigueLevel): string {
  const dots: Record<FatigueLevel, string> = {
    relaxed: "🟢",
    moderate: "🟡",
    active: "🟠",
    demanding: "🔴",
  };

  return dots[level];
}

export function getCrowdLevelLabel(level: "low" | "moderate" | "high"): string {
  const labels = {
    low: "Poca gente",
    moderate: "Moderado",
    high: "Muy concurrido",
  };

  return labels[level];
}
