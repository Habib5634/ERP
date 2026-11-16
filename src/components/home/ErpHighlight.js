import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { erpModules } from "@/data/erpModules";

const cardTones = [
  "border-l-primary bg-primary/5",
  "border-l-support bg-support/5",
  "border-l-accent bg-accent/5",
  "border-l-brand-yellow bg-brand-yellow/15",
  "border-l-primary-deep bg-primary/5",
  "border-l-support bg-support/5",
];

export default function ErpHighlight() {
  const preview = erpModules.slice(0, 6);

  return (
    <section className="section-pad pt-0">
      <div className="container-shell">
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] border border-line shadow-[0_18px_40px_-28px_rgba(20,82,40,0.45)]">
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              <div className="relative overflow-hidden bg-gradient-to-br from-primary-deep via-primary to-[#1a8f4a] p-8 text-white sm:p-10">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-yellow/20 blur-2xl" />
                <div className="pointer-events-none absolute bottom-0 left-10 h-28 w-28 rounded-full bg-support/25 blur-2xl" />
                <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow">
                  Flagship product
                </p>
                <h2 className="display-font relative mt-3 text-3xl text-white sm:text-4xl">
                  Hybrid Customized ERP
                </h2>
                <p className="relative mt-4 max-w-md text-sm leading-relaxed text-white/85">
                  Factory to finance in one system. Evolved from earlier CFMDI ERP
                  generations into a modern hybrid platform with AI, Supervision system,
                  and Pakistan tax readiness.
                </p>
                <Link
                  href="/services/erp"
                  className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-[#fff8e8] px-5 py-2.5 text-sm font-semibold !text-[#145228] transition hover:bg-brand-yellow"
                >
                  View full ERP modules
                  <ArrowRight size={16} className="!text-[#145228]" />
                </Link>
              </div>
              <div className="grid gap-3 bg-[#fff8e8] p-6 sm:grid-cols-2 sm:p-8">
                {preview.map((mod, index) => (
                  <div
                    key={mod.title}
                    className={`rounded-xl border border-line border-l-4 ${cardTones[index % cardTones.length]} p-4`}
                  >
                    <h3 className="text-sm font-semibold text-primary-deep">
                      {mod.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {mod.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
