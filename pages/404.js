export default function Custom404() {
  return (
    <main className="error_page">
      <section class="bsod">
        <h1 class="neg title">
          <span class="bg">Error - 404</span>
        </h1>
        <p>An error has occured, to continue:</p>
        <p>
          * Return to our homepage.
          <br />* Send us an e-mail about this error and try later.
        </p>
        <nav class="nav">
          <a href="#" class="link">
            index
          </a>
          &nbsp;|&nbsp;
          <a href="#" class="link">
            webmaster
          </a>
        </nav>
      </section>
    </main>
  );
}
