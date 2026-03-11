interface IFooter {
  goBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
  formId: string;
  currentStep: number;
  nextColor?: string;
  nextLabel?: string;
}

export default function Footer(props: IFooter) {
  const { goBack, formId, currentStep, nextColor, nextLabel } = props;

  return (
    <footer className="h-[70px] mt-6 md:mt-0 box-border bg-white flex items-center px-4 md:col-start-2 md:row-start-2 md:w-[450px] md:mx-auto md:pr-0">
      <button
        onClick={goBack}
        form={formId}
        className={`${currentStep === 1 ? "hidden" : ""} text-grey-500 font-ubuntu font-medium p-2 md:px-4 rounded-sm hover:text-[#133a6b] cursor-pointer`}
      >
        Go Back
      </button>

      <button
        type="submit"
        form={formId}
        className={`${nextColor ? `bg-[${nextColor}]` : "bg-[#174a8a]"} font-ubuntu p-2 md:px-4 rounded-sm ml-auto hover:bg-[#133a6b] cursor-pointer`}
      >
        {nextLabel || "Next Step"}
      </button>
    </footer>
  );
}
