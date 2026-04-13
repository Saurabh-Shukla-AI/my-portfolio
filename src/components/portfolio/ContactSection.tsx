import { FormEvent, useState } from "react";
import { FiGithub, FiGlobe, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { siteContent } from "../../data/siteContent";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
};

const ContactSection = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${formState.name || "Website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );

    window.location.href = `mailto:${siteContent.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-3 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2.25rem] border border-slate-200 bg-[linear-gradient(145deg,_#0f172a_0%,_#111827_55%,_#134e4a_100%)] p-6 text-white shadow-[0_42px_120px_-56px_rgba(15,23,42,0.72)] sm:p-8">
          <div className="space-y-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s build something useful."
            description="If you are working on AI products, intelligent automation, or computer vision systems, I am open to discussing roles, collaborations, and product ideas."
            theme="dark"
          />

          <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
            <a
              href={`mailto:${siteContent.email}`}
              className="flex items-center gap-3 text-sm text-slate-100 transition hover:text-white"
            >
              <FiMail className="size-5 text-teal-300" />
              {siteContent.email}
            </a>
            <a
              href={`tel:${siteContent.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 text-sm text-slate-100 transition hover:text-white"
            >
              <FiPhone className="size-5 text-teal-300" />
              {siteContent.phone}
            </a>
            <a
              href={siteContent.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-slate-100 transition hover:text-white"
            >
              <FiGithub className="size-5 text-teal-300" />
              GitHub
            </a>
            <a
              href={siteContent.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-slate-100 transition hover:text-white"
            >
              <FiLinkedin className="size-5 text-teal-300" />
              LinkedIn
            </a>
            <a
              href={siteContent.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-slate-100 transition hover:text-white"
            >
              <FiGlobe className="size-5 text-teal-300" />
              NovyPro Profile
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Response Style</p>
              <p className="mt-3 text-base font-semibold text-white">Clear, technical, and direct</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Open To</p>
              <p className="mt-3 text-base font-semibold text-white">AI roles, freelance work, and product collaborations</p>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Certifications</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {siteContent.certifications.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2.25rem] border border-slate-200/80 bg-white/92 p-6 shadow-[0_32px_100px_-48px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-8">
          <div className="grid gap-5">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">Start a conversation</p>
              <p className="text-sm leading-7 text-slate-500">
                Share the problem space, expected outcome, and any technical context that matters.
              </p>
            </div>
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formState.name}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, name: event.target.value }))
                }
                placeholder="Your name"
                className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formState.email}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, email: event.target.value }))
                }
                placeholder="you@example.com"
                className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
                required
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, message: event.target.value }))
                }
                placeholder="Tell me about your project, role, or collaboration idea."
                rows={6}
                className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;