import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ExternalLink, GitBranch, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "akhpsnm@gmail.com",
    href: "mailto:akhpsnm@gmail.com",
    description: "Best way to reach me",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "linkedin.com/in/aungkhanthein",
    href: "https://www.linkedin.com/in/aungkhanthein",
    description: "Professional profile",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/aungkhanthein-pm",
    href: "https://github.com/aungkhanthein-pm",
    description: "Code and projects",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        <div
          ref={ref}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s connect
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            I&apos;m open to full-time roles, and interesting conversations. Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-10">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <div
                key={link.label}
              >
                <SpotlightCard
                  className="p-5"
                >
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 w-full"
                  >
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/15 text-primary flex items-center justify-center border border-primary/20 group-hover:bg-primary/25 transition-all duration-300"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground mb-0.5 group-hover:text-primary/80 transition-colors duration-300">
                        {link.description}
                      </p>
                      <p className="text-sm font-medium truncate group-hover:text-primary transition-colors duration-300">
                        {link.value}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {link.label} &rarr;
                    </span>
                  </a>
                </SpotlightCard>
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" variant="outline" className="font-semibold">
              {/* EDIT: Replace /resume.pdf with your actual resume path */}
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
