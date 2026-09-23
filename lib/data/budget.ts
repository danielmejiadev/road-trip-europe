import type { BudgetCategory, Vignette } from "@/lib/types";

// Alojamiento: suma real de (2 habitaciones × precio/habitación de esa noche) para las 14 noches
// del itinerario (hotels.ts / el campo hotelPricePerRoom de cada día), no un promedio plano.
// Praga 3n×€90 + Český Krumlov 1n×€85 + Austria 2n×€80 + Budapest 3n×€100 + Bled 2n×€90 +
// Bovec 1n×€80 + Val Gardena 1n×€110 + Venecia 1n×€130 = €1.315 por habitación → ×2 habitaciones.
const ACCOMMODATION_TOTAL = (3 * 90 + 1 * 85 + 2 * 80 + 3 * 100 + 2 * 90 + 1 * 80 + 1 * 110 + 1 * 130) * 2;

// Alquiler de carro: se recoge el día 4 ("Recogida del carro") y se entrega el día 14
// ("Devolución del carro en Mestre") → 11 días de alquiler, no 10.
const CAR_RENTAL_DAYS = 11;
const CAR_RENTAL_DAILY_RATE = 60;

// Viñetas y peajes: suma real de los costos listados en `vignettes` más abajo
// (Austria €10.40 + Hungría ~€15 + Eslovenia €7.50 + peajes de Italia ~€30).
const VIGNETTES_TOTAL = 10.4 + 15 + 7.5 + 30;

export const budgetCategories: BudgetCategory[] = [
  {
    category: "Alojamiento",
    icon: "🏨",
    unitLabel: "noches",
    unitCount: 14,
    unitCost: Math.round(ACCOMMODATION_TOTAL / 14),
    total: ACCOMMODATION_TOTAL,
    notes: "2 habitaciones × precio real por noche de cada destino × 14 noches (Praga a Venecia)",
  },
  {
    category: "Alquiler de carro",
    icon: "🚗",
    unitLabel: "días",
    unitCount: CAR_RENTAL_DAYS,
    unitCost: CAR_RENTAL_DAILY_RATE,
    total: CAR_RENTAL_DAYS * CAR_RENTAL_DAILY_RATE,
    notes: "SUV compacto · recogida día 4 en Praga, entrega día 14 en Mestre (11 días)",
  },
  {
    category: "Combustible",
    icon: "⛽",
    unitLabel: "km totales",
    unitCount: 1805,
    unitCost: 0,
    total: Math.round((1805 / 100) * 7 * 1.6),
    notes: "~7L/100km, €1.60/L, ~1.805 km total",
  },
  {
    category: "Viñetas y peajes",
    icon: "🛣️",
    unitLabel: "países",
    unitCount: 4,
    unitCost: 0,
    total: Math.round(VIGNETTES_TOTAL),
    notes: "Austria €10.40 · Hungría ~€15 · Eslovenia €7.50 · Italia ~€30 peajes",
  },
  {
    category: "Comida y restaurantes",
    icon: "🍽️",
    unitLabel: "días",
    unitCount: 14,
    unitCost: 180,
    total: 14 * 180,
    notes: "€45/persona/día × 4 personas × 14 días",
  },
  {
    category: "Teleféricos y entradas",
    icon: "🎡",
    unitLabel: "actividades",
    unitCount: 8,
    unitCost: 100,
    total: 8 * 100,
    notes: "€25/persona × ~8 actividades principales (Seceda, Széchenyi, etc.)",
  },
  {
    category: "Parking",
    icon: "🅿️",
    unitLabel: "días",
    unitCount: 10,
    unitCost: 10,
    total: 10 * 10,
    notes: "Estimado para ciudades y lugares con parking de pago",
  },
  {
    category: "Varios e imprevistos",
    icon: "💳",
    unitLabel: "",
    unitCount: 1,
    unitCost: 300,
    total: 300,
    notes: "Souvenirs, snacks, entradas menores, emergencias del día a día",
  },
];

export const vignettes: Vignette[] = [
  {
    country: "República Checa",
    required: false,
    notes: "No se necesita viñeta para la ruta propuesta (menos de 50 km de autopista desde Praga)",
  },
  {
    country: "Austria",
    required: true,
    cost: "€10.40 / 10 días",
    notes: "Comprar en la frontera o en línea en asfinag.at antes de entrar",
  },
  {
    country: "Hungría",
    required: true,
    cost: "~€15 / 10 días",
    notes: "Comprar online en motorway.hu — se activa con la matrícula del carro",
  },
  {
    country: "Eslovenia",
    required: true,
    cost: "€7.50 / 1 semana",
    notes: "Comprar en la frontera o estaciones de servicio — viñeta adhesiva o e-vignette",
  },
  {
    country: "Italia",
    required: false,
    cost: "~€20-30 peajes",
    notes: "Italia cobra peaje por distancia, no viñeta. Llevar efectivo o tarjeta sin comisión",
  },
];

export const drivingLegs = [
  { from: "Praga", to: "Český Krumlov", distanceKm: 185, driveTime: "2h 30m" },
  { from: "Český Krumlov", to: "Gosau", distanceKm: 200, driveTime: "2h 30m" },
  { from: "Gosau", to: "Budapest", distanceKm: 380, driveTime: "4h 00m" },
  { from: "Budapest", to: "Bled", distanceKm: 540, driveTime: "5h 30m" },
  { from: "Bled", to: "Bovec (vía Vršič)", distanceKm: 90, driveTime: "2h 30m" },
  { from: "Bovec", to: "Val Gardena", distanceKm: 200, driveTime: "3h 00m" },
  { from: "Val Gardena", to: "Mestre/Venecia", distanceKm: 210, driveTime: "2h 30m" },
] as const;
