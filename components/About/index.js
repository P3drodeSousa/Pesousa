import Image from 'next/Image'
export default function AboutComponent({ me }) {

  return (
    <div>
      <div className="flex md:flex-row flex-col-reverse max-w-6xl mx-auto items-center gap-20 mt-14">
        <div className="flex-2 text-justify text-lg ">
          <p className="whitespace-pre-wrap">{me}</p>
        </div>

        <div className="flex-1">
          <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-indigo-500 dark:border-pink-500">
            <Image layout="responsive" src='/pedro_de_sousa.jpg' width="52" height="52" alt="Pedro de Sousa" />
          </div>
        </div>
      </div>
    </div>
  );
}
