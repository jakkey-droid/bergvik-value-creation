import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-gold/15 pt-20 pb-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[20rem] bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Bergvik Eiendom AS" className="h-14 w-14 object-contain" />
              <div>
                <div className="font-display text-xl text-gradient-gold">Bergvik Eiendom AS</div>
                <div className="text-[10px] tracking-luxury uppercase text-muted-foreground mt-1">Bergen · Norway</div>
              </div>
            </div>
            <p className="mt-8 text-foreground/55 leading-relaxed font-light max-w-sm italic font-display text-lg">
              "Long-term value creation through real estate."
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-luxury uppercase text-gold/70 mb-5">Navigate</div>
            <ul className="space-y-3 text-sm text-foreground/70">
              {[
                ["About", "#about"], ["What We Do", "#services"],
                ["Values", "#values"], ["Bergen", "#bergen"], ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={h}><a href={h} className="hover:text-gold transition-colors duration-500">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] tracking-luxury uppercase text-gold/70 mb-5">Office</div>
            <address className="not-italic text-sm text-foreground/70 leading-relaxed">
              Bergvik Eiendom AS<br />
              Bergen, Norway
            </address>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gold/10 flex flex-col sm:flex-row justify-between gap-4 text-[10px] tracking-luxury uppercase text-muted-foreground">
          <div>© {new Date().getFullYear()} Bergvik Eiendom AS — All rights reserved</div>
          <div>Crafted in Bergen</div>
        </div>
      </div>
    </footer>
  );
}
