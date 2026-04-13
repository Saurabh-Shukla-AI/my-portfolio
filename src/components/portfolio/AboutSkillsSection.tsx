import SectionHeading from "./SectionHeading";
import { siteContent } from "../../data/siteContent";

const AboutSkillsSection = () => {
  return (
    <section id="about" className="px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <SectionHeading
            eyebrow="About"
            title="Shipping GenAI, agentic AI, and machine learning systems with measurable business impact."
            description={siteContent.about}
          />

          <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(145deg,_#0f172a_0%,_#111827_50%,_#134e4a_100%)] p-6 text-white shadow-[0_40px_120px_-52px_rgba(15,23,42,0.7)] sm:p-8">
            <div className="grid gap-5">
              {siteContent.principles.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="skills" className="rounded-[2.5rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Skills"
              title="Core capabilities"
              description="Grouped by the parts of the stack I use most often in production AI delivery."
            />
            <div className="grid gap-4 lg:grid-cols-2">
              {siteContent.skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)] p-5 shadow-[0_16px_40px_-30px_rgba(15,23,42,0.22)]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
                    <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkillsSection;