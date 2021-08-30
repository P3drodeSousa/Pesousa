import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../Footer';
import Header from '../Header';

export default function Container(props) {
    const { children, ...customMeta } = props;
    const meta = {
      title: 'Pedro de Sousa - Front-end Developer, Designer',
      description: `Front-end Developer, JavaScript enthusiast.`,
      image: 'https://leerob.io/static/images/banner.png',
      type: 'website',
      ...customMeta
    };
  return (
    <div className="bg-white dark:bg-black h-full min-h-screen flex flex-col px-8 md:px-16">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {/* <meta property="og:url" content={`https://leerob.io${router.asPath}`} />
        <link rel="canonical" href={`https://leerob.io${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )} */}
      </Head>
      <Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
        <Footer />
    </div>
  );
}
