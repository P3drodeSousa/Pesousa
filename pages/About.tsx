import Container from "../components/Container";
import Title from "../components/Utils/Title";
import getMyFolders from "./api/github";
import { GetStaticProps } from "next";
import AboutComponent from "@/components/About";
import TopTracks from "@/components/TopTracks";
import Stats from "../components/Stats";

type Props = {
  stats: number;
  langue: any;
};

export default function About({ stats, langue }: Props) {
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
export const getStaticProps: GetStaticProps = async () => {
  const stats = await getMyFolders();

  return {
    props: {
      stats,
    },
    revalidate: 60,
  };
};
