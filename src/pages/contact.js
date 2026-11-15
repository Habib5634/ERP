import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/motion/Reveal";
import SeoHead from "@/components/seo/SeoHead";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/company";
import { pageSeo } from "@/data/seo";
import { Mail, Phone, MessageCircle } from "lucide-react";

const channels = [
  {
    href: company.phoneHref,
    label: "Phone",
    value: company.phone,
    icon: Phone,
    tile: "icon-tile-green",
    external: false,
  },
  {
    href: `mailto:${company.email}`,
    label: "Email",
    value: company.email,
    icon: Mail,
    tile: "icon-tile-orange",
    external: false,
  },
  {
    href: company.whatsapp,
    label: "WhatsApp",
    value: "Chat with us",
    icon: MessageCircle,
    tile: "icon-tile-blue",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <SeoHead
        title={pageSeo.contact.title}
        description={pageSeo.contact.description}
        path="/contact"
        keywords={pageSeo.contact.keywords}
      />

      <section className="section-pad relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 top-10 h-64 w-64 rounded-full bg-support/15 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="container-shell relative grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s talk about your ERP or compliance needs"
              description="Reach Usman Akbar’s team for ERP demos and customization, or Umer Akbar for tax filing and compliance support."
            />
            <div className="mt-8 space-y-4">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="surface surface-accent flex items-center gap-4 rounded-2xl p-5 pl-6 transition hover:-translate-y-0.5 hover:border-primary/25"
                  >
                    <span className={`icon-tile ${channel.tile}`}>
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-muted">
                        {channel.label}
                      </span>
                      <span className="font-semibold text-primary-deep">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
