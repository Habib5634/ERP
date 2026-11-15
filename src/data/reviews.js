/**
 * Replace these with real client reviews only.
 * Fake ratings can hurt SEO / Google trust.
 *
 * Optional: set googleReviewUrl to your Google Business “Write a review” link
 * so visitors can leave public Google ratings (stars in Google Search/Maps).
 */
export const googleReviewUrl = ""; // e.g. "https://g.page/r/YOUR_PLACE_ID/review"

export const reviews = [
  {
    name: "Fatima Client",
    role: "Operations lead",
    company: "Fatima",
    rating: 5,
    quote:
      "Customized software that matched our workflows — clear delivery and ongoing support from the A.A.S team.",
  },
  {
    name: "Factory Manager",
    role: "Plant operations",
    company: "Manufacturing client",
    rating: 5,
    quote:
      "Hybrid ERP helped us connect store, production, and accounts in one place with reliable day-to-day use.",
  },
  {
    name: "Finance Officer",
    role: "Tax & accounts",
    company: "Trading business",
    rating: 5,
    quote:
      "Sales tax and filing support stayed practical and timely — records stayed organized for compliance.",
  },
];

export function getReviewSummary(list = reviews) {
  if (!list.length) {
    return { count: 0, ratingValue: 0 };
  }
  const total = list.reduce((sum, item) => sum + Number(item.rating || 0), 0);
  const ratingValue = Math.round((total / list.length) * 10) / 10;
  return { count: list.length, ratingValue };
}
