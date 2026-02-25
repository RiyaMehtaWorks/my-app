import { create } from "zustand";

type BookingState = {
  destination: string;
  dates: string;
  passengers: number;
  currentStep: "search" | "flights" | "payment";

  setDestination: (d: string) => void;
  setDates: (d: string) => void;
  addPassenger: () => void;
  nextStep: () => void;
  resetBooking: () => void;
};

export const useBookingStore = create<BookingState>((set) => ({
  destination: "",
  dates: "",
  passengers: 1,
  currentStep: "search",

  setDestination: (d) => set({ destination: d }),
  setDates: (d) => set({ dates: d }),

  addPassenger: () =>
    set((state) => ({
      passengers: state.passengers + 1,
    })),

  nextStep: () =>
    set((state) => ({
      currentStep:
        state.currentStep === "search"
          ? "flights"
          : state.currentStep === "flights"
            ? "payment"
            : "payment",
    })),

  resetBooking: () =>
    set({
      destination: "",
      dates: "",
      passengers: 1,
      currentStep: "search",
    }),
}));
