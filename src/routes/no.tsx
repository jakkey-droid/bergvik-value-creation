import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import logo from "@/assets/logo.png";
import logoMark from "@/assets/logo-mark.png";
import heroImg from "@/assets/hero-bergen.jpg";
import architecture from "@/assets/architecture.jpg";
import bergen from "@/assets/bergen-aerial.jpg";

export const Route = createFileRoute("/no")({
  head: () => ({
    meta: [
      { title: "Bergvik Eiendom AS — Langsiktig verdiskaping gjennom eiendom" },
      {
        name: "description",
        content:
          "Bergvik Eiendom AS er et Bergens-basert eiendomsselskap med fokus på strategiske investeringer, eiendomsutvikling og langsiktig vekst.",
      },
      { property: "og:title", content: "Bergvik Eiendom AS — Eiendomsinvesteringer i Bergen" },
      { property: "og:description", content: "Strategiske investeringer, eiendomsutvikling og langsiktig vekst — forankret i Bergen." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nb_NO" },
    ],
  }),
  component: IndexNo,
});

const nav = [
  { label: "Om Oss", href: "#about" },
  { label: "Hva Vi Gjør", href: "#services" },
  { label: "Verdier", href: "#values" },
  { label: "Bergen", href: "#bergen" },
  { label: "Kontakt", href: "#contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "glass py-3" : "bg-transparent py-6"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-4 group">
          <img src={logoMark} alt="Bergvik Eiendom AS" className={`object-contain transition-all duration-700 group-hover:scale-105 ${scrolled ? "h-11 w-18" : "h-14 w-24"}`} />
          <div className="hidden sm:block">
            <div className="font-display text-xl text-gradient-gold leading-none">Bergvik</div>
            <div className="text-[10px] tracking-luxury text-muted-foreground uppercase mt-1">Eiendom AS</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-xs tracking-[0.22em] uppercase text-foreground/70 hover:text-gold transition-colors duration-500">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <Link to="/" className="text-[10px] tracking-luxury uppercase text-foreground/50 hover:text-gold transition-colors">EN</Link>
          <span className="text-[10px] tracking-luxury uppercase text-gold">NO</span>
          <a href="#contact" className="inline-flex items-center gap-2 border border-gold/40 px-5 py-2.5 text-xs tracking-[0.22em] uppercase text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500">
            Ta Kontakt
          </a>
        </div>

        <button aria-label="Meny" onClick={() => setOpen((v) => !v)} className="md:hidden flex flex-col gap-1.5 p-2">
          <span className={`block h-px w-6 bg-gold transition-transform duration-500 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-gold transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-gold transition-transform duration-500 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-700 ${open ? "max-h-96 mt-4" : "max-h-0"}`}>
        <div className="glass mx-6 px-6 py-6 flex flex-col gap-4">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm tracking-[0.2em] uppercase text-foreground/80 hover:text-gold">
              {n.label}
            </a>
          ))}
          <Link to="/" className="text-sm tracking-[0.2em] uppercase text-foreground/60 hover:text-gold pt-2 border-t border-gold/15">English</Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Bergen skyline i blå time" className="h-full w-full object-cover scale-105" width={1920} height={1280} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-radial-gold opacity-60" />
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-gold/10 blur-[120px] animate-float-slow" />
        <div className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-gold-dark/10 blur-[120px] animate-float-slow" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 lg:px-10 pt-32 pb-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8 animate-fade-up">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] tracking-luxury uppercase text-gold">Bergen · Norge</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] text-foreground animate-fade-up delay-100">
            Bygger <span className="italic text-gradient-gold">langsiktige verdier</span><br />
            gjennom eiendom.
          </h1>

          <p className="mt-10 max-w-2xl text-lg text-foreground/70 leading-relaxed font-light animate-fade-up delay-200">
            Bergvik Eiendom AS er et Bergens-basert eiendomsselskap med fokus på strategiske
            investeringer, eiendomsutvikling og langsiktig vekst.
          </p>

          <div className="mt-12 flex flex-wrap gap-5 animate-fade-up delay-300">
            <a href="#about" className="group relative inline-flex items-center gap-3 bg-gradient-gold px-8 py-4 text-xs tracking-luxury uppercase text-primary-foreground font-medium overflow-hidden transition-all duration-500 hover:shadow-gold">
              <span className="relative z-10">Vår Profil</span>
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="group inline-flex items-center gap-3 border border-gold/40 px-8 py-4 text-xs tracking-luxury uppercase text-gold hover:bg-gold/10 hover:border-gold transition-all duration-500">
              Kontakt Oss
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 mx-auto max-w-7xl px-6 lg:px-10 flex items-end justify-between animate-fade-up delay-500">
          <div className="hidden sm:flex items-center gap-3 text-[10px] tracking-luxury uppercase text-muted-foreground">
            <span className="h-px w-8 bg-gold/50" /> Bla
          </div>
          <img src={logo} alt="" aria-hidden className="hidden lg:block h-20 w-20 object-contain opacity-40" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 reveal">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={architecture} alt="Moderne skandinavisk arkitektur" loading="lazy" className="h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-105" />
              <div className="absolute inset-0 border border-gold/30 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 h-24 w-24 border border-gold hidden lg:block" />
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] tracking-luxury uppercase text-gold">01 — Om Oss</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-10">
              En visjon om <span className="italic text-gradient-gold">varige verdier</span> i norsk eiendom.
            </h2>
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed font-light max-w-2xl">
              <p>
                Bergvik Eiendom AS ble grunnlagt med en visjon om å skape langsiktige verdier
                gjennom eiendomsinvesteringer og eiendomsutvikling.
              </p>
              <p>
                Ved å kombinere markedsforståelse, strategisk tenkning og praktisk gjennomføring,
                fokuserer selskapet på å identifisere og utvikle muligheter med varig potensial.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { k: "Bergen", v: "Hovedkontor" },
                { k: "Langsiktig", v: "Horisont" },
                { k: "Strategisk", v: "Tilnærming" },
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

const services = [
  { n: "A", title: "Eiendomsinvesteringer", body: "Vi identifiserer og investerer i eiendommer med sterkt langsiktig potensial og muligheter for verdiskaping." },
  { n: "B", title: "Oppkjøp & Utvikling", body: "Vi analyserer markeder, beliggenhet og eiendomspotensial for å ta strategiske investeringsbeslutninger." },
  { n: "C", title: "Eiendomsdrift", body: "Vi fokuserer på strukturert eiendomsforvaltning, optimalisering og langsiktig driftsverdi." },
];

function Services() {
  return (
    <section id="services" className="relative py-32 lg:py-48 border-t border-gold/10">
      <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl reveal">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] tracking-luxury uppercase text-gold">02 — Hva Vi Gjør</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
            Tre disipliner.<br />
            <span className="italic text-gradient-gold">Ett langsiktig perspektiv.</span>
          </h2>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <article key={s.title} className="group reveal relative bg-card border border-gold/15 p-10 lg:p-12 hover-lift overflow-hidden" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="absolute top-0 right-0 font-display text-[8rem] leading-none text-gold/5 group-hover:text-gold/15 transition-colors duration-700 select-none pointer-events-none">
                {s.n}
              </div>
              <div className="relative">
                <div className="text-[10px] tracking-luxury uppercase text-gold/70 mb-6">{String(i + 1).padStart(2, "0")} / 03</div>
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

const values = [
  { t: "Langsiktig Tenkning", d: "Beslutninger målt i tiår, ikke kvartaler." },
  { t: "Tillit", d: "Relasjoner bygget på integritet og diskresjon." },
  { t: "Kvalitet", d: "Kompromissløse standarder i hvert prosjekt." },
  { t: "Lokal Ekspertise", d: "Dyp kjennskap til Bergens eiendomsmarked." },
];

function Values() {
  return (
    <section id="values" className="relative py-32 lg:py-44 border-t border-gold/10 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 reveal">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] tracking-luxury uppercase text-gold">03 — Verdier</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Prinsipper som <span className="italic text-gradient-gold">veileder oss</span>.
            </h2>
            <p className="mt-8 text-foreground/65 leading-relaxed font-light max-w-md">
              Fire overbevisninger former hvordan vi investerer, drifter og samarbeider — stille,
              konsekvent og med skandinavisk nøkternhet.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-gold/15">
            {values.map((v, i) => (
              <div key={v.t} className="reveal group relative bg-background p-10 lg:p-12 transition-colors duration-700 hover:bg-card" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-[10px] tracking-luxury uppercase text-gold/70 mb-4">0{i + 1}</div>
                <h3 className="font-display text-2xl lg:text-3xl mb-4 group-hover:text-gradient-gold transition-colors">{v.t}</h3>
                <p className="text-foreground/55 leading-relaxed font-light text-sm">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Bergen() {
  return (
    <section id="bergen" className="relative overflow-hidden">
      <div className="relative h-[80vh] min-h-[600px]">
        <img src={bergen} alt="Flyfoto av Bergen" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />

        <div className="relative z-10 mx-auto h-full max-w-7xl px-6 lg:px-10 flex items-center">
          <div className="max-w-2xl reveal">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] tracking-luxury uppercase text-gold">04 — Bergen</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Forankret i <span className="italic text-gradient-gold">Bergen</span>.<br />
              Bygget på lokal innsikt.
            </h2>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed font-light">
              Bergvik Eiendom AS opererer i et av Norges mest dynamiske og attraktive
              eiendomsmarkeder — og kombinerer lokal innsikt med langsiktige investeringsperspektiver.
            </p>
            <div className="mt-12 flex flex-wrap gap-8 text-foreground/70">
              {[
                { k: "60.39° N", v: "Breddegrad" },
                { k: "7 Fjell", v: "Omkranset" },
                { k: "Hanseatisk", v: "Arv" },
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

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const field = "w-full bg-transparent border-b border-gold/20 focus:border-gold py-4 px-1 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors duration-500 font-light";

  return (
    <section id="contact" className="relative py-32 lg:py-48 border-t border-gold/10">
      <div className="absolute inset-0 bg-radial-gold opacity-25 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 reveal">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] tracking-luxury uppercase text-gold">05 — Kontakt</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-10">
              La oss <span className="italic text-gradient-gold">snakkes</span>.
            </h2>
            <p className="text-foreground/65 leading-relaxed font-light max-w-md">
              For henvendelser om samarbeid, investeringsmuligheter eller generelle spørsmål —
              vi hører gjerne fra deg.
            </p>

            <div className="mt-14 space-y-6 text-sm">
              <div>
                <div className="text-[10px] tracking-luxury uppercase text-gold/70 mb-1">Kontor</div>
                <div className="text-foreground/80">Bergen, Norge</div>
              </div>
              <div>
                <div className="text-[10px] tracking-luxury uppercase text-gold/70 mb-1">Åpningstider</div>
                <div className="text-foreground/80">Mandag – Fredag · 09:00 – 17:00</div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 reveal space-y-2">
            <div className="grid sm:grid-cols-2 gap-x-8">
              <div className="py-2">
                <label className="text-[10px] tracking-luxury uppercase text-gold/70">Navn</label>
                <input required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} placeholder="Ditt fulle navn" />
              </div>
              <div className="py-2">
                <label className="text-[10px] tracking-luxury uppercase text-gold/70">E-post</label>
                <input required type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} placeholder="deg@eksempel.no" />
              </div>
            </div>
            <div className="py-2">
              <label className="text-[10px] tracking-luxury uppercase text-gold/70">Telefon</label>
              <input type="tel" maxLength={40} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={field} placeholder="+47 ..." />
            </div>
            <div className="py-2">
              <label className="text-[10px] tracking-luxury uppercase text-gold/70">Melding</label>
              <textarea required rows={5} maxLength={1500} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${field} resize-none`} placeholder="Hvordan kan vi hjelpe?" />
            </div>

            <div className="pt-8 flex items-center gap-6">
              <button type="submit" className="group inline-flex items-center gap-3 bg-gradient-gold px-10 py-4 text-xs tracking-luxury uppercase text-primary-foreground font-medium hover:shadow-gold transition-all duration-500">
                Send Melding
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </button>
              {sent && (
                <span className="text-xs tracking-luxury uppercase text-gold animate-fade-up">
                  Takk — vi tar kontakt snart.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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
                <div className="text-[10px] tracking-luxury uppercase text-muted-foreground mt-1">Bergen · Norge</div>
              </div>
            </div>
            <p className="mt-8 text-foreground/55 leading-relaxed font-light max-w-sm italic font-display text-lg">
              "Langsiktig verdiskaping gjennom eiendom."
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] tracking-luxury uppercase text-gold/70 mb-5">Naviger</div>
            <ul className="space-y-3 text-sm text-foreground/70">
              {[
                ["Om Oss", "#about"], ["Hva Vi Gjør", "#services"],
                ["Verdier", "#values"], ["Bergen", "#bergen"], ["Kontakt", "#contact"],
              ].map(([l, h]) => (
                <li key={h}><a href={h} className="hover:text-gold transition-colors duration-500">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] tracking-luxury uppercase text-gold/70 mb-5">Kontor</div>
            <address className="not-italic text-sm text-foreground/70 leading-relaxed">
              Bergvik Eiendom AS<br />
              Bergen, Norge
            </address>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gold/10 flex flex-col sm:flex-row justify-between gap-4 text-[10px] tracking-luxury uppercase text-muted-foreground">
          <div>© {new Date().getFullYear()} Bergvik Eiendom AS — Alle rettigheter forbeholdt</div>
          <div>Laget i Bergen</div>
        </div>
      </div>
    </footer>
  );
}

function IndexNo() {
  useReveal();
  return (
    <main className="bg-background text-foreground antialiased">
      <Header />
      <Hero />
      <About />
      <Services />
      <Values />
      <Bergen />
      <Contact />
      <Footer />
    </main>
  );
}
