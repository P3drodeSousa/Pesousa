// import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// TODO Optmise images
export default function ProjetComponent({ projet }) {
  const { t } = useTranslation("common");
  return (
    <section class="project-list mt-24">
      {projet &&
        projet.map(({ title, poster, nom, techs, github, link }) => (
          <section class="projet mt-12 mb-48" key={title}>
            <a href={link} class="photo" rel="noreferrer">
              <h1>{title}</h1>
              <img src={poster}  alt={title}/>
              {/* <Image
                src={`/${poster}`}
                alt={"Picture of the author"}
                layout="fill"
                objectFit="cover"
                loading="lazy"
                className="poster"
              /> */}
            </a>
            <div class="content ">
              <p className="my-7">{t(`projects:${nom}`)}</p>
              <ul>
                {techs.map((tech) => (
                  <li key={tech} className="italic text-sm mb-7">
                    {tech}
                  </li>
                ))}
              </ul>

              <div class="project-links">
                <a href={github} target="_blank" rel="noreferrer">
                  <FiGithub size={30} />
                </a>
                <a href={link} target="_blank" rel="noreferrer">
                  <FiExternalLink size={30} />
                </a>
              </div>
            </div>
          </section>
        ))}
    </section>
  );
}
