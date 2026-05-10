const values = [
  { t: "Long-Term Thinking", d: "Decisions measured in decades, not quarters." },
  { t: "Trust", d: "Relationships built through integrity and discretion." },
  { t: "Quality", d: "Uncompromising standards across every project." },
  { t: "Local Expertise", d: "Deep knowledge of the Bergen property market." },
];

export function Values() {
  return (
    <section id="values" className="relative py-32 lg:py-44 border-t border-gold/10 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 reveal">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] tracking-luxury uppercase text-gold">03 — Values</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Principles that <span className="italic text-gradient-gold">guide us</span>.
            </h2>
            <p className="mt-8 text-foreground/65 leading-relaxed font-light max-w-md">
              Four convictions shape how we invest, operate and partner — quietly, consistently,
              and with a Scandinavian sense of restraint.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-gold/15">
            {values.map((v, i) => (
              <div
                key={v.t}
                className="reveal group relative bg-background p-10 lg:p-12 transition-colors duration-700 hover:bg-card"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-[10px] tracking-luxury uppercase text-gold/70 mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-display text-2xl lg:text-3xl mb-4 group-hover:text-gradient-gold transition-colors">
                  {v.t}
                </h3>
                <p className="text-foreground/55 leading-relaxed font-light text-sm">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
