import Container from "../components/Container";
import Title from "../components/Utils/Title";
import ProjetComponent from "@/components/Projets";
import OtherProjets from "@/components/OtherProjets";

//TODO Projets descriptions
// TODO deploy reddit Clone

export default function Projets({ projets, langue }) {
  return (
    <Container title={`${langue("projects:title")} – Pedro de Sousa`}>
      <section className="mt-5">
        <Title title={langue("projects:title")} />
        <div className="text-justify text-lg max-w-6xl mx-auto my-14 flex items-center flex-col">
          {langue("projects:description")}
          <ProjetComponent projet={projets.main} />
          <OtherProjets other={projets.other} />
        </div>
      </section>
    </Container>
  );
}

export async function getStaticProps() {
  const data = await fetch(`${process.env.NEXTAUTH_URL}api/projets`);
  const projets = await data.json();

  return {
    props: {
      projets,
    },
    revalidate: 60,
  };
}
