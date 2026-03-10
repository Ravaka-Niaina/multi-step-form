"use client";

import Image from "next/image";

interface IStep {
  stepNumber: number;
  title: string;
  route: string;
}

const steps: IStep[] = [
  {
    stepNumber: 1,
    title: "Your info",
    route: "/multi-step-form/step-one",
  },
  {
    stepNumber: 2,
    title: "Select plan",
    route: "/multi-step-form/step-two",
  },
  {
    stepNumber: 3,
    title: "Add-ons",
    route: "/multi-step-form/step-three",
  },
  {
    stepNumber: 4,
    title: "Summary",
    route: "/multi-step-form/step-four",
  },
];

interface IFormInput {
  name: string;
  emailAddress: string;
  phoneNumber: string;
}

interface IStepOne {
  setCurrentStep: (step: number) => void;
  title: string;
  stepNumber: number;
  paragraph: string;
  form: React.ReactNode;
  formId: string;
}

export default function StepTemplate({
  setCurrentStep,
  title,
  stepNumber,
  paragraph,
  form,
  formId,
}: IStepOne) {
  const currentStep = stepNumber;

  const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const changeStep = (step: number) => {
    if (step < 1 || step > 4) return;
    setCurrentStep(step);
  };

  return (
    <div className="bg-[#eef5ff] md:w-screen md:h-screen md:flex md:justify-center md:items-center">
      <div className="bg-[#eef5ff] grid grid-rows-[170px_1fr_70px] md:grid-rows-1 grid-cols-1 md:grid-cols-[274px_1fr] md:bg-white md:w-full md:max-w-[940px] md:h-[570px] md:p-4 md:rounded-xl box-content">
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
          <section className="text-black mx-4 md:mx-0 px-4 md:pr-0 py-8 md:w-[450px] bg-white rounded-lg relative mt-[-85px] md:mt-0 z-10 shadow-[0_8px_20px_-5px_rgba(0,0,0,0.25)] md:shadow-none">
            <h1 className="text-2xl font-bold text-blue-950 font-ubuntu">
              {title}
            </h1>
            <p className="text-grey-500 my-3 font-ubuntu font-normal">
              {paragraph}
            </p>
            {form}
          </section>
        </main>
        <footer className="h-[70px] mt-6 md:mt-0 box-border bg-white flex items-center px-4 md:col-start-2 md:row-start-2 md:w-[450px] md:mx-auto md:pr-0">
          <button
            onClick={goBack}
            form={formId}
            className="hidden md:block text-grey-500 font-ubuntu font-medium p-2 md:px-4 rounded-sm hover:text-[#133a6b] cursor-pointer"
          >
            Go Back
          </button>

          <button
            type="submit"
            form={formId}
            className="bg-[#174a8a] font-ubuntu p-2 md:px-4 rounded-sm ml-auto hover:bg-[#133a6b] cursor-pointer"
          >
            Next Step
          </button>
        </footer>
      </div>
    </div>
  );
}
