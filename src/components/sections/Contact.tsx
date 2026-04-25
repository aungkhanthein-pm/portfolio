import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ExternalLink, GitBranch, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s connect
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            I&apos;m open to full-time roles, internship extensions, and
            interesting conversations. Feel free to reach out through any of the
            channels below.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 mb-10">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 rounded-lg border border-border/50 bg-card/40 backdrop-blur-sm p-5 card-glow hover:border-primary/60 hover:bg-card/60 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08), transparent)",
                  }}
                />

                {/* Animated border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
                  }}
                  animate={{
                    x: [-100, 100],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/15 text-primary flex items-center justify-center border border-primary/20 group-hover:bg-primary/25 transition-all duration-300 relative z-10"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <div className="flex-1 min-w-0 relative z-10">
                  <p className="text-xs text-muted-foreground mb-0.5 group-hover:text-primary/80 transition-colors duration-300">
                    {link.description}
                  </p>
                  <p className="text-sm font-medium truncate group-hover:text-primary transition-colors duration-300">
                    {link.value}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10">
                  {link.label} &rarr;
                </span>
              </motion.a>
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
