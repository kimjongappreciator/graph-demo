
import { create } from "zustand";

export const usePLotStore = create((set) => ({
  equation: "x^2",  
  setEquation: (equation: string) => set({ equation }),  
}));
