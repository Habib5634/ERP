export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://aliakbarsoftech.online";

export const company = {
  brandShort: "A.A.S",
  legalName: "ALI AKBAR SOFTECH",
  tagline: "Manage · Grow · Succeed",
  slogan: "Customized software solutions for modern businesses",
  phone: "+92 322 711 22 33",
  phoneHref: "tel:+923227112233",
  whatsapp: "https://wa.me/923227112233",
  email: "hybriderp786@gmail.com",
  location: "Pakistan",
  description:
    "ALI AKBAR SOFTECH is a fast-growing software development house designing and developing customized software solutions with user-friendly, easy-to-use interfaces for our customers.",
  intro:
    "ALI AKBAR SOFTECH is a fast-growing software development house that designs and develops customized software solutions, providing customers with a user-friendly and easy-to-use interface.",
  mission:
    "To provide professional, high-quality, reliable, efficient, and customized software catering to every requirement of our valued customers.",
  vision:
    "To lead the software industry and guide our customers to effective computing strategies and solutions.",
  approach:
    "We call ourselves a services provider, not a products provider. Our success is based directly on the success of our clients — that is why we consider ourselves partners with each customer, building software around their requirements.",
  responsibility:
    "We are fully responsible for the smooth running of our software systems, and for the safety and security of clients’ sensitive data.",
};

export const aboutValues = [
  { title: "Mission", body: company.mission },
  { title: "Vision", body: company.vision },
  { title: "Partnership", body: company.approach },
  { title: "Responsibility", body: company.responsibility },
];

export const productLines = [
  {
    title: "Trading System",
    items: [
      "Stock inventory control",
      "Financial accounting",
      "Sales tax & related modules",
      "Trading workflows",
    ],
  },
  {
    title: "Manufacturing Accounting",
    items: [
      "Inventory (raw material / finished goods)",
      "Consumption & production",
      "Financial accounting & sales tax",
      "Product / job costing",
      "Budgeting (fixed / variable)",
      "Store & spare management",
    ],
  },
  {
    title: "Human Resource Management",
    items: [
      "Employee bio-data & history",
      "Attendance (thumb / card machines)",
      "Payroll management",
    ],
  },
  {
    title: "Specialized industries",
    items: [
      "Poultry feed, farming & trading ERP",
      "Feed mill, broiler, layer & breeder farming",
      "Bakery manufacturing & shop POS",
      "Oil & ghee mills",
      "Leather, fabrication & polypropylene sack bags",
      "Cable & wire manufacturing",
      "Architect & construction services",
    ],
  },
];

export const ceo = {
  name: "Usman Akbar",
  title: "Chief Executive Officer",
  focus: "Customized ERP solutions",
  bio: "Usman Akbar leads ALI AKBAR SOFTECH with deep specialization in hybrid customized ERP platforms. He helps factories and growing businesses digitize operations, unify workflows, and scale with reliable, cloud-ready software.",
};

export const taxLead = {
  name: "Umer Akbar",
  title: "Consultant Sales Tax, Income Tax & FBR Compliances",
  focus: "Sales tax, income tax, filing & compliances",
  experience: "20 years experience",
  photo: "/umer.jpg",
  bio: "Umer Akbar leads sales tax, income tax, filing, and compliance services — helping businesses stay organized, filing-ready, and aligned with Pakistan’s regulatory requirements.",
};

export { financialServices, financialFirm } from "@/data/financialServices";

export const team = [
  {
    name: "Usman Akbar",
    role: "CEO · Customized ERP Solutions",
    experience: "20 years experience",
    photo: "/usman.jpg",
    featured: true,
  },
  {
    name: "Umer Akbar",
    role: "Consultant Sales Tax, Income Tax & FBR Compliances",
    experience: "20 years experience",
    photo: "/umer.jpg",
  },
  {
    name: "Raja Habib Ahmed",
    role: "Senior Software Engineer",
    experience: "5 years experience",
    photo: "/habib.png",
  },
  {
    name: "Junaid Iqbal",
    role: "Senior Software Engineer",
    experience: "10 years experience",
  },
  {
    name: "Kashif Zaheer",
    role: "Hardware & Network Specialist",
    experience: "10 years experience",
    photo: "/kashif.jpg",
  },
];

export const pillars = [
  {
    title: "24/7 Availability",
    description: "Systems ready day and night so your operations never wait.",
  },
  {
    title: "Cloud Based",
    description: "Secure access from anywhere — office, plant floor, or mobile.",
  },
  {
    title: "Secure & Reliable",
    description: "Advanced controls with regular backups and role-based access.",
  },
];
