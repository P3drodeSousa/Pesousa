import Container from "../components/Container";
import Title from "../components/Utils/Title";
import Skills from "../components/Skills";
import {skills} from '@/data/uses'

export default function Uses({ skills }) {
  return (
    <Container title="Skills– Pedro de Sousa">
      <section className="mt-5">
        <Title title="What I use." />
        <div class="text-justify text-lg max-w-6xl mx-auto my-14">
          Here's what tech I'm currently using for coding and design solutions.
          Most of these have been accumulated over the past few years.
          <Skills skills={skills} />
        </div>
      </section>
    </Container>
  );
}

export async function getStaticProps() {
    
  return {
    props: {
      skills,
    },
    revalidate: 60
  };
}
