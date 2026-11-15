import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { productPackages } from "@/data/erpModules";

const accentStyles = {
  classic: {
    edge: "border-t-muted",
    badge: "bg-muted/15 text-muted",
    check: "text-muted",
  },
  lite: {
    edge: "border-t-support",
    badge: "bg-support-soft text-support",
    check: "text-support",
  },
  pro: {
    edge: "border-t-primary",
    badge: "bg-primary/10 text-primary",
    check: "text-primary",
  },
  elite: {
    edge: "border-t-accent",
    badge: "bg-accent-soft text-accent",
    check: "text-accent",
  },
};

export default function PackagesStrip() {
  return (
    <section id="packages" className="section-pad pt-0 scroll-mt-28">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Product packages"
            title="Classic, Lite, Pro & Elite"
            description="Choose the Hybrid Customized ERP package that matches your operations — upgrade as you grow."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {productPackages.map((pkg, index) => {
            const tone = accentStyles[pkg.accent];
            return (
              <Reveal key={pkg.id} delay={index * 0.06} className="h-full">
                <article
                  className={`surface relative flex h-full flex-col overflow-hidden rounded-2xl border-t-4 ${tone.edge} p-6 ${
                    pkg.featured ? "ring-1 ring-primary/25" : ""
                  }`}
                >
                  {pkg.featured ? (
                    <span className="absolute right-4 top-4 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                      Popular
                    </span>
                  ) : null}
                  <span
                    className={`inline-flex w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${tone.badge}`}
                  >
                    {pkg.tagline}
                  </span>
                  <h3 className="display-font mt-4 text-3xl text-primary-deep">
                    {pkg.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {pkg.description}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-foreground/85"
                      >
                        <Check
                          size={16}
                          className={`mt-0.5 shrink-0 ${tone.check}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                      pkg.featured
                        ? "btn-primary !rounded-full"
                        : "border border-line bg-white/80 text-primary-deep hover:border-primary/30"
                    }`}
                  >
                    Request {pkg.name}
                    <ArrowRight size={15} />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
