import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const nav = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#services" },
  { label: "Values", href: "#values" },
  { label: "Bergen", href: "#bergen" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "glass py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-4 group">
          <img src={logo} alt="Bergvik Eiendom AS" className={`object-contain transition-all duration-700 group-hover:scale-105 ${scrolled ? "h-14 w-14" : "h-20 w-20"}`} />
          <div className="hidden sm:block">
            <div className="font-display text-xl text-gradient-gold leading-none">Bergvik</div>
            <div className="text-[10px] tracking-luxury text-muted-foreground uppercase mt-1.5">Eiendom AS</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-xs tracking-[0.22em] uppercase text-foreground/70 hover:text-gold transition-colors duration-500"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <span className="text-[10px] tracking-luxury uppercase text-gold">EN</span>
          <Link to="/no" className="text-[10px] tracking-luxury uppercase text-foreground/50 hover:text-gold transition-colors">NO</Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-gold/40 px-5 py-2.5 text-xs tracking-[0.22em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500"
          >
            Get in touch
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-px w-6 bg-gold transition-transform duration-500 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-gold transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-gold transition-transform duration-500 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ${
          open ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <div className="glass mx-6 px-6 py-6 flex flex-col gap-4">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.2em] uppercase text-foreground/80 hover:text-gold"
            >
              {n.label}
            </a>
          ))}
          <Link to="/no" onClick={() => setOpen(false)} className="text-sm tracking-[0.2em] uppercase text-foreground/60 hover:text-gold pt-2 border-t border-gold/15">Norsk</Link>
        </div>
      </div>
    </header>
  );
}
