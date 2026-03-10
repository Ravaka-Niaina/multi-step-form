import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <Link
        href="/multi-step-form"
        className="border-2 rounded-lg border-gray-300 bg-amber-50 font-bold text-black  p-4"
      >
        Go to step one of multi-step form
      </Link>
    </div>
  );
}
