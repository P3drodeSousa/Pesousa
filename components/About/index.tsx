import Image from "next/image";

export default function AboutComponent({ me }: { me: string }) {
  console.log(me);
  return (
    <div>
      <div className="flex md:flex-row flex-col-reverse max-w-6xl mx-auto items-center gap-20 mt-14">
        <div className="flex-2 text-justify text-lg ">
          <p className="whitespace-pre-wrap">{me}</p>
        </div>

        <div className="flex-1">
          <div className="w-52 h-52 rounded-full border-4 border-indigo-500 dark:border-pink-500 box-content overflow-hidden  profile"></div>
        </div>
      </div>
    </div>
  );
}
