import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjetComponent({ projet }) {
  return (
    <section class="project-list mt-24">
      {projet &&
        projet.map(({ title, description, poster, techs, github, link }) => (
          <section class="projet mt-12 mb-48">
            <a href={link} class="photo">
              <h1>{title}</h1>
              <img src={poster} />
              <div class="glow-wrap">
                <i class="glow"></i>
              </div>
            </a>
            <div class="content">
              <p>{description}</p>

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
