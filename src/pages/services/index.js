import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SeoHead from "@/components/seo/SeoHead";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { company } from "@/data/company";
import { pageSeo } from "@/data/seo";

export default function ServicesPage() {
  return (
    <>
      <SeoHead
        title={pageSeo.services.title}
        description={pageSeo.services.description}
        path="/services"
        keywords={pageSeo.services.keywords}
      />

      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Software products and compliance support under one roof"
              description={`${company.legalName} delivers customized ERP/SaaS software, farm systems, and tax compliance services for growing businesses in Pakistan.`}
            />
          </Reveal>

          <div className="mt-12 grid gap-5">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.05}>
                <Link
                  href={service.href}
                  className="surface group flex flex-col gap-4 rounded-2xl p-6 transition hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between sm:p-8"
                >
                  <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      {service.eyebrow}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-primary-deep">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.summary}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 self-start rounded-full border border-line bg-white/70 px-4 py-2 text-sm font-semibold text-primary transition group-hover:bg-primary group-hover:text-white">
                    View details
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
