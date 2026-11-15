import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SeoHead from "@/components/seo/SeoHead";
import { getService } from "@/data/services";
import { company } from "@/data/company";
import { pageSeo } from "@/data/seo";

export default function FarmServicePage() {
  const service = getService("farm");

  return (
    <>
      <SeoHead
        title={pageSeo.farm.title}
        description={pageSeo.farm.description}
        path="/services/farm"
        keywords={[...(service.keywords || []), ...pageSeo.farm.keywords]}
      />
      <section className="section-pad">
        <div className="container-shell max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-support">
              {service.eyebrow}
            </p>
            <h1 className="display-font mt-3 text-4xl text-primary-deep sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {service.description}
            </p>
            <ul className="mt-8 space-y-3">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="surface rounded-xl px-4 py-3 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Discuss farm software
              </Link>
              <a href={company.phoneHref} className="btn-secondary">
                {company.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
