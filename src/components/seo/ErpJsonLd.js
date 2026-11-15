import { SITE_URL, company, ceo } from "@/data/company";
import { pageSeo } from "@/data/seo";
import { productPackages } from "@/data/erpModules";

export default function ErpJsonLd() {
  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Hybrid Customized ERP",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Enterprise Resource Planning",
    operatingSystem: "Web, Android",
    url: `${SITE_URL}/services/erp`,
    description: pageSeo.erp.description,
    keywords: pageSeo.erp.keywords.join(", "),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
      offerCount: String(productPackages.length),
    },
    provider: {
      "@type": "Organization",
      name: company.legalName,
      url: SITE_URL,
    },
    creator: {
      "@type": "Person",
      name: ceo.name,
      jobTitle: ceo.title,
    },
    featureList: [
      "Cloud SaaS ERP access",
      "Factory and inventory management",
      "HRM and payroll",
      "FBR and PRA invoices",
      "AI Assistant",
      "Android mobile supervision",
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageSeo.erp.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Hybrid Customized ERP",
        item: `${SITE_URL}/services/erp`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([software, faqPage, breadcrumb]),
      }}
    />
  );
}
