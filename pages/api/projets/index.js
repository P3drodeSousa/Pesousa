const projets = {
  main: [
    {
      title: "NextFlix",
      description:
        "A web app for movie section planing. Browse a long side the list most the popular movies. View the movie details. Create your watchlist.",
      poster: "projets/nextflix.png",
      techs: ["Next.js", "Styled Components", "TheMovieDB API"],
      github: "https://github.com/P3drodeSousa/NextFlix",
      link: "https://next-flix-virid.vercel.app/",
    },
    {
      title: "NextMedium",
      description:
        "A web app that converts Markdonw intro static content like the blog image, populate the meta data of the blog with automatic generated content",
      poster: "projets/next_blog.png",
      techs: ["Next.js", "Makdown", "Puppeteer"],
      github: "https://github.com/P3drodeSousa/thumbnail",
      link: "https://thumbnail.vercel.app/",
    },
    {
      title: "NextDit",
      description: "A reddit clone built with AWS services",
      poster: "projets/next_blog.png",
      techs: ["Next.js", "AWS", "Puppeteer"],
      github: "https://github.com/P3drodeSousa/thumbnail",
      link: "https://thumbnail.vercel.app/",
    },
  ],
  other: [
    {
      title: "Pinterest UI clone",
      description: "A clone of the pinterest homepage animation clone.",
      techs: ["SCSS", "Pexels API", "JS"],
      github: "https://github.com/P3drodeSousa/pinterest_homepage",
      link: "https://p3drodesousa.github.io/pinterest_homepage/",
    },
    {
      title: "Personal Website V1",
      description:
        "First iteration of my personal website built with Gatsby, Styled Components and hosted on netify.",
      techs: ["Gatsby", "Styled Components"],
      github: "https://github.com/P3drodeSousa/Gatsby-Website",
      link: "https://friendly-euler-c705ad.netlify.app/",
    },
    {
      title: "Travel Website",
      description:
        "First iteration of my personal website built with Gatsby, Styled Components and hosted on netify.",
      techs: ["Gsap", "JS"],
      github: "https://github.com/P3drodeSousa/Travel",
      link: "https://p3drodesousa.github.io/Travel/",
    },
    {
      title: "React PWA",
      description:
        "First iteration of my personal website built with Gatsby, Styled Components and hosted on netify.",
      techs: ["React PWA", "JS"],
      github: "https://github.com/P3drodeSousa/thumbnail",
      link: "https://thumbnail.vercel.app/",
    },
    {
      title: "Google Docs Clone",
      description:
        "First iteration of my personal website built with Gatsby, Styled Components and hosted on netify.",
      techs: ["React PWA", "JS"],
      github: "https://github.com/P3drodeSousa/thumbnail",
      link: "https://thumbnail.vercel.app/",
    },
    {
      title: "React Music Player App",
      description:
        "First iteration of my personal website built with Gatsby, Styled Components and hosted on netify.",
      techs: ["React PWA", "JS"],
      github: "https://github.com/P3drodeSousa/React-music",
      link: "https://p3drodesousa.github.io/React-music/",
    },
    {
      title: "React Codepen Clone",
      description:
        "First iteration of my personal website built with Gatsby, Styled Components and hosted on netify.",
      techs: ["React"],
      github: "https://github.com/P3drodeSousa/React-Codepen-clone",
      link: "https://p3drodesousa.github.io/React-Codepen-clone/",
    },
  ],
};

export default async function handler(_, res) {
  return res.status(200).json(projets);
}
