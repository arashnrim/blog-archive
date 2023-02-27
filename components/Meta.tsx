import Head from "next/head";

const Meta = ({
  title = "function()",
  name = "Arash Nur Iman",
  description = "Arash's blog to share little snippets of everything — code, experiences, and other fascinating stories to share.",
  url = "https://blog.arashnrim.me",
  image = "https://blog.arashnrim.me/seo.jpg",
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
      defer
      data-domain="blog.arashnrim.me"
      src="https://analytics.arashnrim.me/js/script.js"
    ></script>
  </Head>
);

export default Meta;
