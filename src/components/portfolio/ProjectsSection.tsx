import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { siteContent } from "../../data/siteContent";

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Projects drawn directly from production use cases and delivery outcomes across AI domains."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {siteContent.projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_90px_-50px_rgba(15,23,42,0.3)] transition hover:-translate-y-1 hover:shadow-[0_36px_110px_-48px_rgba(15,23,42,0.4)]"
            >
              <div className="border-b border-slate-200 bg-[linear-gradient(145deg,_rgba(15,23,42,0.98)_0%,_rgba(30,41,59,0.98)_55%,_rgba(13,148,136,0.92)_100%)] p-6 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-teal-200/90">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                  </div>
                  <div className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-medium text-slate-100">
                    {project.stack[0]}
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {project.stack.slice(0, 3).map((tech) => (
                    <div key={tech} className="rounded-2xl border border-white/10 bg-white/6 px-3 py-4 text-center text-xs font-medium uppercase tracking-[0.18em] text-slate-200">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex h-full flex-col p-6">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Objective
                    </p>
                    <p className="text-sm leading-7 text-slate-600">{project.objective}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Outcome
                    </p>
                    <p className="text-sm leading-7 text-slate-600">{project.outcome}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 pt-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
                    >
                      <FiGithub className="size-4" />
                      GitHub
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                    >
                      <FiArrowUpRight className="size-4" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
                      Live demo coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;