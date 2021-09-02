import NextLink from "next/link";
import DarkMode from "./DarkMode";
import Mobile from "./MobileMenu";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

const hrefs = ["/", "/About", "/Skills", "/Projets", "/Guestbook"];

export default function Header() {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation();
  const links = [
    t("nav:home"),
    t("nav:about"),
    t("nav:skills"),
    t("nav:projets"),
    "Guestbook",
  ];

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  const showHeader = (route) => route === "/";

  return (
    <nav
      className={`${
        showHeader(router.pathname)
          ? null
          : "sticky-nav bg-white dark:bg-black bg-opacity-60"
      } z-20 relative flex items-center justify-between w-full py-6 my-0 text-gray-900  dark:text-gray-100`}
    >
      <Mobile menus={links} href={hrefs} />
      <NextLink href="/">
        <svg
          id="Calque_1"
          fill="currentColor"
          stroke="currentColor"
          className="cursor-pointer"
          data-name="Calque 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 288.15 263.52"
        >
          <polygon points="0 0 0 96 61.64 96 61.64 62.65 159.99 62.15 159.99 0 0 0" />
          <polygon points="288.15 263.5 288.13 167.5 226.49 167.5 226.5 200.85 128.15 201.37 128.16 263.52 288.15 263.5" />
          <text transform="translate(73.35 171.54)">PS</text>
        </svg>
      </NextLink>

      <div className="hidden md:flex">
        <nav>
          {links.map((item, index) => {
            return (
              <NextLink key={item} href={hrefs[index]}>
                <a className="p-1 text-gray-900 sm:p-4 text-base dark:text-white ">
                  {item}
                </a>
              </NextLink>
            );
          })}
        </nav>
      </div>
      <div className="flex">
        <select
          aria-label="Langue"
          onChange={changeLanguage}
          defaultValue={locale}
          className=" text-black dark:text-white text-lg bg-transparent tracking-wide mr-2 border-none outline-none"
        >
          <option className="text-black " value="en">
            EN
          </option>
          <option className="text-black" value="fr">
            FR
          </option>
        </select>
        <DarkMode />
      </div>
    </nav>
  );
}
