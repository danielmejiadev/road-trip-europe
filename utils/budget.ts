import type { BudgetCategory, BudgetSummary, DayCostLineItem, DayCostSummary, DayItinerary } from "@/lib/types";

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

// Per-day breakdown computed straight from the itinerary's own priced
// activities (breakfast, lunch, dinner, entrance fees — every one of them,
// not just dinner) and hotel fields — not the flat whole-trip category
// averages above, so the two views can legitimately differ. The day total is
// always the exact sum of the line items shown, nothing hidden.
export function getDayCostSummaries(itinerary: DayItinerary[]): DayCostSummary[] {
  return itinerary.map((day) => {
    const items: DayCostLineItem[] = [];

    for (const activity of day.activities) {
      if (activity.pricePerPerson && activity.pricePerPerson > 0) {
        items.push({
          label: activity.title,
          icon: activity.type === "dining" ? "🍽️" : "🎟️",
          unitLabel: "persona",
          unitPrice: activity.pricePerPerson,
          units: TRAVELERS_COUNT,
          total: activity.pricePerPerson * TRAVELERS_COUNT,
        });
      }
    }

    if (day.hotel && day.hotelPricePerRoom) {
      items.push({
        label: day.hotel,
        icon: "🏨",
        unitLabel: "habitación",
        unitPrice: day.hotelPricePerRoom,
        units: ROOMS_COUNT,
        total: day.hotelPricePerRoom * ROOMS_COUNT,
      });
    }

    const dayTotal = items.reduce((sum, item) => sum + item.total, 0);

    return {
      dayNumber: day.dayNumber,
      location: day.location,
      items,
      dayTotal,
    };
  });
}
