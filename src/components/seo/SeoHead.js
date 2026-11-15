import Head from "next/head";
import { SITE_URL, company } from "@/data/company";
import { globalKeywords } from "@/data/seo";

export default function SeoHead({
  title,
  description,
  path = "/",
  type = "website",
  image = "/logo-mark.png",
  keywords = [],
}) {
  const fullTitle = title.includes(company.legalName)
    ? title
    : `${title} | ${company.legalName}`;
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const keywordList = [...keywords, ...globalKeywords]
    .filter(Boolean)
    .filter((item, index, arr) => arr.indexOf(item) === index)
    .join(", ");

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordList} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={company.legalName} />
      <meta property="og:locale" content="en_PK" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large"
      />
      <meta name="author" content={company.legalName} />
      <meta name="geo.region" content="PK" />
    </Head>
  );
}
