"use client";

import { useState } from "react";

import Image from "next/image";

export default function StepOne() {
  const [currentStep, setCurrentStep] = useState(1);

  const changeStep = (step: number) => {
    if (step < 1 || step > 4) return;
    setCurrentStep(step);
  };

  const inputContainerClassName = "";
  const labelClassName = "block";
  const inputClassName =
    "border rounded-sm border-purple-200 w-full p-2 mb-4 placeholder:font-ubuntu placeholder:font-[500] placeholder:text-grey-500";

  return (
    <div className="bg-blue-50 h-screen grid grid-rows-[170px_1fr_70px] grid-cols-1">
      <header className="relative">
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
          <ul className="flex flex-row justify-center gap-4">
            {[1, 2, 3, 4].map((step) => (
              <li
                key={step}
                className={`font-bold w-[34px] h-[34px] rounded-full flex justify-center items-center ${step === currentStep ? "bg-blue-200 text-blue-950" : "bg-[black]/30 hover:bg-black/50 border"} cursor-pointer`}
                onClick={() => changeStep(step)}
              >
                <button>{step}</button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <section className="text-black mx-4 px-4 py-8 bg-white rounded-lg relative top-[-85px] shadow-[0_8px_20px_-5px_rgba(0,0,0,0.25)]">
          <h1 className="text-2xl font-bold text-blue-950 font-ubuntu">
            Personal info
          </h1>
          <p className="text-grey-500 my-3 font-ubuntu font-normal">
            Please provide your name, email address, and phone number.
          </p>
          <form>
            <div className={inputContainerClassName}>
              <label className={labelClassName}>Name</label>
              <input
                className={inputClassName}
                type="text"
                placeholder="e.g Stephen King"
                min={5}
                max={20}
                required
              />
            </div>

            <div className={inputContainerClassName}>
              <label className={labelClassName}>Email Address</label>
              <input
                className={inputClassName}
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                required
              />
            </div>

            <div className={inputContainerClassName}>
              <label className={labelClassName}>Phone Number</label>
              <input
                className={inputClassName}
                type="tel"
                placeholder="e.g. +1 234 567 890"
                required
              />
            </div>
          </form>
        </section>
      </main>
      <footer className="h-[70px] box-border bg-white flex items-center px-4">
        <button
          onClick={() => changeStep(currentStep + 1)}
          className="bg-blue-950 font-ubuntu p-2 rounded-sm ml-auto hover:bg-blue-950-hover cursor-pointer"
        >
          Next Step
        </button>
      </footer>
    </div>
  );
}
