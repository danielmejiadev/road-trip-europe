import type { Trip, BudgetCategory } from "@/lib/types";
import { getBudgetSummary } from "@/utils/budget";
import { formatEur } from "@/utils/format";

function findCategory(categories: BudgetCategory[], keyword: string): BudgetCategory | undefined {
  const normalized = keyword.toLowerCase();
  return categories.find((category) => category.category.toLowerCase().includes(normalized));
}

function hasTag(trip: Trip, key: string): boolean {
  return trip.meta.tags.some((tag) => tag.key === key);
}

// Driving-intensity bucket describes THIS trip's own pace — never a
// comparison against the other trips in the explorer.
function drivingIntensity(hours: number): string {
  if (hours <= 15) return "Baja (pocas horas al volante en total)";
  if (hours <= 25) return "Moderada (un ritmo cómodo de conducción)";
  return "Alta (varios días largos al volante)";
}

export interface ComparisonRow {
  label: string;
  explanation?: string;
  values: (trip: Trip) => string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Países", values: (trip) => trip.meta.countries.join(", ") },
  { label: "Ciudad de inicio", values: (trip) => trip.meta.startCity },
  { label: "Ciudad final", values: (trip) => trip.meta.endCity },
  { label: "Días", values: (trip) => String(trip.meta.days) },
  { label: "Noches", values: (trip) => String(trip.meta.nights) },
  { label: "Distancia aprox.", values: (trip) => `~${trip.meta.approxDistanceKm.toLocaleString("es-ES")} km` },
  { label: "Horas de conducción aprox.", values: (trip) => `~${trip.meta.approxDrivingHours}h` },
  { label: "Bases de alojamiento", values: (trip) => String(trip.destinations.length) },
  {
    label: "Costo de hoteles aprox.",
    values: (trip) => formatEur(findCategory(trip.budgetCategories, "aloj")?.total ?? 0),
  },
  {
    label: "Costo de comida aprox.",
    values: (trip) => formatEur(findCategory(trip.budgetCategories, "comid")?.total ?? 0),
  },
  {
    label: "Costo de carro aprox.",
    values: (trip) => formatEur(findCategory(trip.budgetCategories, "carro")?.total ?? findCategory(trip.budgetCategories, "alquiler")?.total ?? 0),
  },
  {
    label: "Combustible aprox.",
    values: (trip) => formatEur(findCategory(trip.budgetCategories, "combust")?.total ?? 0),
  },
  {
    label: "Peajes/viñetas aprox.",
    values: (trip) => formatEur(findCategory(trip.budgetCategories, "viñeta")?.total ?? findCategory(trip.budgetCategories, "peaje")?.total ?? 0),
  },
  {
    label: "Actividades aprox.",
    values: (trip) =>
      formatEur(
        findCategory(trip.budgetCategories, "activ")?.total ??
          findCategory(trip.budgetCategories, "entrada")?.total ??
          findCategory(trip.budgetCategories, "teleférico")?.total ??
          0,
      ),
  },
  {
    label: "Total estimado (4 personas)",
    values: (trip) => formatEur(getBudgetSummary(trip.budgetCategories).totalFourPeople),
  },
  {
    label: "Costo por persona",
    values: (trip) => formatEur(getBudgetSummary(trip.budgetCategories).totalPerPerson),
  },
  {
    label: "Paisaje",
    explanation: "Alta = montañas, costa o carreteras panorámicas son el centro del viaje",
    values: (trip) =>
      hasTag(trip, "mountains") || hasTag(trip, "coast") || hasTag(trip, "scenic-driving") ? "Alta" : "Moderada",
  },
  { label: "Pueblos medievales", values: (trip) => (hasTag(trip, "medieval") ? "Sí" : "No") },
  { label: "Montañas", values: (trip) => (hasTag(trip, "mountains") ? "Sí" : "No") },
  { label: "Playas / costa", values: (trip) => (hasTag(trip, "coast") || hasTag(trip, "beaches") ? "Sí" : "No") },
  { label: "Historia", values: (trip) => (hasTag(trip, "history") ? "Sí" : "No") },
  { label: "Comida y vino", values: (trip) => (hasTag(trip, "food-wine") ? "Sí" : "No") },
  {
    label: "Oportunidades fotográficas",
    explanation: "Alta = la fotografía es explícitamente parte del atractivo del viaje",
    values: (trip) => (hasTag(trip, "photography") ? "Alta" : "Moderada"),
  },
  {
    label: "Intensidad de conducción",
    explanation: "Describe el ritmo propio de CADA viaje, no una comparación entre ellos",
    values: (trip) => drivingIntensity(trip.meta.approxDrivingHours),
  },
  { label: "Temporada considerada", values: (trip) => trip.meta.season },
];
