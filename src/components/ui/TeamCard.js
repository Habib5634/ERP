import Image from "next/image";

function initials(name) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const tones = [
  "bg-primary text-white",
  "bg-support text-white",
  "bg-accent text-white",
  "bg-brand-yellow text-primary-deep",
  "bg-primary-deep text-white",
];

export default function TeamCard({ member, index = 0 }) {
  const avatarTone = member.featured
    ? "bg-gradient-to-br from-primary to-primary-deep text-white"
    : tones[index % tones.length];

  return (
    <article
      className={`surface relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl p-6 ${
        member.featured ? "ring-1 ring-primary/30" : ""
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-brand-yellow to-support" />
      {member.photo ? (
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/15">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className={`grid h-20 w-20 shrink-0 place-items-center rounded-full text-base font-bold ${avatarTone}`}
        >
          {initials(member.name)}
        </div>
      )}
      <h3 className="mt-5 text-lg font-semibold text-primary-deep">
        {member.name}
      </h3>
      <div className="mt-1 flex min-h-[4.5rem] flex-1 flex-col">
        <p className="text-sm leading-relaxed text-muted">{member.role}</p>
        {member.experience ? (
          <p className="mt-auto pt-2 text-xs font-medium text-primary/80">
            {member.experience}
          </p>
        ) : null}
      </div>
    </article>
  );
}
