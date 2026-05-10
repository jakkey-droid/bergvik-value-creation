import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Values } from "@/components/site/Values";
import { Bergen } from "@/components/site/Bergen";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bergvik Eiendom AS — Long-Term Value Through Real Estate" },
      {
        name: "description",
        content:
          "Bergvik Eiendom AS is a Bergen-based real estate company focused on strategic investments, property development and long-term growth.",
      },
      { property: "og:title", content: "Bergvik Eiendom AS — Real Estate Investments in Bergen" },
      { property: "og:description", content: "Strategic investments, property development and long-term growth — rooted in Bergen, Norway." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
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
