import prisma from "@/lib/prisma";
import { signIn, useSession } from "next-auth/client";
import Container from "../components/Container";
import Title from "../components/Utils/Title";
import GuestBookform from "@/components/Guestbook/GuestBookForm";
import GuestBookEntry from "@/components/Guestbook";

export default function Guestbook({ initialEntries, langue }) {
  const [session] = useSession();
  return (
    <Container title="Guestbook – Pedro de Sousa">
      <section className="mt-5">
        <Title title="Guestbook ." />
        <div class="text-justify text-lg max-w-6xl mx-auto my-14">
          <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
            <p className="mb-8">{langue("guestbook:description")}</p>

            <div className="border border-blue-200 rounded p-6 mt-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
              <h5 className="text-lg md:text-xl font-bold">
                {langue("guestbook:formTitle")} Guestbook
              </h5>
              <p className="my-1">{langue("guestbook:formDescription")}</p>
              {!session && (
                <>
                  <div className="my-6 flex gap-5 md:flex-row flex-col">
                    <button
                      className={`flex-1 w-full py-3 rounded-md bg-github my-2 text-white`}
                      onClick={() => signIn("github")}
                    >
                      Login in with <br />
                      Github
                    </button>
                    <button
                      className={`flex-1 w-full py-3 rounded-md bg-google my-2 text-white`}
                      onClick={() => signIn("google")}
                    >
                      Login in with <br />
                      Google
                    </button>
                    <button
                      className={`flex-1 w-full py-3 rounded-md bg-linkedin my-2 text-white`}
                      onClick={() => signIn("linkedin")}
                    >
                      Login in with <br />
                      Linkedin
                    </button>
                  </div>
                </>
              )}
              {session && (
                <>
                  <GuestBookform />
                </>
              )}
            </div>

            <section class="mt-5">
              <GuestBookEntry
                initialEntries={initialEntries}
                user={session?.user.name}
              />
            </section>
          </div>
        </div>
      </section>
    </Container>
  );
}

export async function getStaticProps() {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: "desc",
    },
  });

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString(),
  }));

  return {
    props: {
      fallbackData,
    },
    revalidate: 60,
  };
}
