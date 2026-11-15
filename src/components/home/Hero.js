"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cloud, ShieldCheck, Clock3 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { company } from "@/data/company";

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
          <Image
            src="/logo-mark.png"
            alt={`${company.legalName} logo`}
            width={320}
            height={320}
            quality={100}
            className="h-36 w-auto object-contain sm:h-44 md:h-52"
            priority
          />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {company.legalName}
          </p>
          <h1 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Customized ERP & SaaS software that helps you manage, grow, and succeed.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Cloud ERP and business software for factories, farms, and trading in Pakistan —
            secure, FBR-ready, and shaped around how your operations actually run.
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
          <div className="surface relative overflow-hidden rounded-[1.75rem] p-6 shadow-[0_30px_80px_-40px_rgba(20,82,40,0.45)] sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-brand-yellow to-support" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Latest technology
            </p>
            <p className="display-font mt-3 text-3xl text-primary-deep">
              Hybrid Customized ERP
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              AI assistant, realtime dashboards, FBR & PRA invoices, dual accounting,
              face attendance, and Android supervision — one platform.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["Modules", "12+", "bg-primary/8"],
                ["Access", "Web + App", "bg-support/10"],
                ["Tax", "FBR / PRA", "bg-accent/10"],
                ["Uptime", "24/7", "bg-brand-yellow/20"],
              ].map(([label, value, tone]) => (
                <div
                  key={label}
                  className={`rounded-xl border border-line ${tone} px-4 py-3`}
                >
                  <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
                  <p className="mt-1 text-lg font-semibold text-primary-deep">{value}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted">
              Led by <span className="font-semibold text-foreground">Usman Akbar</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
