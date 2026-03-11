"use client";

import StepTemplate from "@/shared/components/layout/StepTemplate";
import useStepThree, { IStepThree } from "../actions/useStepThree";

export default function StepThree({ setCurrentStep }: IStepThree) {
  const { addOns, chosenAddOns, toggleAddOn, onSubmit, isMonthly } =
    useStepThree({
      setCurrentStep,
    });

  const form = (
    <form
      id="step-three-form"
      onSubmit={onSubmit}
      className="grid grid-cols-1 grid-rows-3 gap-2"
    >
      {addOns.map(({ name, description, monthlyPrice, yearlyPrice }) => {
        const isIncluded = chosenAddOns.includes(name);

        return (
          <label
            key={name}
            className={`hover:cursor-pointer border ${isIncluded ? "border-[#5e599b] bg-[#f8f9fe]" : "border-purple-200"} w-full focus:outline-none font-ubuntu grid grid-cols-[20px_1fr_55px] grid-rows-2 p-4 gap-x-3 text-left tracking-tighter rounded-sm`}
          >
            <div className="inline-flex items-center row-start-1 row-end-3 col-start-1 col-end-2">
              <label className="flex items-center cursor-pointer relative">
                <input
                  type="checkbox"
                  checked={isIncluded}
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#483bfc] checked:border-[#483bfc]"
                  id="check1"
                  onChange={() => toggleAddOn(name)}
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
            <h4 className="row-start-1 row-end-3 col-start-2 col-end-3 font-medium text-blue-950">
              {name}
            </h4>
            <span className="row-start-2 row-end-3 col-start-2 col-end-3 text-grey-500 text-sm">
              {description}
            </span>
            <span className="row-start-1 row-end-3 col-start-3 col-end-4 my-auto text-sm text-[#5b53a2]">
              {isMonthly ? monthlyPrice : yearlyPrice}
            </span>
          </label>
        );
      })}
    </form>
  );

  return (
    <StepTemplate
      setCurrentStep={setCurrentStep}
      title="Pick add-ons"
      stepNumber={3}
      paragraph="Add-ons help enhance your gaming experience."
      form={form}
      formId="step-three-form"
    />
  );
}
