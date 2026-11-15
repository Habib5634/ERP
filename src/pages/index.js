import Hero from "@/components/home/Hero";
import CompanyIntro from "@/components/home/CompanyIntro";
import Pillars from "@/components/home/Pillars";
import ServicesStrip from "@/components/home/ServicesStrip";
import ErpHighlight from "@/components/home/ErpHighlight";
import PackagesStrip from "@/components/home/PackagesStrip";
import ReviewsStrip from "@/components/home/ReviewsStrip";
import CeoStrip from "@/components/home/CeoStrip";
import Reveal from "@/components/motion/Reveal";
import SeoHead from "@/components/seo/SeoHead";
import JsonLd from "@/components/seo/JsonLd";
import { pageSeo } from "@/data/seo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SeoHead
        title={pageSeo.home.title}
        description={pageSeo.home.description}
        path="/"
        keywords={pageSeo.home.keywords}
      />
      <JsonLd />
      <Hero />
      <CompanyIntro />
      <Pillars />
      <ServicesStrip />
      <ErpHighlight />
      <PackagesStrip />
      <ReviewsStrip />
      <section className="section-pad pt-0">
        <div className="container-shell">
          <Reveal>
            <article className="surface rounded-[1.75rem] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Tax & compliance
              </p>
              <h2 className="display-font mt-3 text-3xl text-primary-deep">
                Income tax, sales tax, filing & compliances
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                Beyond software, ALI AKBAR SOFTECH supports filing and compliance so
                your records stay organized and audit-ready — led by Umer Akbar.
              </p>
              <Link href="/financial-services" className="btn-primary mt-8">
                Explore financial services
              </Link>
            </article>
          </Reveal>
        </div>
      </section>
      <CeoStrip />
    </>
  );
}
