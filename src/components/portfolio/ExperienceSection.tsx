import SectionHeading from "./SectionHeading";
import { siteContent } from "../../data/siteContent";

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Experience"
          title="Built across teams, clients, and production environments."
          description="A focused view of the roles, domains, and delivery outcomes that shape how I approach AI engineering today."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {siteContent.experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_28px_90px_-52px_rgba(15,23,42,0.28)]"
            >
              <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
                    {item.location}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {item.role}
                  </h3>
                  <p className="text-base font-medium text-slate-600">{item.company}</p>
                </div>
                <span className="inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                  {item.period}
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {item.bullets.map((bullet) => (
                  <div key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-500" />
                    <p className="text-sm leading-7 text-slate-600">{bullet}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;