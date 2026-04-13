import { useState } from "react";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import { siteContent } from "../../data/siteContent";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/80 px-4 py-3 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:px-6">
        <a href="#home" className="flex items-center gap-3 text-base font-semibold tracking-tight text-slate-950">
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-slate-950 text-xs font-bold uppercase tracking-[0.2em] text-white">
            SS
          </span>
          <span className="hidden sm:inline">{siteContent.name}</span>
        </a>

        <nav className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/80 p-1 md:flex">
          {siteContent.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${siteContent.email}`}
          className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 md:inline-flex"
        >
          Let&apos;s talk
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiOutlineXMark className="size-6" /> : <HiBars3 className="size-6" />}
        </button>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/70 bg-white/90 p-3 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.3)] backdrop-blur md:hidden">
          <nav className="flex flex-col gap-1">
            {siteContent.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${siteContent.email}`}
              onClick={handleNavClick}
              className="mt-2 inline-flex rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white"
            >
              Contact Me
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;