"use client";

import { useStoreCurrentStep } from "@/features/actions/useStoreCurrentStep";
import StepOne from "@/features/components/StepOne";
import StepTwo from "@/features/components/StepTwo";

export default function MultiStepForm() {
  const { currentStep, setCurrentStep } = useStoreCurrentStep();

  if (currentStep === 1) {
    return <StepOne setCurrentStep={setCurrentStep} />;
  } else if (currentStep === 2) {
    return <StepTwo setCurrentStep={setCurrentStep} />;
  }
  return <p>Dummy</p>;
}
