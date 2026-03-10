import StepTemplate from "@/shared/components/layout/StepTemplate";

export interface IStepFour {
  setCurrentStep: (step: number) => void;
}

export default function StepFour({ setCurrentStep }: IStepFour) {
  const form = (
    <form id="step-four-form">
      <p>Dummy content</p>
    </form>
  );

  return (
    <StepTemplate
      setCurrentStep={setCurrentStep}
      title="Finishing up"
      stepNumber={4}
      paragraph="Double-check everything looks OK before confirming."
      form={form}
      formId="step-four-form"
    />
  );
}
