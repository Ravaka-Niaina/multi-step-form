import {create} from "zustand";
import {persist} from "zustand/middleware";

interface StepThreeStore {
  chosenAddOns: string[];
  setChosenAddOns: (addOns: string[]) => void;
}

export const useStepThreeStore = create<StepThreeStore>()(
  persist(
    (set) => ({
      chosenAddOns: [],
      setChosenAddOns: (chosenAddOns: string[]) => set({chosenAddOns}),
    }), {name: "step-three"}
  ),
);