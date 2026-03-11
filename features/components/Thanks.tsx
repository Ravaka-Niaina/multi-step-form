import Image from "next/image";
import GlobalTemplate from "@/shared/components/layout/GlobalTemplate";
import { mainClass, mainSectionClass } from "@/shared/components/layout/Main";

export interface IThanks {
  setCurrentStep: (step: number) => void;
}

export default function Thanks({ setCurrentStep }: IThanks) {
  const form = <p>Dummy thanks</p>;

  return (
    <GlobalTemplate
      currentStep={4}
      setCurrentStep={setCurrentStep}
      moreClass="min-h-[100vh]"
    >
      <main className={mainClass}>
        <section className={mainSectionClass}>
          <Image
            src="/images/icon-thank-you.svg"
            alt="icon thank you"
            width={32}
            height={32}
          />
          <h1>Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </section>
      </main>
    </GlobalTemplate>
  );
}
