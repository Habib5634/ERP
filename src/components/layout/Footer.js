import Link from "next/link";
import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";
import BrandLogo from "@/components/brand/BrandLogo";
import { company } from "@/data/company";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-line bg-gradient-to-br from-primary-deep via-[#176338] to-primary font-sans text-white"
      style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif" }}
    >
      <div className="brand-ribbon relative" />

      <div className="container-shell relative grid gap-8 py-8 md:grid-cols-[1.2fr_1fr_1.1fr] md:gap-6 md:py-9">
        <div>
          <BrandLogo href="/" size="md" showWordmark={false} />
          <p
            className="mt-3 text-2xl leading-none text-white"
            style={{ fontFamily: "var(--font-instrument), Georgia, serif" }}
          >
            {company.brandShort}
          </p>
          <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
            {company.legalName}
          </p>
          <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-white/75">
            {company.slogan}. {company.tagline}.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#fff8e8] px-4 py-2 text-sm font-semibold !text-[#145228] transition hover:bg-brand-yellow"
            style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif" }}
          >
            Start a conversation
            <ArrowRight size={15} className="!text-[#145228]" />
          </Link>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow">
            Services
          </p>
          <ul className="mt-3 space-y-1.5 text-sm font-medium text-white/85">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="transition hover:text-brand-yellow"
                >
                  {s.shortTitle}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/financial-services"
                className="transition hover:text-brand-yellow"
              >
                Financial Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow">
            Reach us
          </p>
          <ul className="mt-3 space-y-2 text-sm font-medium text-white/90">
            <li>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2.5 transition hover:text-brand-yellow"
              >
                <Phone size={14} className="shrink-0 text-brand-yellow" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2.5 transition hover:text-brand-yellow"
              >
                <Mail size={14} className="shrink-0 text-brand-yellow" />
                <span className="break-all">{company.email}</span>
              </a>
            </li>
            <li>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 transition hover:text-brand-yellow"
              >
                <MessageCircle size={14} className="shrink-0 text-brand-yellow" />
                WhatsApp chat
              </a>
            </li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-2.5 text-sm font-medium text-white/80">
            <Link href="/about" className="hover:text-brand-yellow">
              About
            </Link>
            <span className="text-white/30">·</span>
            <Link href="/team" className="hover:text-brand-yellow">
              Team
            </Link>
            <span className="text-white/30">·</span>
            <Link href="/contact" className="hover:text-brand-yellow">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/15 bg-black/10">
        <div className="container-shell flex flex-col gap-1 py-3.5 text-xs font-medium text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p>Customized ERP · Tax compliance · Industry software</p>
        </div>
      </div>
    </footer>
  );
}
