import architecture from "@/assets/architecture.jpg";

export function About() {
  return (
    <section id="about" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={architecture}
                alt="Modern Scandinavian architecture"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-105"
              />
              <div className="absolute inset-0 border border-gold/30 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 h-24 w-24 border border-gold hidden lg:block" />
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] tracking-luxury uppercase text-gold">01 — About</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-10">
              A vision for <span className="italic text-gradient-gold">lasting value</span> in Norwegian real estate.
            </h2>
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed font-light max-w-2xl">
              <p>
                Bergvik Eiendom AS was founded with a vision of creating long-term value through
                real estate investments and property development.
              </p>
              <p>
                By combining market understanding, strategic thinking and practical execution, the
                company focuses on identifying and developing opportunities with lasting potential.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { k: "Bergen", v: "Headquarters" },
                { k: "Long-term", v: "Horizon" },
                { k: "Strategic", v: "Approach" },
              ].map((s) => (
                <div key={s.k} className="border-t border-gold/30 pt-4">
                  <div className="font-display text-2xl text-gradient-gold">{s.k}</div>
                  <div className="text-[10px] tracking-luxury uppercase text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
