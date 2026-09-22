import type { BudgetSummary, Vignette } from "@/lib/types";

export const budgetSummary: BudgetSummary = {
  categories: [
    {
      category: "Alojamiento",
      icon: "🏨",
      unitLabel: "habitación/noche",
      unitCount: 13,
      unitCost: 160,
      total: 2080,
      notes: "2 habitaciones × €80 promedio/habitación × 13 noches",
    },
    {
      category: "Alquiler de coche",
      icon: "🚗",
      unitLabel: "días",
      unitCount: 10,
      unitCost: 60,
      total: 600,
      notes: "SUV compacto, recogida Prague Airport, entrega Mestre",
    },
    {
      category: "Combustible",
      icon: "⛽",
      unitLabel: "km totales",
      unitCount: 1805,
      unitCost: 0,
      total: 200,
      notes: "~7L/100km, €1.60/L, aproximadamente 1.805 km total",
    },
    {
      category: "Viñetas y peajes",
      icon: "🛣️",
      unitLabel: "países",
      unitCount: 4,
      unitCost: 0,
      total: 75,
      notes: "Austria €10.40 · Hungría ~€15 · Eslovenia €7.50 · Italia ~€30 peajes",
    },
    {
      category: "Comida y restaurantes",
      icon: "🍽️",
      unitLabel: "días",
      unitCount: 14,
      unitCost: 180,
      total: 2520,
      notes: "€45/persona/día × 4 personas × 14 días",
    },
    {
      category: "Teleféricos y entradas",
      icon: "🎡",
      unitLabel: "actividades",
      unitCount: 8,
      unitCost: 100,
      total: 800,
      notes: "€25/persona × ~8 actividades principales (Seceda, Széchenyi, etc.)",
    },
    {
      category: "Parking",
      icon: "🅿️",
      unitLabel: "días",
      unitCount: 10,
      unitCost: 10,
      total: 100,
      notes: "Estimado para ciudades y lugares con parking de pago",
    },
    {
      category: "Varios e imprevistos",
      icon: "💳",
      unitLabel: "",
      unitCount: 1,
      unitCost: 300,
      total: 300,
      notes: "Souvenirs, snacks, entradas menores, emergencias",
    },
  ],
  totalFourPeople: 6675,
  totalPerPerson: 1669,
  totalPerCouple: 3337,
};

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
    notes: "Comprar online en motorway.hu — se activa con la matrícula del coche",
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
