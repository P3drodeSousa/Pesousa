import AboutComponent from "../components/About";
import Container from "../components/Container";
import Stats from "../components/Stats";
import Title from "../components/Utils/Title";
import TopTracks from "../components/TopTracks";
import useTranslation from "next-translate/useTranslation";

export default function About({ stats, langue }) {
  return (
    <Container title={`${langue("about:title")} – Pedro de Sousa`}>
      <section className="mt-5">
        <Title title={langue("about:title")} />
        <AboutComponent me={langue("about:about")} />
        <Stats
          stats={stats}
          text={langue("about:stats")}
          days={langue("about:days")}
          code={langue("about:code")}
        />
        <TopTracks tracks={langue("about:tracks")} />
      </section>
    </Container>
  );
}

export async function getStaticProps() {
  const data = await fetch(`${process.env.NEXTAUTH_URL}api/github`);
  const stats = await data.json();

  return {
    props: {
      stats,
    },
    revalidate: 60,
  };
}
