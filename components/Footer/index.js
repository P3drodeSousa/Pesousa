import { format, getDay } from "date-fns";
import { FiMail } from "react-icons/fi";
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { useTheme } from "next-themes";
import Spotify from "./Spotify";
import { fr } from "date-fns/locale";
import useTranslation from "next-translate/useTranslation";

export default function Footer() {
  const { theme } = useTheme();
  const { t, lang } = useTranslation();

  const langue = () => (lang === "fr" ? { locale: fr } : null);

  const day = format(new Date(), "EEEE", langue());
  const year = format(new Date(), "yyyy");

  return (
    <footer className="flex items-center md:justify-between justify-center py-8 md:flex-row flex-col-reverse relative w-full">
      <div className="flex flex-1 w-full items-center justify-center md:justify-start">
        No tracking. No ads. {t("common:day")} {day} ! &copy; {year}
      </div>
      <Spotify />
      <div className="flex flex-1 w-full items-center justify-center md:justify-end icons-spacing cursor-pointer">
        <a
          href="mailto:contact@pesousa.dev"
          target="_blank"
          className="mail"
          rel="noreferrer"
        >
          <FiMail size={24} className="transform" style={{ fill: "current" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/pedros0usa/"
          target="_blank"
          rel="noreferrer"
          className="linkedin"
        >
          <RiLinkedinFill size={24} style={{ fill: "current" }} />
        </a>
        <a
          href="https://github.com/P3drodeSousa"
          target="_blank"
          rel="noreferrer"
          className="github"
        >
          <RiGithubFill size={24} style={{ fill: "current" }} />
        </a>
      </div>
    </footer>
  );
}
