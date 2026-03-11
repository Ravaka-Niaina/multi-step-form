import StepTemplate from "@/shared/components/layout/StepTemplate";

export interface IThanks {
  setCurrentStep: (step: number) => void;
}

export default function Thanks({ setCurrentStep }: IThanks) {
  const form = <p>Dummy thanks</p>;

  return (
    <StepTemplate
      setCurrentStep={setCurrentStep}
      title="Finishing up"
      stepNumber={4}
      paragraph="Double-check everything looks OK before confirming."
      form={form}
      formId={""}
      hideFooter
    />
  );
}
