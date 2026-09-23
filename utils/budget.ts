import type { BudgetCategory, BudgetSummary, DayCostSummary, DayItinerary } from "@/lib/types";

const TRAVELERS_COUNT = 4;
const ROOMS_COUNT = 2;
const SAFETY_MARGIN_RATE = 0.1;

// Always pad the estimate with a safety margin for price changes, exchange-rate
// swings, and anything not itemized in the categories below.
export function getBudgetSummary(categories: BudgetCategory[]): BudgetSummary {
  const subtotalFourPeople = categories.reduce((sum, category) => sum + category.total, 0);
  const safetyMarginAmount = Math.round(subtotalFourPeople * SAFETY_MARGIN_RATE);
  const totalFourPeople = subtotalFourPeople + safetyMarginAmount;

  return {
    categories,
    subtotalFourPeople,
    safetyMarginAmount,
    totalFourPeople,
    totalPerPerson: Math.round(totalFourPeople / TRAVELERS_COUNT),
    totalPerCouple: Math.round(totalFourPeople / 2),
  };
}

// Per-day breakdown (dinner, lodging, day total) computed straight from the
// itinerary's own priced activities and hotel fields — not the flat whole-trip
// category averages above, so the two views can legitimately differ.
export function getDayCostSummaries(itinerary: DayItinerary[]): DayCostSummary[] {
  return itinerary.map((day) => {
    const diningActivities = day.activities.filter((activity) => activity.type === "dining");
    const dinnerActivity =
      [...diningActivities].reverse().find((activity) => activity.title.startsWith("Cena")) ??
      diningActivities[diningActivities.length - 1];

    const activitiesTotal = day.activities.reduce(
      (sum, activity) => sum + (activity.pricePerPerson ?? 0) * TRAVELERS_COUNT,
      0,
    );
    const hotelTotal = day.hotelPricePerRoom ? day.hotelPricePerRoom * ROOMS_COUNT : 0;

    return {
      dayNumber: day.dayNumber,
      location: day.location,
      diningLabel: dinnerActivity?.title,
      diningTotal: dinnerActivity?.pricePerPerson ? dinnerActivity.pricePerPerson * TRAVELERS_COUNT : undefined,
      hotel: day.hotel,
      hotelTotal: day.hotelPricePerRoom ? hotelTotal : undefined,
      dayTotal: activitiesTotal + hotelTotal,
    };
  });
}
