import Container from "../components/Container";
import Title from "../components/Utils/Title";
import Skills from "../components/Skills";
import { getPostBySlug } from "./api/skills";

export default function Uses({ skills, langue }) {
  return (
    <Container title={`${langue("skills:title")} – Pedro de Sousa`}>
      <section className="mt-5">
        <Title title={langue("skills:title")} />
        <div class="text-justify text-lg max-w-6xl mx-auto my-14">
          {langue("skills:description")}
          <Skills skills={skills} />
        </div>
      </section>
    </Container>
  );
}

export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/api/skills");
  const skills = await data.json();

  // const skills = await getPostBySlug();
  return {
    props: {
      skills,
    },
    revalidate: 60,
  };
}
