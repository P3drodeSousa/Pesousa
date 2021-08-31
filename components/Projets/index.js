import { FiGithub, FiExternalLink } from "react-icons/fi";
//TODO add next Image
import useTranslation from "next-translate/useTranslation";

export default function ProjetComponent({ projet }) {
  const { t } = useTranslation("common");
  return (
    <section class="project-list mt-24">
      {projet &&
        projet.map(({ title, poster, nom, techs, github, link }) => (
          <section class="projet mt-12 mb-48" key={title}>
            <a href={link} class="photo">
              <h1>{title}</h1>
              <img src={poster} />
              <div class="glow-wrap">
                <i class="glow"></i>
              </div>
            </a>
            <div class="content">
              {t(`projects:${nom}`)}
              <ul>
                {techs.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div class="project-links">
                <a href={github} target="_blank">
                  <FiGithub size={30} />
                </a>
                <a href={link} target="_blank">
                  <FiExternalLink size={30} />
                </a>
              </div>
            </div>
          </section>
        ))}
    </section>
  );
}
