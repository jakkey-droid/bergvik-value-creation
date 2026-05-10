import bergen from "@/assets/bergen-aerial.jpg";

export function Bergen() {
  return (
    <section id="bergen" className="relative overflow-hidden">
      <div className="relative h-[80vh] min-h-[600px]">
        <img
          src={bergen}
          alt="Aerial view of Bergen, Norway"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />

        <div className="relative z-10 mx-auto h-full max-w-7xl px-6 lg:px-10 flex items-center">
          <div className="max-w-2xl reveal">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] tracking-luxury uppercase text-gold">04 — Bergen</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Rooted in <span className="italic text-gradient-gold">Bergen</span>.<br />
              Built on local insight.
            </h2>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed font-light">
              Bergvik Eiendom AS operates in one of Norway's most dynamic and attractive
              real estate markets — combining local insight with long-term investment perspectives.
            </p>
            <div className="mt-12 flex flex-wrap gap-8 text-foreground/70">
              {[
                { k: "60.39° N", v: "Latitude" },
                { k: "7 Mountains", v: "Surrounded" },
                { k: "Hanseatic", v: "Heritage" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-gradient-gold">{s.k}</div>
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
