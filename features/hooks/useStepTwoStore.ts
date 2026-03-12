import {create} from "zustand";
import {persist} from "zustand/middleware";

interface StepTwoStore {
  isMonthly: boolean;
  chosenPlan: string;
  setIsMonthly: (isMonthly: boolean) => void;
  setChosenPlan: (chosenPlan: string) => void;
}

export const useStepTwoStore = create<StepTwoStore>()(
  persist(
    (set) => ({
      isMonthly: true,
      chosenPlan: "",
      setIsMonthly: (isMonthly: boolean) => set({isMonthly}),
      setChosenPlan: (chosenPlan: string) => set({chosenPlan}),
    }), {name: "step-two"}
  ),
);