import { SITE_URL, company, taxLead } from "@/data/company";
import { financialFirm } from "@/data/financialServices";

export default function FinancialServicesJsonLd() {
  const serviceTypes = financialFirm.serviceGroups.map((group) => group.title);

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: `${financialFirm.name} | ${company.legalName}`,
    alternateName: [
      "Tax Consultant Pakistan",
      "Income Tax and Sales Tax Consultancy",
      "SECP and FBR Compliance Services",
    ],
    description: financialFirm.seoDescription,
    url: `${SITE_URL}/financial-services`,
    telephone: company.phone,
    email: company.email,
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    provider: {
      "@type": "Organization",
      name: company.legalName,
      url: SITE_URL,
    },
    parentOrganization: {
      "@type": "Organization",
      name: company.legalName,
      url: SITE_URL,
    },
    employee: {
      "@type": "Person",
      name: taxLead.name,
      jobTitle: taxLead.title,
    },
    serviceType: serviceTypes,
    knowsAbout: financialFirm.keywords,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: financialFirm.faqs.map((faq) => ({
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
        name: "Financial Services",
        item: `${SITE_URL}/financial-services`,
      },
    ],
  };

  const payload = [professionalService, faqPage, breadcrumb];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
