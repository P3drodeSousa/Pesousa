import useTranslation from "next-translate/useTranslation";
import { FiFolder } from "react-icons/fi";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function OtherProjets({ other }) {
  const { t } = useTranslation("common");
  return (
    <div>
      <h2 className="text-center text-5xl font-semibold">
        {t(`projects:Other`)}
      </h2>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {other.map(({ title, github, link, techs, nom }) => (
          <div
            className="py-8 px-7 border rounded-lg dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque flex flex-col"
            key={title}
          >
            <div className="flex justify-between items-center mb-12">
              <FiFolder size={45} className="folder" />
              <div class="project-links">
                {github && (
                  <a href={github} target="_blank" rel="noreferrer">
                    <FiGithub size={25} />
                  </a>
                )}

                {link && (
                  <a href={link} target="_blank" rel="noreferrer">
                    <FiExternalLink size={25} />
                  </a>
                )}
              </div>
            </div>
            <a
              href={link}
              className="text-black dark:text-white font-semibold"
              target="_blank"
              rel="noreferrer"
            >
              {title}
            </a>

            <p className="mt-5 mb-7 flex-1">{t(`projects:${nom}`)}</p>

            <ul className="flex text-xs">
              {techs.map((tech) => (
                <li className="mr-3" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
