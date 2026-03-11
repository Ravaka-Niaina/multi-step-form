import Header from "./Header";

interface IGlobalTemplate {
  children: React.ReactNode;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  moreClass?: string;
}

export default function GlobalTemplate(props: IGlobalTemplate) {
  const { children, currentStep, setCurrentStep, moreClass } = props;
  return (
    <div className="bg-[#eef5ff] md:w-screen md:h-screen md:flex md:justify-center md:items-center">
      <div className="bg-[#eef5ff] min-h-dvh md:min-h-auto grid grid-rows-[170px_1fr_70px] md:grid-rows-1 grid-cols-1 md:grid-cols-[274px_1fr] md:bg-white md:w-full md:max-w-[940px] md:h-[570px] md:p-4 md:rounded-xl box-content">
        <Header currentStep={currentStep} setCurrentStep={setCurrentStep} />
        {children}
      </div>
    </div>
  );
}
