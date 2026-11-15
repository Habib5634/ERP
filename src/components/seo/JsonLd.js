import { SITE_URL, company, ceo, taxLead } from "@/data/company";
import { reviews, getReviewSummary } from "@/data/reviews";

export default function JsonLd({ extra = [] }) {
  const summary = getReviewSummary();

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: ["A.A.S", "Ali Akbar Softech", "Ali Akbar Software"],
    url: SITE_URL,
    logo: `${SITE_URL}/logo-mark.png`,
    description: company.description,
    telephone: company.phone,
    email: company.email,
    areaServed: "PK",
    founder: {
      "@type": "Person",
      name: ceo.name,
      jobTitle: ceo.title,
    },
    ...(summary.count
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: String(summary.ratingValue),
            reviewCount: String(summary.count),
            bestRating: "5",
            worstRating: "1",
          },
        }
      : {}),
  };

  const reviewNodes = reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewBody: review.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(review.rating),
      bestRating: "5",
      worstRating: "1",
    },
    itemReviewed: {
      "@type": "Organization",
      name: company.legalName,
    },
  }));


  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Hybrid Customized ERP",
    alternateName: [
      "Cloud SaaS ERP Pakistan",
      "Customized ERP Software Pakistan",
      "Factory ERP by ALI AKBAR SOFTECH",
    ],
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Enterprise Resource Planning",
    operatingSystem: "Web, Android",
    url: `${SITE_URL}/services/erp`,
    keywords:
      "ERP software Pakistan, SaaS ERP, cloud ERP, customized ERP, factory management software, FBR PRA invoice ERP",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "PKR",
    },
    provider: {
      "@type": "Organization",
      name: company.legalName,
    },
    description:
      "Hybrid customized cloud SaaS ERP software for factories and businesses in Pakistan — secure, FBR/PRA ready, with AI and mobile supervision.",
  };

  const personCeo = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: ceo.name,
    jobTitle: ceo.title,
    worksFor: {
      "@type": "Organization",
      name: company.legalName,
    },
    description: ceo.bio,
    url: `${SITE_URL}/team`,
  };

  const personTax = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: taxLead.name,
    jobTitle: taxLead.title,
    worksFor: {
      "@type": "Organization",
      name: company.legalName,
    },
    description: taxLead.bio,
    url: `${SITE_URL}/financial-services`,
  };

  const payload = [
    organization,
    software,
    personCeo,
    personTax,
    ...reviewNodes,
    ...extra,
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
