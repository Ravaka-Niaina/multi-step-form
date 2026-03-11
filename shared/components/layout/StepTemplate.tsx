"use client";

import Footer from "./Footer";
import GlobalTemplate from "./GlobalTemplate";
import Header from "./Header";
import Main from "./Main";

interface IStepOne {
  setCurrentStep: (step: number) => void;
  title: string;
  stepNumber: number;
  paragraph: string;
  form: React.ReactNode;
  formId: string;
  nextLabel?: string;
  nextColor?: string;
}

export default function StepTemplate({
  setCurrentStep,
  title,
  stepNumber,
  paragraph,
  form,
  formId,
  nextLabel,
  nextColor,
}: IStepOne) {
  const currentStep = stepNumber;

  const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <GlobalTemplate currentStep={currentStep} setCurrentStep={setCurrentStep}>
      <Main title={title} paragraph={paragraph} form={form} />
      <Footer
        goBack={goBack}
        formId={formId}
        currentStep={currentStep}
        nextColor={nextColor}
        nextLabel={nextLabel}
      />
    </GlobalTemplate>
  );
}
