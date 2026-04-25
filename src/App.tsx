import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Impact } from "@/components/sections/Impact";
import { Contact } from "@/components/sections/Contact";
import { BackgroundEffects } from "@/components/effects/BackgroundEffects";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <BackgroundEffects />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
