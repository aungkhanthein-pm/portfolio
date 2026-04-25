import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center section-padding overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, hsl(224 76% 65% / 0.12), transparent)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs text-primary font-medium mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Open to full-time opportunities
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Hi, I'm <span className="text-primary">William</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
          Software Engineering Intern who contributed to real features across full-stack applications, AI integrations, infrastructure, and security testing.
        </p>

        {/* Tech stack */}
        <p className="text-sm text-primary/80 font-medium tracking-wide mb-10">
          React · TypeScript · Node.js · AI · APIs · Security
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="group"
          >
            <a href="#projects">
              View Projects
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group"
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group"
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
