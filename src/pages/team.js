import Reveal from "@/components/motion/Reveal";
import SeoHead from "@/components/seo/SeoHead";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamCard from "@/components/ui/TeamCard";
import { company, team } from "@/data/company";
import { pageSeo } from "@/data/seo";
import Link from "next/link";

export default function TeamPage() {
  return (
    <>
      <SeoHead
        title={pageSeo.team.title}
        description={pageSeo.team.description}
        path="/team"
        keywords={pageSeo.team.keywords}
      />

      <section className="section-pad">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Our people"
              title="The team behind ALI AKBAR SOFTECH"
              description="Engineers and operators focused on delivery, customization, and long-term support."
            />
          </Reveal>

          <div className="mt-10 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.05} className="h-full">
                <TeamCard member={member} index={index} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-3">
              <Link href="/about" className="btn-secondary">
                About the company
              </Link>
              <Link href="/contact" className="btn-primary">
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
