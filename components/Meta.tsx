import Head from "next/head";

const Meta = ({
  title = "function()",
  name = "Arash Nur Iman",
  description = "Arash's blog to share little snippets of everything — code, experiences, and other fascinating stories to share.",
  url = "https://blog.arash.codes",
  image = "https://blog.arash.codes/seo.jpg",
  isBlogPost = false,
}) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" type="image/ico" href="/favicon.ico" />

    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="keywords" content="developer, dev, student, Singapore" />
    <meta name="author" content={name} />
    <meta name="url" content={url} />
    <meta name="theme-color" content="#000000" />
    {isBlogPost && <meta name="robots" content="nofollow" />}

    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:description" content={description} />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:site_name" content={title} />
    <meta property="og:image" content={image} />

    <script
      async
      defer
      data-website-id="9e0aa9a0-9da0-4311-897c-ea7ed304fe6c"
      src="https://analytics.arash.codes/umami.js"
    ></script>
  </Head>
);

export default Meta;
