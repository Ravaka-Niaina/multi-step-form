"use client";

import { useStoreCurrentStep } from "@/features/actions/useStoreCurrentStep";
import StepFour from "@/features/components/StepFour";
import StepOne from "@/features/components/StepOne";
import StepThree from "@/features/components/StepThree";
import StepTwo from "@/features/components/StepTwo";

export default function MultiStepForm() {
  const { currentStep, setCurrentStep } = useStoreCurrentStep();

  if (currentStep === 1) {
    return <StepOne setCurrentStep={setCurrentStep} />;
  } else if (currentStep === 2) {
    return <StepTwo setCurrentStep={setCurrentStep} />;
  } else if (currentStep === 3) {
    return <StepThree setCurrentStep={setCurrentStep} />;
  } else if (currentStep === 4) {
    return <StepFour setCurrentStep={setCurrentStep} />;
  }
  return <p>404 not found</p>;
}
