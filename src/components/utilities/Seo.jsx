import { Helmet } from "react-helmet-async";

const SITE_URL = "https://maxime-brochot.dev";
const DEFAULT_IMAGE = `${SITE_URL}/images/og-image.webp`;

function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  noIndex = false,
}) {
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>

      {description && <meta name="description" content={description} />}

      <link rel="canonical" href={canonicalUrl} />

      {noIndex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {description && (
        <meta property="og:description" content={description} />
      )}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && (
        <meta name="twitter:description" content={description} />
      )}
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default Seo;