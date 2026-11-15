import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";

export default function BrandLogo({
  href = "/",
  size = "md",
  showWordmark = true,
  onClick,
  className = "",
}) {
  const heights = {
    sm: 56,
    md: 72,
    lg: 120,
  };
  const height = heights[size] || heights.md;
  // Request 2x pixels so the mark stays sharp on retina screens
  const intrinsic = height * 2;

  const content = (
    <>
      <Image
        src="/logo-mark.png"
        alt={`${company.legalName} logo`}
        width={intrinsic}
        height={intrinsic}
        quality={100}
        className="h-auto w-auto object-contain"
        style={{ height, width: "auto" }}
        priority
      />
      {showWordmark ? (
        <span className="leading-tight">
          <span className="display-font block text-lg text-primary-deep sm:text-xl">
            {company.brandShort}
          </span>
          <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
            {company.legalName}
          </span>
        </span>
      ) : null}
    </>
  );

  const classes = `inline-flex items-center gap-3 ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
