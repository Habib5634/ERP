import Reveal from "@/components/motion/Reveal";
import SeoHead from "@/components/seo/SeoHead";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  company,
  ceo,
  aboutValues,
  productLines,
} from "@/data/company";
import { pageSeo } from "@/data/seo";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <SeoHead
        title={pageSeo.about.title}
        description={pageSeo.about.description}
        path="/about"
        keywords={pageSeo.about.keywords}
      />

      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="About us"
              title={`${company.legalName} builds customized software for real operations.`}
              description={company.intro}
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {aboutValues.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="surface h-full rounded-2xl p-6">
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

          <Reveal delay={0.1}>
            <div className="surface mt-14 grid gap-8 rounded-[1.75rem] p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
              <div>
                <div className="grid h-20 w-20 place-items-center rounded-2xl bg-primary text-2xl font-bold text-white">
                  UA
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Chief Executive Officer
                </p>
                <h2 className="display-font mt-2 text-3xl text-primary-deep">
                  {ceo.name}
                </h2>
                <p className="mt-2 text-sm font-medium text-foreground/80">
                  {ceo.focus}
                </p>
              </div>
              <div>
                <p className="text-base leading-relaxed text-muted">{ceo.bio}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Under his leadership, A.A.S delivers Hybrid Customized ERP and
                  industry verticals. Sales tax, income tax, and compliance services
                  are led separately by Umer Akbar.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">
                    Contact leadership
                  </Link>
                  <Link href="/team" className="btn-secondary">
                    Meet the team
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-16">
            <Reveal>
              <SectionHeading
                eyebrow="What we build"
                title="Products and solutions tailored to your industry"
                description="From trading and manufacturing to HR and specialized verticals — built around customer requirements."
              />
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {productLines.map((group, index) => (
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
          </div>
        </div>
      </section>
    </>
  );
}
