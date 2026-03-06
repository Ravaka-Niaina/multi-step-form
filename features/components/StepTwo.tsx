import StepTemplate from "@/shared/components/layout/StepTemplate";

interface IStepTwo {
  setCurrentStep: (step: number) => void;
}

export default function StepTwo({ setCurrentStep }: IStepTwo) {
  const form = <p>Content goes here</p>;

  return (
    <StepTemplate
      setCurrentStep={setCurrentStep}
      title="Select your plan"
      stepNumber={2}
      paragraph="You have the option of monthly or yearly billing."
      form={form}
    />
  );
}
