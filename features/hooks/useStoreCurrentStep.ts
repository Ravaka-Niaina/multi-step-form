import {create} from "zustand";
import {persist} from "zustand/middleware";

interface CurrentStepStore {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export const useStoreCurrentStep = create<CurrentStepStore>()(
  persist(
    (set) => ({
      currentStep: 1,
      setCurrentStep: (newStep: number) => set({currentStep: newStep}),
    }),
    {
      name: "current-step",
    },
  ),
);