import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

const accentMap = {
  blue: "from-primary/20 via-brand-yellow/10 to-transparent",
  green: "from-support/20 via-primary/10 to-transparent",
  orange: "from-accent/22 via-brand-yellow/12 to-transparent",
  navy: "from-primary-deep/18 via-support/10 to-transparent",
};

const edgeMap = {
  blue: "border-l-primary",
  green: "border-l-support",
  orange: "border-l-accent",
  navy: "border-l-primary-deep",
};

export default function ServicesStrip() {
  return (
    <section className="section-pad pt-0">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="What we deliver"
            title="Software and compliance for growing businesses"
            description="From flagship ERP to farm systems and tax filing — practical software with a professional delivery team."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06}>
              <Link
                href={service.href}
                className={`surface group relative block overflow-hidden rounded-2xl border-l-4 ${edgeMap[service.accent]} p-6 transition hover:-translate-y-0.5`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentMap[service.accent]}`}
                />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        {service.eyebrow}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-primary-deep">
                        {service.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-line bg-white/80 p-2 text-primary transition group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-support group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
