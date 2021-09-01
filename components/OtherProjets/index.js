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
            className="py-8 px-7 border rounded-lg dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque"
            key={title}
          >
            <div className="flex justify-between items-center mb-6">
              <FiFolder size={40} />
              <div class="project-links">
                {github && (
                  <a href={github} target="_blank">
                    <FiGithub size={30} />
                  </a>
                )}

                {link && (
                  <a href={link} target="_blank">
                    <FiExternalLink size={30} />
                  </a>
                )}
              </div>
            </div>
            <h3 className="mb-3 text-black dark:text-white font-semibold">
              {title}
            </h3>
            <p className="mb-7 text-sm">{t(`projects:${nom}`)}</p>
            <ul className="flex text-xs">
              {techs.map((tech) => (
                <li className="mr-3" key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
