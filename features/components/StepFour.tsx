import StepTemplate from "@/shared/components/layout/StepTemplate";
import Link from "next/link";

export interface IStepFour {
  setCurrentStep: (step: number) => void;
}

export default function StepFour({ setCurrentStep }: IStepFour) {
  const form = (
    <form id="step-four-form" className="font-ubuntu">
      <div className="bg-[#f8f9fe] p-3">
        <div className="grid grid-cols-[1fr_70px] grid-rows-2 pb-3 border-b border-purple-200 mb-3">
          <span className="col-start-1 col-end-2 row-start-1 row-end-2 text-blue-950 font-medium">
            Arcade (Monthly)
          </span>
          <span
            className="col-start-1 col-end-2 row-start-2 row-end-3 w-fit text-grey-500 underline decoration-2 cursor-pointer"
            onClick={(e) => e.preventDefault()}
          >
            Change
          </span>
          <span className="col-start-2 col-end-3 row-start-1 row-end-3 text-right text-blue-950 font-bold">
            $9/mo
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-grey-500">Online service</span>
            <span className="text-blue-950 font-medium">+$1/mo</span>
          </div>
          <div className="flex justify-between">
            <span className="text-grey-500">Large storage</span>
            <span className="text-blue-950 font-medium">+$2/mo</span>
          </div>
        </div>
      </div>
      <p className="flex justify-between pt-8 px-3">
        <span className="text-grey-500">Total (per month)</span>
        <span className="text-[#473eff] font-bold text-[20px]">+$12/mo</span>
      </p>
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
      nextLabel="Confirm"
      nextColor="#473eff"
    />
  );
}
