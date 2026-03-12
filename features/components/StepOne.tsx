"use client";

import Error from "@/shared/components/ui/Error";
import StepTemplate from "@/shared/components/layout/StepTemplate";
import { useStepOne } from "../hooks/useStepOne";

interface IStepOne {
  setCurrentStep: (step: number) => void;
}

export default function StepOne({ setCurrentStep }: IStepOne) {
  const { register, handleSubmit, errors, onSubmit } = useStepOne({
    setCurrentStep,
  });

  const inputContainerClassName = "";
  const labelClassName = "block";
  const inputClassName =
    "border rounded-sm border-purple-200 w-full p-2 mb-4 placeholder:font-ubuntu placeholder:font-[500] placeholder:text-grey-500 focus:outline-none focus:ring-1 focus:ring-[#5e599b]";

  const form = (
    <form id="step-one-form" onSubmit={handleSubmit(onSubmit)}>
      <div className={inputContainerClassName}>
        <label className={labelClassName}>Name</label>
        <input
          className={`${inputClassName} ${errors.name ? "border-red-500 focus:ring-red-500" : ""}`}
          type="text"
          placeholder="e.g Stephen King"
          {...register("name", {
            required: true,
          })}
        />
        {errors.name?.message && <Error message={errors.name.message} />}
      </div>

      <div className={inputContainerClassName}>
        <label className={labelClassName}>Email Address</label>
        <input
          className={inputClassName}
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          required
          {...register("emailAddress", {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        {errors.emailAddress?.message && (
          <Error message={errors.emailAddress.message} />
        )}
      </div>

      <div className={inputContainerClassName}>
        <label className={labelClassName}>Phone Number</label>
        <input
          className={inputClassName}
          type="tel"
          placeholder="e.g. +1 234 567 890"
          required
          {...register("phoneNumber", { pattern: /^\+?[0-9\s\-()]+$/ })}
        />
        {errors.phoneNumber?.message && (
          <Error message={errors.phoneNumber.message} />
        )}
      </div>
    </form>
  );

  return (
    <StepTemplate
      setCurrentStep={setCurrentStep}
      title="Personal info"
      stepNumber={1}
      paragraph="Please provide your name, email address, and phone number."
      form={form}
      formId="step-one-form"
    />
  );
}
