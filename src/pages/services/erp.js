import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SeoHead from "@/components/seo/SeoHead";
import ErpJsonLd from "@/components/seo/ErpJsonLd";
import SectionHeading from "@/components/ui/SectionHeading";
import { getService } from "@/data/services";
import PackagesStrip from "@/components/home/PackagesStrip";
import { erpModules, techFeatures, moduleGroups } from "@/data/erpModules";
import { company } from "@/data/company";
import { pageSeo } from "@/data/seo";

export default function ErpServicePage() {
  const service = getService("erp");

  return (
    <>
      <SeoHead
        title={pageSeo.erp.title}
        description={pageSeo.erp.description}
        path="/services/erp"
        keywords={[...(service.keywords || []), ...pageSeo.erp.keywords]}
      />
      <ErpJsonLd />

      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {service.eyebrow}
            </p>
            <h1 className="display-font mt-3 max-w-3xl text-4xl text-primary-deep sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              {service.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Request a demo
              </Link>
              <a href={company.phoneHref} className="btn-secondary">
                {company.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <PackagesStrip />

      <section className="section-pad pt-0">
        <div className="container-shell">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Latest technology"
                title="Built for 2026 workflows"
                description="AI, realtime alerts, responsive web access, smart themes, and Supervision system."
              />
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {techFeatures.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 0.04}>
                  <article className="surface h-full rounded-2xl p-5">
                    <h3 className="font-semibold text-primary-deep">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{feature.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <Reveal>
              <SectionHeading
                eyebrow="Core modules"
                title="Everything your operations need in one ERP"
              />
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {erpModules.map((mod, index) => (
                <Reveal key={mod.title} delay={index * 0.03}>
                  <article className="surface h-full rounded-2xl border-l-4 border-l-primary p-5">
                    <h3 className="font-semibold text-primary-deep">{mod.title}</h3>
                    <p className="mt-2 text-sm text-muted">{mod.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <Reveal>
              <SectionHeading
                eyebrow="All covered modules"
                title="Organized for finance, tax, and ops teams"
              />
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {moduleGroups.map((group, index) => (
                <Reveal key={group.title} delay={index * 0.05}>
                  <article className="surface rounded-2xl p-6">
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

          <div className="mt-16">
            <Reveal>
              <SectionHeading
                eyebrow="ERP & SaaS FAQ"
                title="Common searches about our cloud ERP software"
                description="Answers for people searching customized ERP, SaaS ERP Pakistan, factory ERP, and FBR-ready business software."
              />
            </Reveal>
            <div className="mt-8 grid gap-4">
              {pageSeo.erp.faqs.map((faq, index) => (
                <Reveal key={faq.question} delay={index * 0.04}>
                  <article className="surface rounded-2xl p-5 sm:p-6">
                    <h2 className="text-base font-semibold text-primary-deep">
                      {faq.question}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="mt-16 rounded-[1.75rem] bg-gradient-to-br from-primary-deep to-primary p-8 text-white sm:p-10">
              <h2 className="display-font text-3xl text-white">From CFMDI to Hybrid ERP</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85">
                CFMDI represents earlier ERP generations from our journey. Today’s Hybrid
                Customized ERP carries that factory-floor DNA forward — with cloud SaaS
                access, AI assistance, tax compliance, and Supervision system.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
