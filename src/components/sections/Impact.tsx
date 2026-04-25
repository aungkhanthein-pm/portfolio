import { motion } from "framer-motion";
import { useRef } from "react";
import { impactItems } from "@/data/portfolio";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import {
  CheckCircle2,
  Bug,
  Layers,
  Lightbulb,
  FileText,
  Wrench,
} from "lucide-react";

const icons = [CheckCircle2, Bug, Layers, Lightbulb, FileText, Wrench];

export function Impact() {
  const ref = useRef(null);

  return (
    <section id="impact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Internship Impact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            How I contributed
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Beyond writing code — the problem-solving, ownership, and communication I brought to the team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {impactItems.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item.title}
                className="h-full"
              >
                <SpotlightCard className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 rounded-md bg-primary/15 text-primary flex items-center justify-center border border-primary/20 group-hover:bg-primary/25 transition-all duration-300"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.div>
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {item.description}
                  </p>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
