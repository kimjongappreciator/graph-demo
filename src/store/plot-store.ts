
import { create } from "zustand";

interface PlotState {
  equation: string;
  setEquation: (eq: string) => void;
}

export const usePLotStore = create<PlotState>((set) => ({
  equation: "x^2",  
  setEquation: (eq: string) => set({ equation:eq }),  
}));
