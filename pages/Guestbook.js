import db from "@/lib/planetscale";
import { providers, signIn, getSession } from "next-auth/client";

import useSWR, { mutate } from "swr";
import fetcher from "@/lib/fetcher";

import Container from "../components/Container";
import Title from "../components/Utils/Title";
import GuestBookform from "@/components/Guestbook/GuestBookForm";
import GuestBookEntry from "@/components/Guestbook";


export default function Guestbook({
  session,
  providers,
  initialEntries,
  langue,
}) {
  const { data: entries } = useSWR("/api/guestbook", fetcher, {
    initialData: initialEntries,
  });
  return (
    <Container title="Guestbook – Pedro de Sousa">
      <section className="mt-5">
        <Title title="Guestbook ." />
        <div class="text-justify text-lg max-w-6xl mx-auto my-14">
          <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {langue("guestbook:description")}
            </p>

            <div className="border border-blue-200 rounded p-6 mt-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
              <h5 className="text-lg md:text-xl font-bold">
                {langue("guestbook:formTitle")} Guestbook
              </h5>
              <p className="my-1">{langue("guestbook:formDescription")}</p>
              {!session && (
                <>
                  <div className="my-6 flex gap-5">
                    {Object.values(providers).map((provider) => {
                      return (
                        <button
                          key={provider.name}
                          className={`flex-1 w-full py-3 rounded-md bg-${provider.id} my-2 text-white`}
                          onClick={() => signIn(provider.id)}
                        >
                          Login in with <br />
                          {provider.name}
                        </button>
                      );
                    })}
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
              <GuestBookEntry entries={entries} user={session?.user.name} />
            </section>
          </div>
        </div>
      </section>
    </Container>
  );
}

Guestbook.getInitialProps = async (context) => {
  const { req } = context;
  const session = await getSession({ req });

  const [rows] = await db.query(`
  SELECT * FROM guestbook
  ORDER BY updated_at DESC;
`);

  const entries = await Object.values(JSON.parse(JSON.stringify(rows)));

  return {
    session,
    providers: await providers(context),
    inititalEntries: entries,
  };
};
