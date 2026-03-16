import {create} from "zustand";
import {persist} from "zustand/middleware";

interface StepThreeStore {
  chosenAddOns: string[];
  setChosenAddOns: (addOns: string[]) => void;
  reset: () => void;
}

export const useStepThreeStore = create<StepThreeStore>()(
  persist(
    (set): StepThreeStore => ({
      chosenAddOns: [],
      setChosenAddOns: (chosenAddOns: string[]) => set({chosenAddOns}),
      reset: () => set({chosenAddOns: []}),
    }), {name: "step-three"}
  ),
);