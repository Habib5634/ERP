export const services = [
  {
    slug: "erp",
    title: "Hybrid Customized ERP",
    shortTitle: "ERP Software",
    eyebrow: "Flagship product",
    summary:
      "A hybrid, cloud-ready ERP built for factories and growing businesses — procurement, production, HR, accounting, FBR/PRA, and AI-assisted workflows.",
    description:
      "Our Hybrid Customized ERP is the core of ALI AKBAR SOFTECH. It unifies factory management, procurement, inventory, production, dispatch, HRM, dual accounting, approvals, and live dashboards in one responsive web and Android-ready platform. Earlier CFMDI ERP generations evolved into this modern hybrid system.",
    href: "/services/erp",
    accent: "blue",
    seoTitle:
      "Hybrid Customized ERP Software Pakistan | Cloud SaaS ERP by ALI AKBAR SOFTECH",
    seoDescription:
      "Hybrid Customized ERP — cloud SaaS ERP for factories and businesses in Pakistan with procurement, production, inventory, HRM, dual accounting, FBR/PRA invoices, AI assistant, and Android app. Built by ALI AKBAR SOFTECH under Usman Akbar.",
    keywords: [
      "customized ERP software Pakistan",
      "cloud SaaS ERP Pakistan",
      "manufacturing ERP",
      "factory ERP software",
      "FBR PRA invoice ERP",
    ],
    highlights: [
      "AI Assistant & AI Audit",
      "Realtime dashboards, SMS & email",
      "FBR & PRA invoice compliance",
      "Face attendance & mobile app",
      "Weight scale & IP camera integration",
      "Dark/light themes & role-based access",
    ],
  },
  {
    slug: "farm",
    title: "Farm Management Solutions",
    shortTitle: "Farm",
    eyebrow: "Agriculture vertical",
    summary:
      "Digital tools for farm operations — stock, production tracking, and operational control tailored to agricultural businesses.",
    description:
      "We design farm-focused software that helps agricultural businesses track stock, production, and day-to-day operations with the same reliability as our ERP platform.",
    href: "/services/farm",
    accent: "green",
    seoTitle:
      "Farm Management Software & Agriculture ERP Pakistan | ALI AKBAR SOFTECH",
    seoDescription:
      "Farm management software and agriculture ERP tools by ALI AKBAR SOFTECH — stock, production tracking, and operational control for farms and agri-businesses in Pakistan.",
    keywords: [
      "farm management software Pakistan",
      "agriculture ERP Pakistan",
      "poultry farm software",
      "farm inventory software",
    ],
    highlights: [
      "Stock & production visibility",
      "Operational workflows",
      "Reports for decision makers",
      "Customized to farm processes",
    ],
  },
  {
    slug: "tax-compliance",
    title: "Tax & Compliance",
    shortTitle: "Tax & Compliance",
    eyebrow: "Finance services",
    summary:
      "Income tax, sales tax, filing, and compliance support — practical guidance paired with software that keeps records audit-ready.",
    description:
      "Led by Umer Akbar, our tax practice covers income tax, sales tax, filing, and ongoing compliance so businesses stay aligned with Pakistan’s regulatory requirements while their systems stay organized.",
    href: "/financial-services",
    accent: "navy",
    seoTitle:
      "Income Tax Return Filing, Sales Tax & FBR Compliance Pakistan | ALI AKBAR SOFTECH",
    seoDescription:
      "Tax consultant Pakistan for income tax return filing, sales tax returns, NTN/STRN, FBR IRIS, SECP compliance, withholding tax and corporate consultancy — ALI AKBAR SOFTECH Financial Services under Umer Akbar.",
    highlights: [
      "Income tax return filing Pakistan",
      "Sales tax & FBR compliance",
      "NTN, STRN & IRIS registration",
      "SECP corporate compliance",
    ],
  },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
