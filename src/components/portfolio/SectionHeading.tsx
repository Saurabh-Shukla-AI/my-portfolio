type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  theme?: "light" | "dark";
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  theme = "light",
}: SectionHeadingProps) => {
  const isDark = theme === "dark";

  return (
    <div className="max-w-3xl space-y-4">
      <p
        className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] ${
          isDark
            ? "border border-teal-300/20 bg-teal-300/10 text-teal-200"
            : "border border-teal-500/20 bg-teal-500/8 text-teal-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${
          isDark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-2xl text-base leading-8 sm:text-lg ${
            isDark ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;