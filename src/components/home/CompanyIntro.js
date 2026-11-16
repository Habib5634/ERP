import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { company, aboutValues, productLines } from "@/data/company";

export default function CompanyIntro() {
  return (
    <section className="section-pad pt-0">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="About ALI AKBAR SOFTECH"
            title={company.legalName}
            description={company.intro}
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {aboutValues.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="surface surface-accent h-full rounded-2xl p-6 pl-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div id="products" className="mt-14 scroll-mt-28">
          <Reveal>
            <SectionHeading
              eyebrow="Our products"
              title="Built around customer requirements"
              description="Trading System, manufacturing, and HR — built around customer requirements."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {productLines
              .filter((group) => group.title !== "Specialized industries")
              .map((group, index) => (
                <Reveal key={group.title} delay={index * 0.05}>
                  <article className="surface h-full rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-primary-deep">
                      {group.title}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
          </div>
          <Reveal delay={0.15}>
            <Link href="/about" className="btn-secondary mt-8">
              Read more about us
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
