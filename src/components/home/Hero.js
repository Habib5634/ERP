"use client";

import Link from "next/link";
import { ArrowRight, Cloud, ShieldCheck, Clock3 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { company } from "@/data/company";

const erpHighlights = [
  "AI assistant & realtime dashboards",
  "FBR & PRA invoicing",
  "Dual accounting & face attendance",
  "Supervision system (web + mobile)",
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#fbc75a]/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#f5dc96]/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#e8b95a]/12 blur-3xl" />
      </div>

      <div className="container-shell relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="display-font text-4xl leading-none tracking-tight text-primary-deep sm:text-5xl md:text-6xl">
            {company.legalName}
          </p>
          <h1 className="mt-6 max-w-xl text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
            {company.slogan}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {company.intro} Our focus is factories, farms, and Trading System software —
            reliable, efficient, and built around how your business actually runs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/services/erp" className="btn-primary">
              Explore ERP
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Talk to us
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-5 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <Clock3 size={16} className="text-primary" /> 24/7 availability
            </span>
            <span className="inline-flex items-center gap-2">
              <Cloud size={16} className="text-primary" /> Cloud based
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary" /> Secure & reliable
            </span>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative border-l-2 border-primary/25 pl-6 sm:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Flagship platform
            </p>
            <p className="display-font mt-3 text-3xl text-primary-deep sm:text-4xl">
              Hybrid Customized ERP
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              One cloud platform for operations, accounting, tax compliance, and
              Supervision system — built for factories and growing businesses in Pakistan.
            </p>
            <ul className="mt-6 space-y-3">
              {erpHighlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted">
              Led by{" "}
              <span className="font-semibold text-foreground">Usman Akbar</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
