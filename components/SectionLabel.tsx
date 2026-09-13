export default function SectionLabel({
  index,
  title,
  light = false,
}: {
  index: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 mb-10 md:mb-16">
      <span
        className={`font-mono text-xs tracking-[0.2em] ${
          light ? "text-ink/50" : "text-gold"
        }`}
      >
        {index}
      </span>
      <span className={`h-px flex-1 ${light ? "bg-ink/15" : "bg-slate-line"}`} />
      <span
        className={`font-mono text-xs tracking-[0.2em] uppercase ${
          light ? "text-ink/60" : "text-paper/50"
        }`}
      >
        {title}
      </span>
    </div>
  );
}
