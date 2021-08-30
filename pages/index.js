import Container from "../components/Container";
import NextLink from "next/link";

//TODO optamise web font

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
                  {langue("common:guestbook")} guestbook
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
          <img
            src="me.png"
            width="100%"
            height="100%"
            className="object-contain z-40 absolute bottom-8"
          />
          <div className="absolute inset-0 z-10 radial"></div>
        </div>
      </section>
    </Container>
  );
}
