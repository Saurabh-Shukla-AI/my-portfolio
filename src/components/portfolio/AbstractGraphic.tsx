const AbstractGraphic = () => {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.22),_transparent_28%),linear-gradient(145deg,_#0f172a_0%,_#111827_42%,_#0f3b44_100%)] p-5 shadow-[0_48px_140px_-48px_rgba(15,23,42,0.72)] sm:p-6">
      <div className="absolute -right-16 top-8 h-44 w-44 rounded-full border border-white/10 bg-white/5 blur-3xl" />
      <div className="absolute left-8 top-12 h-24 w-24 rounded-full border border-teal-300/20 bg-teal-300/10 blur-2xl" />

      <div className="relative grid gap-4">
        <div className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/6 px-4 py-3 backdrop-blur-md">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-teal-200/90">System Profile</p>
            <p className="mt-2 text-lg font-semibold text-white">AI Engineering Stack</p>
          </div>
          <span className="rounded-full border border-teal-300/20 bg-teal-300/12 px-3 py-1 text-xs font-semibold text-teal-100">
            Online
          </span>
        </div>

        <div className="grid grid-cols-[1.1fr_0.9fr] gap-4">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-md">
            <div className="grid gap-4">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-slate-300">
                <span>Core Loop</span>
                <span>Realtime</span>
              </div>
              <div className="grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-300">Perception</p>
                  <p className="mt-2 text-base font-semibold text-white">Computer Vision</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-300">Reasoning</p>
                  <p className="mt-2 text-base font-semibold text-white">Generative + Agentic AI</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-300">Delivery</p>
                  <p className="mt-2 text-base font-semibold text-white">Frontend to Backend Integration</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Models</p>
              <p className="mt-8 text-4xl font-semibold text-white">12+</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Pipelines</p>
              <p className="mt-8 text-4xl font-semibold text-white">24</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Deployments</p>
              <p className="mt-8 text-4xl font-semibold text-white">08</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbstractGraphic;