"use client";

import Footer from "./Footer";
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
    <div className="bg-[#eef5ff] md:w-screen md:h-screen md:flex md:justify-center md:items-center">
      <div className="bg-[#eef5ff] grid grid-rows-[170px_1fr_70px] md:grid-rows-1 grid-cols-1 md:grid-cols-[274px_1fr] md:bg-white md:w-full md:max-w-[940px] md:h-[570px] md:p-4 md:rounded-xl box-content">
        <Header currentStep={currentStep} setCurrentStep={setCurrentStep} />
        <Main title={title} paragraph={paragraph} form={form} />
        <Footer
          goBack={goBack}
          formId={formId}
          currentStep={currentStep}
          nextColor={nextColor}
          nextLabel={nextLabel}
        />
      </div>
    </div>
  );
}
