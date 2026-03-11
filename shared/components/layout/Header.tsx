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

interface IHeader {
  setCurrentStep: (step: number) => void;
  currentStep: number;
}

export default function Header(props: IHeader) {
  const { setCurrentStep, currentStep } = props;

  const changeStep = (step: number) => {
    if (step < 1 || step > 4) return;
    setCurrentStep(step);
  };

  return (
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
  );
}
