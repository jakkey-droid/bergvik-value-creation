const services = [
  {
    n: "A",
    title: "Real Estate Investments",
    body: "We identify and invest in properties with strong long-term potential and value creation opportunities.",
  },
  {
    n: "B",
    title: "Acquisition & Development",
    body: "We analyze markets, locations and property potential to make strategic investment decisions.",
  },
  {
    n: "C",
    title: "Property Operations",
    body: "We focus on structured property management, optimization and long-term operational value.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 lg:py-48 border-t border-gold/10">
      <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl reveal">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] tracking-luxury uppercase text-gold">02 — What We Do</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
            Three disciplines.<br />
            <span className="italic text-gradient-gold">One long-term perspective.</span>
          </h2>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group reveal relative bg-card border border-gold/15 p-10 lg:p-12 hover-lift overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-0 right-0 font-display text-[8rem] leading-none text-gold/5 group-hover:text-gold/15 transition-colors duration-700 select-none pointer-events-none">
                {s.n}
              </div>
              <div className="relative">
                <div className="text-[10px] tracking-luxury uppercase text-gold/70 mb-6">
                  {String(i + 1).padStart(2, "0")} / 03
                </div>
                <h3 className="font-display text-2xl lg:text-3xl mb-6 leading-snug">{s.title}</h3>
                <p className="text-foreground/65 leading-relaxed font-light">{s.body}</p>
                <div className="mt-10 h-px w-12 bg-gold/40 group-hover:w-24 transition-all duration-700" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
