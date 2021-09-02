import AboutComponent from "../components/About";
import Container from "../components/Container";
import Stats from "../components/Stats";
import Title from "../components/Utils/Title";
import TopTracks from "../components/TopTracks";
import getMyFolders from "./api/github";

export default function About({ stats, langue }) {
  console.log(stats)
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
  const stats = await getMyFolders();

  return {
    props: {
      stats,
    },
    revalidate: 60,
  };
}
