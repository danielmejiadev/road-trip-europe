export function parseTripDate(dateString: string): Date {
  return new Date(`${dateString}T00:00:00`);
}

export function formatTripDate(dateString: string): string {
  const date = parseTripDate(dateString);
  return date.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatShortDate(dateString: string): string {
  const date = parseTripDate(dateString);
  return date.toLocaleDateString("es-ES", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export function getDayLabel(dayNumber: number): string {
  return `Día ${dayNumber}`;
}

export function getTripDurationLabel(startDay: number, endDay: number): string {
  if (startDay === endDay) {
    return getDayLabel(startDay);
  }

  return `Días ${startDay}-${endDay}`;
}
