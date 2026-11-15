import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SeoHead from "@/components/seo/SeoHead";
import FinancialServicesJsonLd from "@/components/seo/FinancialServicesJsonLd";
import SectionHeading from "@/components/ui/SectionHeading";
import { company, taxLead } from "@/data/company";
import { financialFirm } from "@/data/financialServices";

export default function FinancialServicesPage() {
  return (
    <>
      <SeoHead
        title={financialFirm.seoTitle}
        description={financialFirm.seoDescription}
        path="/financial-services"
        keywords={financialFirm.keywords}
      />
      <FinancialServicesJsonLd />

      {/* Hero */}
      <section className="section-pad relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-support/15 blur-3xl" />
          <div className="absolute bottom-10 left-0 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="container-shell relative">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Sub-company of {financialFirm.parent}
            </p>
            <h1 className="display-font mt-3 max-w-4xl text-4xl text-primary-deep sm:text-5xl">
              {financialFirm.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg font-medium text-primary">
              {financialFirm.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {financialFirm.pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
                >
                  {pillar}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted">
              {financialFirm.heroIntro}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
              {financialFirm.heroBody}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
              {financialFirm.heroApproach}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Request a consultation
              </Link>
              <a href={company.whatsapp} className="btn-secondary" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="section-pad pt-0">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="About us"
              title={financialFirm.aboutTitle}
              description={`A specialized practice under ${financialFirm.parent}, focused on accounting, taxation, and corporate compliance.`}
            />
          </Reveal>
          <div className="mt-8 grid gap-4">
            {financialFirm.aboutBody.map((para, index) => (
              <Reveal key={index} delay={index * 0.04}>
                <p className="surface rounded-2xl p-5 text-sm leading-relaxed text-muted sm:p-6">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad pt-0">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Our services"
              title="Accounting, tax & corporate solutions under one roof"
              description={financialFirm.servicesIntro}
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {financialFirm.serviceGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.03}>
                <article className="surface surface-accent h-full rounded-2xl p-6 pl-7">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-bold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-lg font-semibold text-primary-deep">
                      {group.title}
                    </h2>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="section-pad pt-0">
        <div className="container-shell">
          <Reveal>
            <div className="overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-primary-deep via-primary to-[#1a8f4a] p-8 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow">
                Accounting & tax compliance integration
              </p>
              <h2 className="display-font mt-3 max-w-3xl text-3xl text-white">
                {financialFirm.integration.title}
              </h2>
              {financialFirm.integration.body.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="mt-4 max-w-3xl text-sm leading-relaxed text-white/85"
                >
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-pad pt-0">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Why choose us"
              title="More than consultancy — a professional partnership"
              description="Professional advice. Reliable compliance. Sustainable growth."
            />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {financialFirm.whyChoose.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="surface h-full rounded-2xl border-t-4 border-t-brand-yellow p-5">
                  <h3 className="font-semibold text-primary-deep">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-pad pt-0">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Industries & clients"
              title="Professional services for diverse business sectors"
              description="Regardless of size or nature of business, we align solutions to your accounting, taxation, and regulatory needs."
            />
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {financialFirm.industries.map((industry, index) => (
              <Reveal key={industry} delay={index * 0.02}>
                <span className="surface inline-flex rounded-full px-4 py-2 text-sm font-medium text-primary-deep">
                  {industry}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-pad pt-0">
        <div className="container-shell">
          <Reveal>
            <div className="surface grid gap-8 rounded-[1.75rem] p-8 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
              <div>
                <div className="relative h-28 w-28 overflow-hidden rounded-2xl ring-2 ring-support/25">
                  <Image
                    src={taxLead.photo}
                    alt={taxLead.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Led by
                </p>
                <h2 className="display-font mt-2 text-3xl text-primary-deep">
                  {taxLead.name}
                </h2>
                <p className="mt-2 text-sm font-medium text-foreground/80">
                  {taxLead.title}
                </p>
                <p className="mt-2 text-xs font-medium text-muted">
                  {taxLead.experience}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Practice under {financialFirm.parent}
                </p>
              </div>
              <div>
                <p className="text-base leading-relaxed text-muted">{taxLead.bio}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {financialFirm.commitment}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">
                    Discuss financial services
                  </Link>
                  <a
                    href={company.whatsapp}
                    className="btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEO FAQ */}
      <section className="section-pad pt-0">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Common searches"
              title="Income tax, sales tax, FBR & SECP — frequently asked"
              description="Quick answers for people searching tax consultant, NTN registration, sales tax filing, and corporate compliance in Pakistan."
            />
          </Reveal>
          <div className="mt-8 grid gap-4">
            {financialFirm.faqs.map((faq, index) => (
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
      </section>

      {/* Contact CTA */}
      <section className="section-pad pt-0">
        <div className="container-shell">
          <Reveal>
            <div className="overflow-hidden rounded-[1.75rem] border border-line bg-[#fff8e8] p-8 sm:p-10">
              <div className="brand-ribbon -mx-8 -mt-8 mb-8 sm:-mx-10 sm:-mt-10" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Contact us
              </p>
              <h2 className="display-font mt-3 text-3xl text-primary-deep">
                Let’s work together
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                Need professional accounting, tax, and corporate consultancy? From
                FBR registration and SECP compliance to litigation, bookkeeping, and
                financial statements — get in touch for a practical consultation.
              </p>
              <p className="mt-3 text-sm font-semibold text-primary">
                Professional advice. Reliable compliance. Sustainable growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Contact us today
                </Link>
                <a href={company.phoneHref} className="btn-secondary">
                  {company.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
