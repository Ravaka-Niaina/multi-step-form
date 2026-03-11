interface IMain {
  title: string;
  paragraph: string;
  form: React.ReactNode;
}

export const mainClass = "md:ml-auto md:mx-auto md:h-fit";
export const mainSectionClass =
  "text-black md:h-[570px] mx-4 md:mx-0 px-4 md:pr-0 py-8 md:w-[450px] md:h-fit bg-white rounded-lg relative mt-[-85px] md:mt-0 z-10 shadow-[0_8px_20px_-5px_rgba(0,0,0,0.25)] md:shadow-none";

export default function Main(props: IMain) {
  const { title, paragraph, form } = props;

  return (
    <main className={`${mainClass} mb-8`}>
      <section className={mainSectionClass}>
        <h1>{title}</h1>
        <p className="text-grey-500 my-3 font-ubuntu font-normal">
          {paragraph}
        </p>
        {form}
      </section>
    </main>
  );
}
