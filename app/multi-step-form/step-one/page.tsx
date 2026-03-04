"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { StepOneSchema } from "@/features/step-one/step-one-schema";
import Error from "@/shared/components/ui/Error";

interface IStep {
  stepNumber: number;
  title: string;
}

const steps: IStep[] = [
  {
    stepNumber: 1,
    title: "Your info",
  },
  {
    stepNumber: 2,
    title: "Select plan",
  },
  {
    stepNumber: 3,
    title: "Add-ons",
  },
  {
    stepNumber: 4,
    title: "Summary",
  },
];

interface IFormInput {
  name: string;
  emailAddress: string;
  phoneNumber: string;
}

export default function StepOne() {
  const [currentStep, setCurrentStep] = useState(1);
  const { schema, defaults } = StepOneSchema();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({
    resolver: zodResolver(schema),
    defaultValues: defaults,
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const changeStep = (step: number) => {
    if (step < 1 || step > 4) return;
    setCurrentStep(step);
  };

  const inputContainerClassName = "";
  const labelClassName = "block";
  const inputClassName =
    "border rounded-sm border-purple-200 w-full p-2 mb-4 placeholder:font-ubuntu placeholder:font-[500] placeholder:text-grey-500";

  return (
    <div className="md: bg-[#eef5ff] md:w-screen md:h-screen md:flex md:justify-center md:items-center">
      <div className="bg-[#eef5ff] h-screen grid grid-rows-[170px_1fr_70px] md:grid-rows-1 grid-cols-1 md:grid-cols-[274px_1fr] md:bg-white md:w-full md:max-w-[940px] md:h-[570px] md:p-4 md:rounded-xl box-content">
        <header className="relative md:w-[274px] md:h-[570px]">
          <div className="relative w-full md:w-[274px] h-[170px] md:h-[570px]">
            <Image
              className="object-cover object-center hidden md:block"
              src="/images/bg-sidebar-desktop.svg"
              alt="hero backgrond"
              fill
              priority
            />

            <Image
              className="object-cover object-bottom md:hidden"
              src="/images/bg-sidebar-mobile.svg"
              alt="hero backgrond"
              fill
              priority
            />
          </div>
          <nav className="absolute top-[22px] left-0 w-full">
            <ul className="flex flex-row justify-center gap-4 md:flex-col md:gap-6">
              {steps.map(({ stepNumber, title }) => (
                <li
                  key={stepNumber}
                  className={`
                  font-bold w-[34px] h-[34px] md:w-full rounded-full flex justify-center items-center md:justify-start md:gap-5 md:mx-6 
                  ${
                    stepNumber === currentStep
                      ? "bg-blue-200 text-blue-950 md:bg-transparent md:text-white"
                      : "bg-[black]/30 hover:bg-black/50 border md:bg-[black]/0 md:border-0 md:hover:bg-transparent"
                  } cursor-pointer
                `}
                  onClick={() => changeStep(stepNumber)}
                >
                  <button
                    className={`${stepNumber === currentStep ? "bg-blue-200 text-blue-950" : "md:border"} md:w-[34px] md:h-[34px] md:rounded-full`}
                  >
                    {stepNumber}
                  </button>
                  <div className="hidden md:block uppercase ">
                    <p className="text-xs text-white/60 font-ubuntu font-normal">
                      Step {stepNumber}
                    </p>
                    <p className="text-sm text-white font-ubuntu font-bold">
                      {title}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="md:ml-auto md:mx-auto">
          <section className="text-black mx-4 md:mx-0 px-4 md:pr-0 py-8 md:w-[450px] bg-white rounded-lg relative top-[-85px] md:top-0 shadow-[0_8px_20px_-5px_rgba(0,0,0,0.25)] md:shadow-none">
            <h1 className="text-2xl font-bold text-blue-950 font-ubuntu">
              Personal info
            </h1>
            <p className="text-grey-500 my-3 font-ubuntu font-normal">
              Please provide your name, email address, and phone number.
            </p>
            <form id="step-one-form" onSubmit={handleSubmit(onSubmit)}>
              <div className={inputContainerClassName}>
                <label className={labelClassName}>Name</label>
                <input
                  className={inputClassName}
                  type="text"
                  placeholder="e.g Stephen King"
                  min={5}
                  max={20}
                  {...register("name", {
                    required: true,
                    minLength: 5,
                    maxLength: 20,
                  })}
                />
                {errors.name?.message && (
                  <Error message={errors.name.message} />
                )}
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
          </section>
        </main>
        <footer className="h-[70px] box-border bg-white flex items-center px-4 md:col-start-2 md:row-start-2 md:w-[450px] md:mx-auto md:pr-0">
          <button
            type="submit"
            form="step-one-form"
            onClick={() => changeStep(currentStep + 1)}
            className="bg-[#174a8a] font-ubuntu p-2 md:px-4 rounded-sm ml-auto hover:bg-[#133a6b] cursor-pointer"
          >
            Next Step
          </button>
        </footer>
      </div>
    </div>
  );
}
