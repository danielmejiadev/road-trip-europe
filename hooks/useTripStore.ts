import { create } from "zustand";

interface TripStore {
  selectedDay: number;
  setSelectedDay: (day: number) => void;
  isMapReady: boolean;
  setIsMapReady: (ready: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useTripStore = create<TripStore>((set) => ({
  selectedDay: 1,
  setSelectedDay: (day: number) => set({ selectedDay: day }),
  isMapReady: false,
  setIsMapReady: (ready: boolean) => set({ isMapReady: ready }),
  activeSection: "",
  setActiveSection: (section: string) => set({ activeSection: section }),
}));
