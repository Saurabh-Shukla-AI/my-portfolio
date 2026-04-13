import AbstractGraphic from "./AbstractGraphic";
import { siteContent } from "../../data/siteContent";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden px-3 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.16),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(15,23,42,0.12),_transparent_30%)]" />
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/70 bg-white/78 px-5 py-12 shadow-[0_40px_120px_-50px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full border border-teal-500/20 bg-teal-500/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-teal-700">
                  AI Portfolio
                </span>
                <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">
                  Available for roles and collaborations
                </span>
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-7xl">
                Hi, I&apos;m {siteContent.name}.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-700 sm:text-2xl">
                  {siteContent.role}
                </p>
                <p className="max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                  {siteContent.intro}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {siteContent.domains.map((domain) => (
                  <span
                    key={domain}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
              >
                Contact Me
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {siteContent.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,_rgba(255,255,255,0.95)_0%,_rgba(248,250,252,0.95)_100%)] p-5 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.3)]"
                >
                  <p className="text-sm font-semibold text-slate-950">{item.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <AbstractGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;