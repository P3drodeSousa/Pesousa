import Container from "../components/Container";
import NextLink from "next/link";
import Image from "next/image";

export default function Home({ langue }) {
  return (
    <Container>
      <section className="flex-1 flex items-center h-full justify-center relative glass">
        <div className="flex-1">
          <div className="max-w-xl">
            <h1 className="text-6xl font-extrabold mb-11 text-gray-900 dark:text-white">
              {langue("common:home")} Pedro .
            </h1>

            <p className="text-silver text-xl leading-8 dark:text-white">
              {langue("common:description")}
            </p>
            <br />
            <p className="text-silver text-xl leading-8 dark:text-white">
              {langue("common:descriptionCont")}{" "}
              <NextLink href={"/Guestbook"}>
                <a className="text-green font-semibold">
                  {" "}
                  {langue("common:guestbook")} Guestbook
                </a>
              </NextLink>{" "}
              {langue("common:more")}{" "}
              <NextLink href={"/About"}>
                <a className="text-blue font-semibold">
                  {" "}
                  {langue("common:me")}
                </a>
              </NextLink>
            </p>
          </div>
        </div>

        <div className="absolute inset-0 left-1/2 md:block hidden">
          <Image
            src="/me.png"
            alt="Illustration of developper"
            layout="fill"
            objectFit="contain"
            className="z-40 absolute bottom-8"
            loading="eager"
            priority={true}
          />

          <div className="absolute inset-0 z-10 radial"></div>
        </div>
      </section>
    </Container>
  );
}
