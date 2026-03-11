import Image from "next/image";
import GlobalTemplate from "@/shared/components/layout/GlobalTemplate";

export interface IThanks {
  setCurrentStep: (step: number) => void;
}

const iconSize = 50;

export default function Thanks({ setCurrentStep }: IThanks) {
  return (
    <GlobalTemplate
      currentStep={4}
      setCurrentStep={setCurrentStep}
      moreClass="min-h-[100vh]"
    >
      <main className="md:ml-auto md:mx-auto h-full md:h-[570px] flex items-center">
        <section className="text-black mx-4 md:mx-0 px-4 py-8 md:w-[475px] md:h-fit bg-white rounded-lg relative mt-[-85px] md:mt-0 z-10 shadow-[0_8px_20px_-5px_rgba(0,0,0,0.25)] md:shadow-none flex flex-col items-center min-h-[355px] md:min-h-auto">
          <Image
            src="/images/icon-thank-you.svg"
            alt="icon thank you"
            width={iconSize}
            height={iconSize}
          />
          <h1 className="text-2xl mt-6 font-bold text-blue-950 font-ubuntu">
            Thank you!
          </h1>
          <p className="text-grey-500 text-center my-3 font-ubuntu font-normal">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </section>
      </main>
    </GlobalTemplate>
  );
}
