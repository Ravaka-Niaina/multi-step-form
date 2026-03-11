import StepTemplate from "@/shared/components/layout/StepTemplate";
import useStepFour from "../actions/useStepFour";

export interface IStepFour {
  setCurrentStep: (step: number) => void;
}

export default function StepFour({ setCurrentStep }: IStepFour) {
  const { chosenPlan, isMonthly, planPrice, addOnsDetails, totalPrice } =
    useStepFour();

  const form = (
    <form id="step-four-form" className="font-ubuntu">
      <div className="bg-[#f8f9fe] p-3">
        <div className="grid grid-cols-[1fr_70px] grid-rows-2 pb-3 border-b border-purple-200 mb-3">
          <span className="col-start-1 col-end-2 row-start-1 row-end-2 text-blue-950 font-medium">
            {chosenPlan} ({isMonthly ? "Monthly" : "Yearly"})
          </span>
          <span
            className="col-start-1 col-end-2 row-start-2 row-end-3 w-fit text-grey-500 underline decoration-2 cursor-pointer"
            onClick={(e) => e.preventDefault()}
          >
            Change
          </span>
          <span className="col-start-2 col-end-3 row-start-1 row-end-3 text-right text-blue-950 font-bold">
            {planPrice}
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {addOnsDetails.map(({ name, price }) => (
            <div key={name} className="flex justify-between">
              <span className="text-grey-500">{name}</span>
              <span className="text-blue-950 font-medium">{price}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="flex justify-between pt-8 px-3">
        <span className="text-grey-500">
          Total (per {isMonthly ? "month" : "year"})
        </span>
        <span className="text-[#473eff] font-bold text-[20px]">
          {totalPrice}
        </span>
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
