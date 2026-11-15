import Link from "next/link";
import { Star } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { reviews, googleReviewUrl, getReviewSummary } from "@/data/reviews";

function Stars({ value }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={16}
          className={
            index < value
              ? "fill-brand-yellow text-brand-yellow"
              : "text-line"
          }
        />
      ))}
    </div>
  );
}

export default function ReviewsStrip() {
  const summary = getReviewSummary();

  return (
    <section id="reviews" className="section-pad pt-0 scroll-mt-28">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Ratings & reviews"
              title="What clients say about ALI AKBAR SOFTECH"
              description="Real feedback helps new customers trust our ERP and compliance delivery."
            />
            <div className="surface shrink-0 rounded-2xl px-5 py-4 text-center">
              <p className="display-font text-4xl text-primary-deep">
                {summary.ratingValue.toFixed(1)}
              </p>
              <div className="mt-1 flex justify-center">
                <Stars value={Math.round(summary.ratingValue)} />
              </div>
              <p className="mt-1 text-xs text-muted">
                Based on {summary.count} reviews
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <Reveal key={`${review.name}-${index}`} delay={index * 0.06}>
              <article className="surface flex h-full flex-col rounded-2xl p-6">
                <Stars value={review.rating} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                  “{review.quote}”
                </p>
                <div className="mt-5 border-t border-line pt-4">
                  <p className="font-semibold text-primary-deep">{review.name}</p>
                  <p className="text-xs text-muted">
                    {review.role}
                    {review.company ? ` · ${review.company}` : ""}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            {googleReviewUrl ? (
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Leave a Google review
              </a>
            ) : (
              <p className="text-sm text-muted">
                Tip: Google Business Profile pe reviews collect karo — wahan ki
                stars Search/Maps pe dikhti hain.
              </p>
            )}
            <Link href="/contact" className="btn-secondary">
              Become a client
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
