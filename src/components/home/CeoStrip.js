import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { ceo, company } from "@/data/company";

export default function CeoStrip() {
  return (
    <section className="section-pad pt-0">
      <div className="container-shell">
        <Reveal>
          <div className="surface flex flex-col items-start gap-6 rounded-[1.75rem] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Leadership
              </p>
              <h2 className="display-font mt-3 text-3xl text-primary-deep">
                {ceo.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-foreground/80">{ceo.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{ceo.bio}</p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <Link href="/team" className="btn-primary">
                Meet the team
              </Link>
              <a href={company.phoneHref} className="btn-secondary">
                {company.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
