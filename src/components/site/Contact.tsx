import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only: simulate send
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
              <span className="text-[11px] tracking-luxury uppercase text-gold">05 — Contact</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-10">
              Let's <span className="italic text-gradient-gold">talk</span>.
            </h2>
            <p className="text-foreground/65 leading-relaxed font-light max-w-md">
              For partnership inquiries, investment opportunities or general questions —
              we'd be glad to hear from you.
            </p>

            <div className="mt-14 space-y-6 text-sm">
              <div>
                <div className="text-[10px] tracking-luxury uppercase text-gold/70 mb-1">Office</div>
                <div className="text-foreground/80">Bergen, Norway</div>
              </div>
              <div>
                <div className="text-[10px] tracking-luxury uppercase text-gold/70 mb-1">Hours</div>
                <div className="text-foreground/80">Monday – Friday · 09:00 – 17:00</div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 reveal space-y-2">
            <div className="grid sm:grid-cols-2 gap-x-8">
              <div className="py-2">
                <label className="text-[10px] tracking-luxury uppercase text-gold/70">Name</label>
                <input
                  required maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={field}
                  placeholder="Your full name"
                />
              </div>
              <div className="py-2">
                <label className="text-[10px] tracking-luxury uppercase text-gold/70">Email</label>
                <input
                  required type="email" maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="py-2">
              <label className="text-[10px] tracking-luxury uppercase text-gold/70">Phone</label>
              <input
                type="tel" maxLength={40}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={field}
                placeholder="+47 ..."
              />
            </div>
            <div className="py-2">
              <label className="text-[10px] tracking-luxury uppercase text-gold/70">Message</label>
              <textarea
                required rows={5} maxLength={1500}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${field} resize-none`}
                placeholder="How can we help?"
              />
            </div>

            <div className="pt-8 flex items-center gap-6">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-gradient-gold px-10 py-4 text-xs tracking-luxury uppercase text-primary-foreground font-medium hover:shadow-gold transition-all duration-500"
              >
                Send Message
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </button>
              {sent && (
                <span className="text-xs tracking-luxury uppercase text-gold animate-fade-up">
                  Thank you — we'll be in touch.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
