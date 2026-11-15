import { Cloud, ShieldCheck, Clock3 } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { pillars } from "@/data/company";

const visuals = [
  { Icon: Clock3, tile: "icon-tile-green", bar: "from-primary to-brand-yellow" },
  { Icon: Cloud, tile: "icon-tile-blue", bar: "from-support to-primary" },
  { Icon: ShieldCheck, tile: "icon-tile-orange", bar: "from-accent to-brand-yellow" },
];

export default function Pillars() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Why businesses choose us"
            title="Always on. Cloud ready. Built to trust."
            description="The same pillars that power our Hybrid Customized ERP — availability, access, and reliability."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const { Icon, tile, bar } = visuals[index];
            return (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <article className="surface relative h-full overflow-hidden rounded-2xl p-6">
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${bar}`}
                  />
                  <div className={`icon-tile ${tile}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary-deep">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
