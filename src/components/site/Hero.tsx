import heroImg from "@/assets/hero-bergen.jpg";
import logo from "@/assets/logo.png";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Bergen skyline at blue hour"
          className="h-full w-full object-cover scale-105"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-radial-gold opacity-60" />
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-gold/10 blur-[120px] animate-float-slow" />
        <div className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-gold-dark/10 blur-[120px] animate-float-slow" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 lg:px-10 pt-32 pb-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8 animate-fade-up">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] tracking-luxury uppercase text-gold">Bergen · Norway · Est.</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] text-foreground animate-fade-up delay-100">
            Building <span className="italic text-gradient-gold">long-term value</span><br />
            through real estate.
          </h1>

          <p className="mt-10 max-w-2xl text-lg text-foreground/70 leading-relaxed font-light animate-fade-up delay-200">
            Bergvik Eiendom AS is a Bergen-based real estate company focused on strategic
            investments, property development and long-term growth.
          </p>

          <div className="mt-12 flex flex-wrap gap-5 animate-fade-up delay-300">
            <a
              href="#about"
              className="group relative inline-flex items-center gap-3 bg-gradient-gold px-8 py-4 text-xs tracking-luxury uppercase text-primary-foreground font-medium overflow-hidden transition-all duration-500 hover:shadow-gold"
            >
              <span className="relative z-10">Our Profile</span>
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-gold/40 px-8 py-4 text-xs tracking-luxury uppercase text-gold hover:bg-gold/10 hover:border-gold transition-all duration-500"
            >
              Contact Us
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 mx-auto max-w-7xl px-6 lg:px-10 flex items-end justify-between animate-fade-up delay-500">
          <div className="hidden sm:flex items-center gap-3 text-[10px] tracking-luxury uppercase text-muted-foreground">
            <span className="h-px w-8 bg-gold/50" /> Scroll
          </div>
          <img src={logo} alt="" aria-hidden className="hidden lg:block h-20 w-20 object-contain opacity-40" />
        </div>
      </div>
    </section>
  );
}
