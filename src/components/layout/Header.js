"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import BrandLogo from "@/components/brand/BrandLogo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/services/erp", label: "ERP" },
  { href: "/financial-services", label: "Financial Services" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

function isActive(href, pathname) {
  if (href === "/services") {
    if (pathname === "/services") return true;
    if (!pathname.startsWith("/services/")) return false;
    return pathname !== "/services/erp";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navClass(active) {
  return [
    "relative text-sm font-medium transition-colors duration-200",
    "after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:transition-opacity after:duration-200",
    active
      ? "text-primary after:bg-primary after:opacity-100"
      : "text-foreground/75 after:bg-primary after:opacity-0 hover:text-primary hover:after:opacity-60",
  ].join(" ");
}

function mobileNavClass(active) {
  return [
    "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors duration-200",
    active
      ? "bg-primary text-white"
      : "text-foreground/85 hover:bg-primary/8 hover:text-primary",
  ].join(" ");
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-[rgba(248,241,223,0.92)] backdrop-blur-md">
        <div className="brand-ribbon" />
        <div className="container-shell flex h-[4.5rem] items-center justify-between gap-4 sm:h-20">
          <BrandLogo size="md" onClick={() => setOpen(false)} />

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) => {
              const active = isActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={navClass(active)}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn-primary !px-4 !py-2 text-sm">
              Get in touch
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex rounded-lg border border-line bg-white/70 p-2 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile sidebar drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-primary-deep/45 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />

        <aside
          className={`absolute inset-y-0 right-0 flex w-[min(20rem,88vw)] flex-col bg-[#fffaf0] shadow-[-12px_0_40px_-20px_rgba(20,82,40,0.45)] transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="brand-ribbon" />
          <div className="flex items-center justify-between border-b border-line px-4 py-4">
            <BrandLogo size="sm" onClick={() => setOpen(false)} />
            <button
              type="button"
              className="inline-flex rounded-lg border border-line bg-white p-2"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
            {links.map((link) => {
              const active = isActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={mobileNavClass(active)}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  {active ? <ArrowRight size={16} /> : null}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-line p-4">
            <Link
              href="/contact"
              className="btn-primary w-full"
              onClick={() => setOpen(false)}
            >
              Get in touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
