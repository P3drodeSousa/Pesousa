import Container from "../components/Container";
import Title from "../components/Utils/Title";
import Skills from "../components/Skills";
import { skills } from "../data/uses";
import { SkillsType } from "@/lib/types";
import { GetStaticProps } from "next";

type Props = {
  skills: SkillsType[];
  langue: any;
};

export default function Uses({ skills, langue }: Props) {
  console.log(skills);
  return (
    <Container title={`${langue("skills:title")} – Pedro de Sousa`}>
      <section className="mt-5">
        <Title title={langue("skills:title")} />
        <div className="text-justify text-lg max-w-6xl mx-auto my-14">
          {langue("skills:description")}
          <Skills skills={skills} />
        </div>
      </section>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      skills,
    },
    revalidate: 60,
  };
};
