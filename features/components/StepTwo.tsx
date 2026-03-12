"use client";

import StepTemplate from "@/shared/components/layout/StepTemplate";
import useStepTwo, { IStepTwo } from "../actions/useStepTwo";
import Error from "@/shared/components/ui/Error";

export default function StepTwo({ setCurrentStep }: IStepTwo) {
  const {
    plans,
    isMonthly,
    handleChangeMonthly,
    handleChoosePlan,
    chosenPlan,
    onSubmit,
    errorMessage,
  } = useStepTwo({
    setCurrentStep,
  });

  const form = (
    <form
      id="step-two-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4">
        {plans.map(({ name, monthlyPrice, yearlyPrice, monthsFree, icon }) => (
          <button
            className={`${chosenPlan === name ? "bg-[#f8f9fe] ring-1 ring-[#5e599b] " : ""} grid grid-cols-[40px_1fr] md:grid-cols-1 ${isMonthly ? "grid-rows-2 md:grid-rows-[75px_20px_20px]" : "grid-rows-3 md:grid-rows-[75px_20px_20px_20px]"} gap-y-0 md:gap-y-1 gap-x-4 p-4 rounded-sm text-left border border-purple-200 hover:border-[#5e599b] w-full focus:outline-none focus:ring-1 focus:ring-[#5e599b] font-ubuntu hover:cursor-pointer`}
            key={name}
            onClick={(e) => {
              e.preventDefault();
              handleChoosePlan(name);
            }}
          >
            <img
              className={`row-start-1 ${isMonthly ? "row-end-3" : "row-end-4"}  md:row-end-2 col-start-1 mx-auto md:mx-0`}
              src={icon}
              alt={name}
              width={40}
              height={40}
            />
            <h4 className="font-medium text-blue-950">{name}</h4>
            <p className="text-grey-500">
              {isMonthly ? monthlyPrice : yearlyPrice}
            </p>
            {!isMonthly && (
              <p className="text-blue-950 text-sm font-medium">{monthsFree}</p>
            )}
          </button>
        ))}
      </div>

      <div className="font-ubuntu font-medium flex justify-center gap-4 bg-[#f6f9fe] p-4 mt-4">
        <span className="text-blue-950">Monthly</span>

        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={handleChangeMonthly}
            defaultChecked={!isMonthly}
          />

          <div
            className="group w-9 h-5 bg-blue-950 rounded-full peer
           relative transition"
          >
            <div
              className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full
             transition group-peer-checked:translate-x-4"
            ></div>
          </div>
        </label>

        <span className="text-grey-500">Yearly</span>
      </div>
      {errorMessage && <Error message={errorMessage} />}
    </form>
  );

  return (
    <StepTemplate
      setCurrentStep={setCurrentStep}
      title="Select your plan"
      stepNumber={2}
      paragraph="You have the option of monthly or yearly billing."
      form={form}
      formId="step-two-form"
    />
  );
}
