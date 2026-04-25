import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Cpu, Shield, Wrench } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const highlights = [
  {
    icon: Layers,
    label: "Full-Stack Development",
    description: "Built and maintained features across React frontends, Node.js backends, and Electron desktop apps.",
  },
  {
    icon: Cpu,
    label: "AI Integration",
    description: "Connected local LLMs to real application data for intelligent report summaries and natural language assistance.",
  },
  {
    icon: Wrench,
    label: "Infrastructure & APIs",
    description: "Tested SMS gateway setups, supported API catalog work with authentication, and validated network endpoints.",
  },
  {
    icon: Shield,
    label: "Security & QA",
    description: "Performed structured checks for XSS, SQL injection, CSRF, and validation behavior, with UAT documentation and bug reporting.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding bg-secondary/20 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Built on real systems, not school projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {/* EDIT: Personalise this paragraph with your own story */}
            During my internship, I worked across real business software used by 
            teams and customers. I contributed to a full-stack desktop platform, 
            integrated a local AI assistant, supported API development, worked on 
            licensing logic, tested SMS hardware, and prepared structured security 
            and QA documentation — all within the same engineering team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <SpotlightCard className="p-5 h-full flex flex-col">
                  <motion.div
                    className="mb-3 inline-flex items-center justify-center w-9 h-9 rounded-md bg-primary/15 text-primary group-hover:bg-primary/25 transition-all duration-300 border border-primary/20"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.div>
                  <h3 className="text-sm font-semibold mb-1.5 group-hover:text-primary transition-colors duration-300">
                    {item.label}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {item.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
