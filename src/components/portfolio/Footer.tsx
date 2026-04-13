import { siteContent } from "../../data/siteContent";

const Footer = () => {
  return (
    <footer className="px-3 pb-8 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-[2rem] border border-white/70 bg-white/80 px-5 py-6 text-sm text-slate-500 shadow-[0_20px_60px_-38px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>© 2026 {siteContent.name}. All rights reserved.</p>
        <p>Designed for a modern AI engineering portfolio experience.</p>
      </div>
    </footer>
  );
};

export default Footer;