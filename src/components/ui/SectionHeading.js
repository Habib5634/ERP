export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignClass = align === "center" ? "mx-auto text-center items-center" : "";

  return (
    <div className={`flex max-w-2xl flex-col ${alignClass}`}>
      {eyebrow ? (
        <>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
          <span
            className={`mt-3 block h-1 w-14 rounded-full bg-gradient-to-r from-primary via-brand-yellow to-support ${
              align === "center" ? "mx-auto" : ""
            }`}
          />
        </>
      ) : null}
      <h2 className="display-font mt-3 text-3xl leading-tight text-primary-deep sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
