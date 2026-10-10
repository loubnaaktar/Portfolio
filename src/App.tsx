import Cursor from "./components/Cursor";
import Particles from "./components/Particles";
import Nav from "./components/Nav";
import ContactDock from "./components/ContactDock";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Parcours from "./components/Parcours";
import WhyMe from "./components/WhyMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useI18n } from "./i18n";

export default function App() {
  const { t } = useI18n();
  return (
    <div className="relative text-snow font-body selection:bg-primary/40">
      {/* Effets globaux */}
      <div className="page-ambiance" aria-hidden="true" />
      <Cursor />
      <Particles />
      <div className="noise-overlay" aria-hidden="true" />

      <a
        href="#a-propos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-snow focus:font-mono focus:text-sm"
      >
        {t("a11y.skip")}
      </a>

      <Nav />
      <ContactDock />

      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Parcours />
        <WhyMe />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
